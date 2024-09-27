interface Props {
  items: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
}
const CategoryList = ({ items, selectedIndex, onChange }: Props) => {
  return (
    <div className="container">
      <select
        className="form-select my-3"
        value={selectedIndex}
        onChange={(e) => {
          onChange(parseInt(e.target.value)); // callback
        }}
      >
        {items.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CategoryList;
