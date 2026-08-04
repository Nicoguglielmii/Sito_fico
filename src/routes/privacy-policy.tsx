import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#001724] text-white pt-40 pb-24 px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-[#38bdf8] mb-8">Privacy Policy</h1>
        <p className="text-gray-300">Testo della privacy policy in aggiornamento...</p>
      </div>
    </div>
  );
}