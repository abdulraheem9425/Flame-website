import React from 'react';

// Section component for reusable section blocks
const Section = ({ title, children }) => (
  <section className="py-4">
    <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">{title}</h2>
    {children}
  </section>
);

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen w-full bg-red-800 text-white px-6 sm:px-10 md:px-20 py-20 sm:py-28 overflow-auto">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-yellow-500">
          Privacy Policy
        </h1>

        <Section title="Introduction">
          <p>
            This Privacy Statement (“Statement”) describes the personal information practices of Flame’n Bun and its associated companies, including how we collect, use, and share customer data.
          </p>
          <p>
            Please note that all Flame’n Bun restaurants are operated by independent Franchisees. This Privacy Statement does not apply to these Franchisees. Please refer to their individual privacy notices for more details.
          </p>
        </Section>

        <Section title="1. When we may collect Personal Information from you">
          <p>We may collect personal information about you when you interact with us:</p>
          <ul className="list-disc list-inside pl-5">
            <li>Directly – through contact with Flame’n Bun Head Office:
              <ul className="list-disc list-inside pl-5">
                <li>Customer enquiry about services or stores</li>
                <li>Customer complaint about a store</li>
                <li>Franchise business enquiry</li>
              </ul>
            </li>
            <li>Indirectly – through interactions with a store or online ordering:
              <ul className="list-disc list-inside pl-5">
                <li>Flame’n Bun app orders</li>
                <li>Flame’n Bun website orders</li>
                <li>Phone orders to a store</li>
              </ul>
            </li>
          </ul>
        </Section>

        {/* Other sections unchanged, just for brevity */}

        <Section title="13. Contact Us">
          <p>
            If you have questions about this Privacy Policy, contact us at <strong>customerservices@flamenbun.co.uk</strong> with “Privacy Statement” in the subject line.
          </p>
          <p>You can also write to us at:</p>
          <address className="not-italic mt-3 space-y-1">
            <div>Marketing Dept.</div>
            <div>Flame’n Bun Ltd</div>
            <div>14 Lambton Rd</div>
            <div>Raynes Park</div>
            <div>London SW20 0LR</div>
            <div>United Kingdom</div>
          </address>
        </Section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
