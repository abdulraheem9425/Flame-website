import React from 'react';

// Section component to handle individual sections with headings and content
const Section = ({ title, children }) => (
  <section className="py-6">
    <h2 className="text-2xl font-semibold text-yellow-400 mb-4">{title}</h2>
    {children}
  </section>
);

const PrivacyPolicy = () => {
  return (
<div className="min-h-screen w-full bg-red-800 text-white px-20 py-36 overflow-auto">
<h1 className="text-5xl font-bold text-center mb-6 text-yellow-500">Privacy Policy</h1>

      <Section title="Introduction">
        <p>
          This Privacy Statement (“Statement”) describes the personal information practices of Pepe’s Piri Piri (Pepe’s) and its associated companies, including Pepe’s Franchising Ltd and Pepe’s Food Service Ltd, with respect to information about our customers and others who use our services including the types of personal information we collect, how we may use such information and with whom we may share it.
        </p>
        <p>
          Please note that ALL Pepe’s Piri Piri stores and restaurants are owned and operated by Franchisees, who are independent businesspersons. This Privacy Statement does not apply to these Franchisees, and you should also refer to the privacy notices of such Franchisees for information on their practices with respect to personal information.
        </p>
      </Section>

      <Section title="1. When we may collect Personal Information from you">
        <p>We may collect personal information about you when you interact with us:</p>
        <ul className="list-disc list-inside pl-5">
          <li>Directly – through contact with Pepe’s Piri Piri Head Office</li>
          <ul className="list-disc list-inside pl-5">
            <li>Customer Enquiry about services or stores</li>
            <li>Customer Complaint about a store</li>
            <li>Enquiry about operating a franchise agreement with Pepe’s</li>
          </ul>
          <li>Indirectly – through contact with a Pepe’s store or online ordering applications</li>
          <ul className="list-disc list-inside pl-5">
            <li>Pepe’s App order</li>
            <li>Pepe’s Web order</li>
            <li>Telephone order to a store</li>
          </ul>
        </ul>
      </Section>

      <Section title="2. What information might we collect">
        <p>The specific information we will collect depends upon the reason for collecting it, however as a guide we may collect the following information:</p>
        <ul className="list-disc list-inside pl-5">
          <li>Your Name</li>
          <li>Your Address</li>
          <li>Your Contact Phone Number</li>
          <li>Your Contact Email Address</li>
          <li>Your Credit/Debit Card information (for payment processing only)</li>
        </ul>
      </Section>

      <Section title="3. How we use the information we collect">
        <p>Pepe’s will use the personal information we collect to:</p>
        <ul className="list-disc list-inside pl-5">
          <li>Fulfil your requests or orders and process payments for our products and services</li>
          <li>Send communications to you about your orders and purchases</li>
          <li>Communicate with you about and administer your entry into competitions</li>
          <li>Provide customer support, respond to and communicate with you about your enquiries or complaints</li>
          <li>Protect against, identify and prevent fraud and other criminal activity, claims and other liabilities</li>
        </ul>
        <p>If you have given us permission to, Pepe’s will also use the personal information we collect to:</p>
        <ul className="list-disc list-inside pl-5">
          <li>Send general information about our services</li>
          <li>Send general information about our product range</li>
          <li>Send information about promotions and competitions</li>
          <li>Send store-specific information</li>
        </ul>
        <p>If we wish to use your information in any other way, we will obtain consent prior to its specific use.</p>
      </Section>

      <Section title="4. How we share the personal information">
        <p>Pepe’s uses a few 3rd party suppliers to operate and manage the information technology used within the business.</p>
        <p>The information that these suppliers hold on behalf of Pepe’s, will only be used for the purposes already stated and will not be sold or otherwise shared outside of the Pepe’s.</p>
        <p>Pepe’s may share your personal information with their Franchisees, if required to fulfil an obligation to you, however these Franchisees are not authorised to use or disclose the information supplied.</p>
      </Section>

      <Section title="5. Children’s Privacy Notice">
        <p>Pepe’s does not and will not knowingly collect any personal data from a person under the age of 16, either in-store or through its online services.</p>
      </Section>

      <Section title="6. Your choices">
        <p>If you have opted-in to marketing communications, you can subsequently elect not to receive marketing communications from Pepe’s by following the opt-out instructions in any marketing communication we send you or contacting us using either the address or email provided at the end of this document.</p>
      </Section>

      <Section title="7. Access to and Corrections and Deletion of Personal Information">
        <p>If at any time you would like to access, correct, or delete personal information we have collected from you, please contact us using either the address or email provided at the end of this document.</p>
      </Section>

      <Section title="8. Links with others">
        <p>Pepe’s App and Web Ordering facility may contain links to websites not owned or operated by Pepe’s or one of its information technology suppliers.</p>
        <p>Pepe’s cannot control or be responsible for the privacy practices of such sites. If you are directed to one of these other sites, Pepe’s strongly suggests that you read the Privacy Statement of that site.</p>
      </Section>

      <Section title="9. Information Security">
        <p>Pepe’s is committed to taking appropriate measures to keep personal information secure.</p>
        <p>We have in place technical, administrative, and physical procedures designed to protect personal information from accidental, unlawful, or unauthorized loss, access, disclosure, use, alteration, or destruction.</p>
      </Section>

      <Section title="10. Retention of Personal Information">
        <p>We retain personal information for the period necessary to fulfill the purposes outlined in this Privacy Statement and in line with Pepe’s policies on record retention unless a longer retention period is required or permitted by Law.</p>
      </Section>

      <Section title="11. International Data Transfers">
        <p>This Privacy Statement does not apply to Pepe’s international stores. Please refer to the privacy notices of such Franchisees for information on their practices with respect to personal information.</p>
        <p>Pepe’s will not transfer any personal data outside of the UK.</p>
      </Section>

      <Section title="12. Changes to this Privacy Statement">
        <p>We may change this Privacy Statement from time to time. When changes are made we will post the revised version here and change the “Effective Date” listed at the top of this statement.</p>
        <p>We encourage you to periodically check for the up-to-date version of our Statement.</p>
      </Section>

      <Section title="13. How to Contact Us">
        <p>If you wish to contact us concerning this Privacy Statement you can email us at customerservices@pepes.co.uk. (Please state “Privacy Statement” in the subject line, to enable easy identification of the email.)</p>
        <p>If you prefer to write to us, or wish to contact us for anything else, please send your letter to:</p>
        <address>
          Marketing Dept.<br />
          Pepe’s Franchising Ltd<br />
          Unit 3, Olds Close<br />
          Watford<br />
          Hertfordshire<br />
          WD18 9RU
        </address>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
