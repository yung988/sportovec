import type { NavItem } from './navItems';

type NavLinkProps = {
  item: NavItem;
};

export const NavLink = ({ item }: NavLinkProps) => {
  return (
    <a
      href={item.href}
      className="text-sm font-medium hover:text-green-700 transition-colors"
    >
      {item.label}
    </a>
  );
};

export default NavLink; 