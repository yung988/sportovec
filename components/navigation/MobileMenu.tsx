import { navItems } from "./navItems";
import MobileNavButton from "./MobileNavButton";
import MobileContactButton from "./MobileContactButton";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg">
      <nav className="flex flex-col py-4">
        {navItems.map((item) => (
          <MobileNavButton 
            key={item.id} 
            item={item} 
            onClose={onClose} 
          />
        ))}
        <MobileContactButton onClose={onClose} />
      </nav>
    </div>
  );
};

export default MobileMenu; 