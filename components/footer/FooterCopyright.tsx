export const FooterCopyright = () => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} Sportovec 2.0. Všechna práva
        vyhrazena.
      </p>
    </div>
  );
};

export default FooterCopyright; 