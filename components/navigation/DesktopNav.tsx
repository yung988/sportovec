import SearchBar from "./SearchBar";
import NavLink from "./NavLink";
import ContactButton from "./ContactButton";
import { navItems } from "./navItems";

export const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center gap-8">
      <SearchBar />
      <nav className="flex items-center gap-6">
        {navItems.map((item) => (
          <NavLink key={item.id} item={item} />
        ))}
      </nav>
      <ContactButton />
    </div>
  );
};

export default DesktopNav; 