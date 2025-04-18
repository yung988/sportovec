type MobileContactButtonProps = {
  onClose: () => void;
};

export const MobileContactButton = ({ onClose }: MobileContactButtonProps) => {
  return (
    <button
      onClick={() => {
        onClose();
        document.getElementById("contact")?.scrollIntoView();
      }}
      className="mx-4 mt-4 py-2 text-center rounded-full bg-black hover:bg-gray-800 text-white text-sm font-medium"
      type="button"
    >
      Kontaktujte nás
    </button>
  );
};

export default MobileContactButton; 