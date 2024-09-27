import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import CategoryList from "./components/CategoryList";
import { useEffect, useState } from "react";

const uniqueCategories = [
  "All Categories",
  ...new Set(data.map((item) => item.category)),
];

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filterdData, setFilteredData] = useState(data);

  useEffect(() => {
    const newData = data.filter(
      (value) =>
        selectedIndex === 0 ||
        value.category === uniqueCategories[selectedIndex]
    );
    setFilteredData(newData);
  }, [selectedIndex]);

  return (
    <div>
      <Navbar />
      <CategoryList
        items={uniqueCategories}
        selectedIndex={selectedIndex}
        onChange={(index) => {
          setSelectedIndex(index);
        }}
      />
      <div className="container justify-content-between ">
        <div className="row">
          {filterdData.map((item, index) => {
            return (
              <div key={index} className="col-3">
                <Card
                  name={item.name}
                  category={item.category}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
