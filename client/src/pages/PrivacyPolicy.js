// import React from "react";

// function PrivacyPolicy() {
//   return (
//     <div className="flex flex-col items-center justify-center w-full h-screen text-center md:px-5">
//       <h1 className="font-bold text-2xl">Privacy Policy</h1>

//       <p className="md:text-sm">This is the privacy policy for HMS DISTRIBUTORS.</p>

//       <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">Information We Collect</h2>
//       <p className="md:text-sm">We collect information in various ways...</p>

//       <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">How We Use Your Information</h2>
//       <p className="md:text-sm">We use your information to...</p>

//       <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">Sharing Your Information</h2>
//       <p className="md:text-sm">We may share your information with...</p>

//       <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">Security of Your Information</h2>
//       <p className="md:text-sm">We take steps to protect your information...</p>

//       <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">Changes to This Privacy Policy</h2>
//       <p className="md:text-sm">We may update our Privacy Policy from time to time...</p>

//       <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1">Contact Us</h2>
//       <p className="md:text-sm">
//         If you have any questions about this Privacy Policy, please contact
//         us <a href="/contact" className="text-blue-500 border-b-2 border-blue-500">Here</a>
//       </p>
//     </div>
//   );
// }

// export default PrivacyPolicy;


import React, { useState, useEffect } from "react";

const tabs = ["Terms & Conditions", "Privacy Policy", "Return Policy"];

export default function PoliciesPage() {
  const [selectedTab, setSelectedTab] = useState("Terms & Conditions");

  const renderContent = () => {
    switch (selectedTab) {
      case "Privacy Policy":
        return (
          <>
            <h1 className="font-bold text-xl mb-4">Privacy Policy</h1>
            <p className="mb-4">This is the privacy policy for HMS EGG DISTRIBUTORS.</p>
            <Section title="Information We Collect" content="We collect information in various ways..." />
            <Section title="How We Use Your Information" content="We use your information to..." />
            <Section title="Sharing Your Information" content="We may share your information with..." />
            <Section title="Security of Your Information" content="We take steps to protect your information..." />
            <Section title="Changes to This Privacy Policy" content="We may update our Privacy Policy from time to time..." />
            <Section title="Contact Us" content={<span>If you have any questions, contact us <a href="/contact" className="text-blue-500 border-b border-blue-500">here</a>.</span>} />
          </>
        );
      case "Terms & Conditions":
        return (
          <>
            <h1 className="font-bold text-xl mb-4">Terms and Conditions</h1>
            <Section title="1. Introduction" content="These Terms and Conditions (“Agreement”) govern the provision of egg supply services..." />
            <Section title="2. Egg Supply and Credit Terms" content="We will deliver eggs every two (2) days based on prior agreement. Payments are due within 2 days of delivery." />
            <Section title="3. Repayment Failure and Legal Action" content="Late payments may incur legal action and a 5% late fee per cycle." />
            <Section title="4. Crates Provided for Egg Delivery" content="Crates remain our property and must be returned in good condition. Replacement cost: ₹35/crate." />
            <Section title="5. Liability and Damages" content="You're responsible after delivery. Claims for damages must be made within 24 hours." />
          </>
        );
      case "Return Policy":
        return (
          <>
            <h1 className="font-bold text-xl mb-4">Return Policy</h1>
            <Section title="Damaged or Broken Eggs" content="We accept returns only if damage is reported within 24 hours of delivery." />
            <Section title="Crate Returns" content="Crates must be returned at the next delivery or ₹35/crate will be charged." />
            <Section title="No Returns for Sold Goods" content="We do not accept returns once eggs are sold or used." />
            <Section title="How to Report Issues" content="Contact our support within 24 hours via call or through the app support section." />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen py-10 px-4 bg-gradient-to-b from-white via-gray-100 to-green-100">
      {/* Tab Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-3xl mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`w-full py-3 font-semibold rounded-xl transition-all duration-300
              ${
                selectedTab === tab
                  ? "bg-green-400 text-white shadow-md"
                  : "bg-white text-green-600 border border-green-300 hover:bg-green-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 text-left">
        {renderContent()}
      </div>
    </div>
  );
}

// Section Component for titles and content
function Section({ title, content }) {
  return (
    <div className="mb-6">
      <h2 className="font-semibold bg-green-200 rounded-md px-4 py-2 text-sm mb-2">
        {title}
      </h2>
      <p className="text-sm text-gray-800">{content}</p>
    </div>
  );
}
