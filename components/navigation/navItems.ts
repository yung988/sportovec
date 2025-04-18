export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  {
    id: "about",
    label: "O nás",
    href: "#about"
  },
  {
    id: "services",
    label: "Služby",
    href: "#services"
  },
  {
    id: "testimonials",
    label: "Reference",
    href: "#testimonials"
  },
  {
    id: "pricing",
    label: "Ceny",
    href: "#pricing"
  }
];

export default navItems; 