import React from 'react';

// Section component to handle individual sections with headings and content
const Section = ({ title, children }) => (
  <section className="py-4">
    <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">{title}</h2>
    {children}
  </section>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen w-full bg-red-800 text-white px-6 sm:px-10 md:px-20 py-36 sm:py-28 overflow-auto">
      <h1 className="text-3xl   sm:text-4xl md:text-5xl font-bold text-center mb-6 text-yellow-500">Privacy Policy</h1>

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
          <li>Directly – through contact with Flame’n Bun Head Office:</li>
          <ul className="list-disc list-inside pl-5">
            <li>Customer enquiry about services or stores</li>
            <li>Customer complaint about a store</li>
            <li>Franchise business enquiry</li>
          </ul>
          <li>Indirectly – through interactions with a store or online ordering:</li>
          <ul className="list-disc list-inside pl-5">
            <li>Flame’n Bun app orders</li>
            <li>Flame’n Bun website orders</li>
            <li>Phone orders to a store</li>
          </ul>
        </ul>
      </Section>

      <Section title="2. What information might we collect">
        <p>Depending on the purpose, we may collect the following personal information:</p>
        <ul className="list-disc list-inside pl-5">
          <li>Your name</li>
          <li>Your address</li>
          <li>Your phone number</li>
          <li>Your email address</li>
          <li>Your payment details (for processing only)</li>
        </ul>
      </Section>

      <Section title="3. How we use the information we collect">
        <p>Flame’n Bun will use your personal information to:</p>
        <ul className="list-disc list-inside pl-5">
          <li>Fulfil orders and process payments</li>
          <li>Send order and purchase confirmations</li>
          <li>Handle competition entries</li>
          <li>Provide customer service and respond to queries</li>
          <li>Prevent fraud and manage risks</li>
        </ul>
        <p>If you give consent, we may also use it to:</p>
        <ul className="list-disc list-inside pl-5">
          <li>Send service and product updates</li>
          <li>Inform about promotions and offers</li>
          <li>Share store-specific news</li>
        </ul>
        <p>Any new use will require your prior consent.</p>
      </Section>

      <Section title="4. How we share personal information">
        <p>We may work with trusted third-party providers to manage our IT systems.</p>
        <p>Your information will only be used as described and never sold or misused.</p>
        <p>Information may be shared with our Franchisees to fulfill obligations, but they are not authorized to use or disclose your data independently.</p>
      </Section>

      <Section title="5. Children’s Privacy Notice">
        <p>Flame’n Bun does not knowingly collect personal data from anyone under 16 years of age.</p>
      </Section>

      <Section title="6. Your choices">
        <p>If you’ve subscribed to marketing, you may opt out at any time via the unsubscribe link in our communications or by contacting us using the details at the end of this page.</p>
      </Section>

      <Section title="7. Access, Correction, and Deletion">
        <p>To access, correct, or delete your data, please contact us using the email or address provided at the end of this policy.</p>
      </Section>

      <Section title="8. Links to Other Sites">
        <p>Our website/app may contain links to other websites. Flame’n Bun is not responsible for the privacy practices of those websites. Please review their privacy policies separately.</p>
      </Section>

      <Section title="9. Information Security">
        <p>Flame’n Bun takes your data security seriously. We employ technical, physical, and administrative safeguards to protect your information.</p>
      </Section>

      <Section title="10. Retention of Personal Information">
        <p>We retain data only for as long as necessary, in accordance with our policies and legal requirements.</p>
      </Section>

      <Section title="11. International Data Transfers">
        <p>This policy applies only to the UK-based Flame’n Bun operations. We do not transfer personal data internationally.</p>
      </Section>

      <Section title="12. Changes to this Privacy Statement">
        <p>We may update this policy from time to time. Please review it periodically to stay informed.</p>
      </Section>

      <Section title="13. Contact Us">
        <p>If you have questions about this Privacy Policy, contact us at <strong>customerservices@flamenbun.co.uk</strong> with “Privacy Statement” in the subject line.</p>
        <p>You can also write to us at:</p>
        <address>
          Marketing Dept.<br />
          Flame’n Bun Ltd<br />
          14 Lambton Rd<br />
          Raynes Park<br />
          London SW20 0LR<br />
          United Kingdom
        </address>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
