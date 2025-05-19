import React from "react";

const Terms = () => {
  return (
    <main className="p-8  max-w-7xl mx-auto text-sm space-y-6 bg-red-800 text-white rounded-md shadow-lg">
      <h1 className="text-xl sm:text-2xl mt-8 lg:text-6xl px-4 sm:px-8 lg:px-32 py-12 lg:py-20 font-extrabold leading-tight text-center">
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

      {/* ... all other sections unchanged ... */}

      <section>
        <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Complaints</h2>
        <p className="text-white/90 font-bold text-md">
          Questions or complaints should be sent to:{" "}
          <a href="mailto:customerservices@flamenbun.co.uk" className="text-blue-300 underline">
            customerservices@flamenbun.co.uk
          </a>
        </p>
      </section>

      {/* continue with remaining sections */}
    </main>
  );
};

export default Terms;
