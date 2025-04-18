import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const FooterSocial = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Sledujte nás</h3>
      <div className="flex space-x-4">
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="h-6 w-6" />
        </Link>
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="h-6 w-6" />
        </Link>
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default FooterSocial; 