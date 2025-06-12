import type { FunctionComponent } from 'react';

interface Category {
  readonly value: string;
  readonly label: string;
}

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
  categories: readonly Category[];
}

const CategorySelect: FunctionComponent<CategorySelectProps> = ({
  value,
  onChange,
  categories,
}) => {
  return (
    <div className="flex flex-col gap-2 min-w-[200px]">
      <label htmlFor="category" className="text-sm font-medium text-gray-700">
        Category
      </label>
      <select
        id="category"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors bg-white"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {categories.map(category => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect; 