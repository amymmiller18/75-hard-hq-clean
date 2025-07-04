export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 max-w-2xl text-center">
        <h1 className="font-serif text-5xl mb-4 text-eucalyptus-dark">75 Hard HQ</h1>
        <p className="text-lg mb-6">
          Your all‑in‑one spa‑calm dashboard for diet, exercise, menstrual insights, and
          more—built on a forever‑free stack.
        </p>
        <a
          href="#"
          className="inline-block bg-eucalyptus-dark text-white rounded-2xl px-6 py-3 font-medium hover:opacity-90 transition"
        >
          Sign in to Begin
        </a>
      </div>
    </main>
  );
}
