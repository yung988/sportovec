import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        type="search"
        placeholder="Hledat..."
        className="w-[200px] pl-9 rounded-full bg-gray-100 border-none"
      />
    </div>
  );
};

export default SearchBar; 