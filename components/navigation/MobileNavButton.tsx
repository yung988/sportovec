import type { NavItem } from './navItems';

type MobileNavButtonProps = {
  item: NavItem;
  onClose: () => void;
};

export const MobileNavButton = ({ item, onClose }: MobileNavButtonProps) => {
  return (
    <button
      onClick={() => {
        onClose();
        document.getElementById(item.id)?.scrollIntoView();
      }}
      className="px-4 py-2 text-left text-sm font-medium hover:text-green-700 transition-colors"
      type="button"
    >
      {item.label}
    </button>
  );
};

export default MobileNavButton; 