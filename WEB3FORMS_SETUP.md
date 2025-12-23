# Web3Forms Setup Instructions

This project uses Web3Forms to handle contact form submissions. It's completely free and requires no signup!

## Quick Setup (2 minutes)

1. **Get your Access Key:**
   - Go to [https://web3forms.com/](https://web3forms.com/)
   - Enter your email address
   - Click "Get Access Key"
   - Copy the access key (it will be sent to your email)

2. **Add to Environment Variables:**
   - Create a `.env.local` file in the root of your Next.js project
   - Add this line:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

3. **Restart your dev server:**
   ```bash
   npm run dev
   ```

That's it! The form will now send emails directly to your inbox.

## Features

- ✅ **100% Free** - No credit card required
- ✅ **No Signup Required** - Just enter your email
- ✅ **250 submissions/month** free tier
- ✅ **Spam Protection** - Built-in honeypot and rate limiting
- ✅ **Email Notifications** - Receive form submissions in your inbox
- ✅ **Simple Setup** - Just one access key needed

## How It Works

When someone submits the contact form:
1. The form data is sent to Web3Forms API
2. Web3Forms sends you an email with all the form details
3. You receive the email in your inbox

## Alternative: Formspree

If you prefer Formspree instead:
1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form
3. Get your form endpoint URL
4. Update the Contact component to use Formspree's endpoint

## Troubleshooting

- Make sure the environment variable is prefixed with `NEXT_PUBLIC_`
- Restart your dev server after adding environment variables
- Check the browser console for any errors
- Verify your access key is correct

