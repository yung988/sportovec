import Link from "next/link";

export const FooterLinks = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Odkazy</h3>
      <ul className="space-y-2">
        <li>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Domů
          </Link>
        </li>
        <li>
          <Link
            href="#services"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Služby
          </Link>
        </li>
        <li>
          <Link
            href="#pricing"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Ceník
          </Link>
        </li>
        <li>
          <Link
            href="#faq"
            className="text-gray-400 hover:text-white transition-colors"
          >
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks; 