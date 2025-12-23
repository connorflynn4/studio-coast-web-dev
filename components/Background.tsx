export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="stars absolute w-[1px] h-[1px] bg-transparent rounded-full opacity-50"></div>
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] glow-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] glow-blob animation-delay-2000"></div>
    </div>
  );
}

