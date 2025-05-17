import React from "react";

const Terms = () => {
  return (
    <div className="p-8 max-w-auto mx-auto text-sm space-y-6 bg-red-800 text-white rounded-md shadow-lg">
      <h1 className="text-xl relative top-14 sm:text-2xl lg:text-6xl px-4 sm:px-8 lg:px-32 py-12 lg:py-20 font-extrabold leading-tight text-center">
        <span className="block">Terms and Conditions</span>
        <span className="block">Promotions, Competitions</span>
        <span className="block">Loyalty Programs Website</span>
      </h1>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Website Participation</h2>
        <ol className="list-disc list-inside font-bold text-md space-y-2 pl-4">
          <li>Only natural persons aged 18 or older may participate. Flame’n Bun may request proof.</li>
          <li>Participants must have a valid UK email and physical address. Fake or incomplete information may lead to disqualification.</li>
          <li>Employees of Flame’n Bun, associated businesses, and anyone involved with the promotion are excluded.</li>
          <li>Any suspicion of misuse, fraud, or breach of rules can result in exclusion without explanation or proof.</li>
          <li>By participating, entrants agree to these terms.</li>
          <li>Entries submitted outside the promotion period or improperly submitted will be invalid.</li>
          <li>Participation is free unless otherwise stated.</li>
          <li>Participants guarantee that entry materials are legal, non-infringing, and respectful. Flame’n Bun may remove entries deemed inappropriate.</li>
          <li>All rights to entry materials are transferred to Flame’n Bun unconditionally. Flame’n Bun may use them across media in the UK without compensation.</li>
          <li>Participants may request their entry material be removed during the promotion period, which will invalidate their participation.</li>
          <li>Rule breaches may lead to disqualification and reassignment of the prize.</li>
          <li>Automated or manipulated participation methods are prohibited.</li>
          <li>Winners may be asked to participate in Flame’n Bun marketing. Refusal may result in prize withdrawal.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Loyalty Cards</h2>
        <ol className="list-disc list-inside font-bold text-md space-y-2 pl-4">
          <li>Loyalty cards are valid only at the issuing store.</li>
          <li>Stamps must be issued and redeemed at the same store.</li>
          <li>Loyalty rewards cannot be combined with other promotions.</li>
          <li>Redemptions must occur within the specified period.</li>
          <li>Free trip terms differ and can be requested at marketing@flamenbun.co.uk.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">The Benefit</h2>
        <p className="text-white/90 font-bold text-md">
          Benefits are personal, non-transferable, and cannot be exchanged for cash or services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Exclusion of Liability</h2>
        <ol className="list-disc list-inside font-bold text-md space-y-2 pl-4">
          <li>Flame’n Bun is not liable for any costs associated with the benefit unless due to gross negligence or intent.</li>
          <li>Flame’n Bun is not liable for technical issues causing entry problems.</li>
          <li>No guarantees on benefit delivery, accuracy, or condition unless due to gross negligence or intent.</li>
          <li>Flame’n Bun is not liable for fraudulent activity by participants.</li>
          <li>Participants are responsible for their submissions and will indemnify Flame’n Bun from third-party claims.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Privacy</h2>
        <p className="text-white/90 font-bold text-md">
          Personal data is handled per privacy laws and may be used for managing the promotion, research, and direct marketing. Data
          may be shared within Flame’n Bun group or with authorities when required.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Complaints</h2>
        <p className="text-white/90 font-bold text-md">
          Questions or complaints should be sent to:{" "}
          <a href="mailto:customerservices@flamenbun.co.uk" className="text-blue-300 underline">
            customerservices@flamenbun.co.uk
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Final Provisions</h2>
        <ol className="list-disc list-inside font-bold text-md space-y-2 pl-4">
          <li>Flame’n Bun may amend or cancel these terms due to legal or practical concerns.</li>
          <li>Latest terms will be available on the website.</li>
          <li>Clerical errors do not create binding obligations.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">% OFF or £ OFF Discounts</h2>
        <ol className="list-disc list-inside font-bold text-md space-y-2 pl-4">
          <li>Discounts apply only to specified items.</li>
          <li>No cash alternative.</li>
          <li>Valid for 1 month from campaign start.</li>
          <li>Only redeemable at the listed Flame’n Bun store.</li>
          <li>Management may withdraw or refuse any discount.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Aggregator Discount Promotion – May 2025</h2>
        <ul className="list-disc list-inside font-bold text-md space-y-2 pl-4">
          <li>Valid with code MAY8 (01–31 May).</li>
          <li>Only at participating stores.</li>
          <li>One-time use. Not combinable. Minimum spend applies.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Bundle Offers</h2>
        <ul className="list-disc list-inside font-bold text-md space-y-2 pl-4">
          <li>Bundle savings reflect prices of items if bought separately.</li>
          <li>Bundle contents are fixed. No substitutions.</li>
          <li>Out-of-stock items will not be replaced.</li>
          <li>Limited time only.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Free Item Promotions</h2>
        <ul className="list-disc list-inside font-bold text-md space-y-2 pl-4">
          <li>Only the listed free item is given.</li>
          <li>3 wings make up a free wing portion.</li>
          <li>Flavour substitutions may be made by management.</li>
          <li>Customers must select the free item when ordering.</li>
          <li>No alternatives for out-of-stock items.</li>
          <li>Promotion may be withdrawn anytime.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Delivery</h2>
        <ul className="list-disc list-inside font-bold text-md space-y-2 pl-4">
          <li>Minimum order value may apply.</li>
          <li>Delivery options can be withdrawn by management.</li>
          <li>Discounts apply only to listed stores.</li>
          <li>Not all offers are available on every platform.</li>
        </ul>
      </section>
    </div>
  );
};

export default Terms;
