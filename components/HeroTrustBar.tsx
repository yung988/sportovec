interface HeroTrustBarProps {
  isMobile?: boolean;
}

export const HeroTrustBar = ({ isMobile = false }: HeroTrustBarProps) => {
  if (isMobile) {
    return (
      <div className="absolute bottom-16 left-0 right-0 z-30 px-4 mx-auto w-full max-w-xs flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg py-2 justify-center">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
          <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white" />
          <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white" />
        </div>
        <span className="text-xs text-white font-bold drop-shadow-md">
          Jsme odhodláni poskytovat
          <br />
          špičkové služby pro sportovce
        </span>
      </div>
    );
  }

  return (
    <div className="absolute bottom-10 right-10 z-30 p-4 flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg">
      <div className="flex -space-x-2">
        <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" />
        <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white" />
        <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white" />
      </div>
      <span className="text-sm text-white font-bold drop-shadow-md">
        Jsme odhodláni poskytovat
        <br />
        špičkové služby pro sportovce
      </span>
    </div>
  );
};

export default HeroTrustBar; 