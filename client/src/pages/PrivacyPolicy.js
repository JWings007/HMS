import React from "react";

function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center md:px-5">
      <h1 className="font-bold text-2xl">Privacy Policy</h1>

      <p className="md:text-sm">This is the privacy policy for HMS DISTRIBUTORS.</p>

      <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">Information We Collect</h2>
      <p className="md:text-sm">We collect information in various ways...</p>

      <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">How We Use Your Information</h2>
      <p className="md:text-sm">We use your information to...</p>

      <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">Sharing Your Information</h2>
      <p className="md:text-sm">We may share your information with...</p>

      <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">Security of Your Information</h2>
      <p className="md:text-sm">We take steps to protect your information...</p>

      <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1 md:text-sm mb-2">Changes to This Privacy Policy</h2>
      <p className="md:text-sm">We may update our Privacy Policy from time to time...</p>

      <h2 className="mt-5 font-semibold bg-green-200 rounded-md px-5 py-1">Contact Us</h2>
      <p className="md:text-sm">
        If you have any questions about this Privacy Policy, please contact
        us <a href="/contact" className="text-blue-500 border-b-2 border-blue-500">Here</a>
      </p>
    </div>
  );
}

export default PrivacyPolicy;
