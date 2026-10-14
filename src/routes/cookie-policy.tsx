import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/cookie-policy')({
  component: CookiePolicy,
});

function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white text-[#012b3a] pt-36 pb-24 px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#012b3a] mb-8">
          Cookie <span className="text-[#1da1db]">Policy</span>
        </h1>
        <p className="text-[#00779b]">Testo della cookie policy in aggiornamento...</p>
      </div>
    </div>
  );
}