import type { FunctionComponent } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search by name or description...",
}) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor="search" className="text-sm font-medium text-gray-700">
        Search Products
      </label>
      <input
        id="search"
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar; 