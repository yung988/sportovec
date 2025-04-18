import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ContactButtonProps = {
  className?: string;
};

export const ContactButton = ({ className = "" }: ContactButtonProps) => {
  return (
    <Link
      href="#contact"
      className={`rounded-full bg-black hover:bg-gray-800 px-6 text-white text-sm font-medium flex items-center ${className}`}
    >
      Kontaktujte nás <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
};

export default ContactButton; 