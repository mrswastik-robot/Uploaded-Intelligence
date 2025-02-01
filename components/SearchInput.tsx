import React from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    onSearch(input.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto mb-12">
      <div className="relative">
        <input
          type="text"
          name="search"
          placeholder="Ask anything about your saved memories..."
          className="search-input"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;