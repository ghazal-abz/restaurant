import "./fastFoodItem.css";

const FastFoodItem = ({name}) => {

  return (
    <div
      dir="rtl"
      className="card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz"
    >
      {name}
    </div>
  );
};

export default FastFoodItem;
