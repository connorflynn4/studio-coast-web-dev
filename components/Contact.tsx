'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type ProjectType = 'full-stack' | 'frontend' | 'backend' | 'ai-integration' | 'consultation' | '';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: '' as ProjectType,
    budget: '50000',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{
    fullName?: string;
    email?: string;
    projectType?: string;
  }>({});

  // Auto-dismiss success message after 8 seconds
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const projectTypes = [
    { value: 'full-stack', label: 'Full-Stack Application', description: 'Complete web application with frontend and backend' },
    { value: 'frontend', label: 'Frontend Development', description: 'User interface and client-side functionality' },
    { value: 'backend', label: 'Backend Development', description: 'API, database, and server infrastructure' },
    { value: 'ai-integration', label: 'AI Integration', description: 'Integrating AI features into existing or new applications' },
    { value: 'consultation', label: 'Consultation', description: 'Design advice & planning' }
  ];

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          return 'Full name is required';
        }
        if (value.trim().length < 2) {
          return 'Name must be at least 2 characters';
        }
        if (value.trim().length > 100) {
          return 'Name must be less than 100 characters';
        }
        return undefined;
      
      case 'email':
        if (!value.trim()) {
          return 'Email address is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address';
        }
        return undefined;
      
      case 'projectType':
        if (!value) {
          return 'Please select a project type';
        }
        return undefined;
      
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof typeof fieldErrors];
        return newErrors;
      });
    }
    
    // Real-time validation (only after user has interacted with the field)
    const error = validateField(name, value);
    if (error) {
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    } else {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof typeof fieldErrors];
        return newErrors;
      });
    }
  };

  const formatBudget = (value: string) => {
    const num = parseInt(value);
    if (num < 1000) return `$${num.toLocaleString()}`;
    if (num < 1000000) return `$${(num / 1000).toFixed(0)}k`;
    return `$${(num / 1000000).toFixed(1)}M`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Validate all fields
    const errors: typeof fieldErrors = {};
    const fullNameError = validateField('fullName', formData.fullName);
    const emailError = validateField('email', formData.email);
    const projectTypeError = validateField('projectType', formData.projectType);

    if (fullNameError) errors.fullName = fullNameError;
    if (emailError) errors.email = emailError;
    if (projectTypeError) errors.projectType = projectTypeError;

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMessage('Please fix the errors below before submitting.');
      setIsSubmitting(false);
      setSubmitStatus('error');
      // Scroll to first error
      const firstErrorField = document.querySelector('[name="' + Object.keys(errors)[0] + '"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        (firstErrorField as HTMLElement).focus();
      }
      return;
    }

    try {
      // Web3Forms - Free form handling service
      // Get your access key from https://web3forms.com/ (no signup required!)
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Project Inquiry from ${formData.fullName}`,
          from_name: formData.fullName,
          email: formData.email,
          project_type: projectTypes.find(p => p.value === formData.projectType)?.label || formData.projectType,
          budget: formatBudget(formData.budget),
          message: formData.projectDetails,
          to_name: 'Studio Coast'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFieldErrors({});
        setFormData({
          fullName: '',
          email: '',
          projectType: '',
          budget: '50000',
          projectDetails: ''
        });
        // Scroll to top of form to show success message
        const formElement = document.getElementById('contact');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto rounded-3xl bg-neutral-900/40 border border-white/10 p-8 md:p-12 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-2 text-center">Request a Quote</h2>
          <p className="text-neutral-400 text-sm md:text-base mb-8 max-w-lg mx-auto text-center font-light">
            Tell us about your vision. We&apos;ll analyze your needs and provide a preliminary estimate and timeline.
          </p>

          {submitStatus === 'success' && (
            <div className="mb-6 p-5 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3 animate-[fadeIn_0.5s_ease-in-out]">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 animate-[scaleIn_0.3s_ease-out]" />
              <div className="flex-1">
                <p className="text-base font-medium text-green-400 mb-1">Inquiry Sent Successfully! ✨</p>
                <p className="text-sm text-green-300/80">Thank you for your interest! We&apos;ve received your request and will get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-sm text-red-400">{errorMessage || 'Something went wrong. Please try again.'}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-neutral-300 mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`w-full bg-black/50 border text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 transition-all text-sm placeholder:text-neutral-600 ${
                  fieldErrors.fullName
                    ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                    : 'border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20'
                }`}
                placeholder="Jane Doe"
              />
              {fieldErrors.fullName && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {fieldErrors.fullName}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`w-full bg-black/50 border text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 transition-all text-sm placeholder:text-neutral-600 ${
                  fieldErrors.email
                    ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                    : 'border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20'
                }`}
                placeholder="jane@example.com"
              />
              {fieldErrors.email && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {fieldErrors.email}
                </p>
              )}
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-neutral-300 mb-2">
                Project Type <span className="text-red-400">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`w-full bg-black/50 border text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 transition-all text-sm ${
                  fieldErrors.projectType
                    ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                    : 'border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20'
                }`}
              >
                <option value="">Select a project type...</option>
                {projectTypes.map((type) => (
                  <option key={type.value} value={type.value} className="bg-neutral-900">
                    {type.label}
                  </option>
                ))}
              </select>
              {fieldErrors.projectType && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {fieldErrors.projectType}
                </p>
              )}
              {formData.projectType && !fieldErrors.projectType && (
                <p className="mt-2 text-xs text-neutral-500">
                  {projectTypes.find(p => p.value === formData.projectType)?.description}
                </p>
              )}
            </div>

            {/* Estimated Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-neutral-300 mb-2">
                Estimated Budget
              </label>
              <div className="space-y-3">
                <input
                  type="range"
                  id="budget"
                  name="budget"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-xs text-neutral-500">
                  <span>-5k</span>
                  <span className="text-indigo-400 font-medium">{formatBudget(formData.budget)}</span>
                  <span>$100k+</span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label htmlFor="projectDetails" className="block text-sm font-medium text-neutral-300 mb-2">
                Project Details
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                rows={5}
                className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm placeholder:text-neutral-600 resize-none"
                placeholder="Tell us about your space, timeline, and inspiration..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-xs font-medium bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-full transition-all text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Submit Request'
              )}
            </button>

            <p className="text-xs text-neutral-600 text-center">
              Free consultation. We&apos;ll review your request and get back to you within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
