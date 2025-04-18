"use client";

import FooterAbout from "./footer/FooterAbout";
import FooterLinks from "./footer/FooterLinks";
import FooterContact from "./footer/FooterContact";
import FooterSocial from "./footer/FooterSocial";
import FooterCopyright from "./footer/FooterCopyright";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterAbout />
          <FooterLinks />
          <FooterContact />
          <FooterSocial />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer; 