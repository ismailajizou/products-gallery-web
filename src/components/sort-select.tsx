import type { FunctionComponent } from 'react';
import type { Sort } from '@/types/products';

interface SortOption {
  readonly value: Sort;
  readonly label: string;
}

interface SortSelectProps {
  value: Sort;
  onChange: (value: Sort) => void;
  sortOptions: readonly SortOption[];
}

const SortSelect: FunctionComponent<SortSelectProps> = ({
  value,
  onChange,
  sortOptions,
}) => {
  return (
    <div className="flex min-w-[200px] flex-col gap-2">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700">
        Sort By
      </label>
      <select
        id="sort"
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        value={value}
        onChange={e => onChange(e.target.value as Sort)}
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;
