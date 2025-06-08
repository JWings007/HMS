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


import React from "react";

function LegalPolicies() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center md:px-5">
      <h1 className="font-bold text-2xl">HMS Egg Distributors - Legal Policies</h1>

      {/* Privacy Policy */}
      <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">Privacy Policy</h2>
      <p className="md:text-sm"><strong>Effective Date:</strong> 10 March 2025</p>
      <p className="md:text-sm">
        We value your privacy. This Privacy Policy outlines how HMS Egg Distributors collects, uses, and protects your personal data.
      </p>
      <ul className="list-disc text-left md:text-sm mt-2 mx-4">
        <li>We collect basic information like your name, phone number, delivery address, and transaction history.</li>
        <li>Data is used solely to enhance service quality, handle deliveries, process payments, and communicate with you.</li>
        <li>We do not sell or rent your data. Third-party sharing is limited to trusted service providers (e.g. payment processors).</li>
        <li>
          You have the right to access, update, or delete your data by contacting us{" "}
          <a href="/contact" className="text-blue-500 border-b-2 border-blue-500">
            Here
          </a>
        </li>
      </ul>

      {/* Terms and Conditions */}
      <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">Terms and Conditions</h2>
      <p className="md:text-sm"><strong>Last Revised:</strong> 10 March 2025</p>
      <p className="md:text-sm">
        By using our egg supply services, you agree to the following terms:
      </p>
      <ul className="list-disc text-left md:text-sm mt-2 mx-4">
        <li>Eggs are delivered every 2 days based on your regular order cycle.</li>
        <li>Payment is due within 2 days of delivery. Delayed payments will incur a 5% late fee per cycle.</li>
        <li>All crates remain our property. Each unreturned/damaged crate will be charged ₹35.</li>
        <li>Customers must ensure safe handling of delivered eggs. We are not liable for damages caused after delivery.</li>
        <li>Damaged egg claims must be made within 24 hours of delivery for consideration.</li>
        <li>We are not liable for service disruptions due to events outside our control (Force Majeure).</li>
      </ul>

      {/* Return Policy */}
      <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">Return Policy</h2>
      <p className="md:text-sm"><strong>Effective Date:</strong> 10 March 2025</p>
      <p className="md:text-sm">
        Our return policy applies under the following conditions:
      </p>
      <ul className="list-disc text-left md:text-sm mt-2 mx-4">
        <li>Eggs are perishable and non-returnable unless there is visible damage or delivery mismatch.</li>
        <li>Claims must be made within 24 hours of receipt with photo proof where applicable.</li>
        <li>Approved claims may result in replacements or credit in the next delivery cycle.</li>
        <li>Refunds (if any) will be processed within 3-5 working days.</li>
      </ul>
    </div>
  );
}

export default LegalPolicies;
