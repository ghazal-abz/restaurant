import "./fastFoodItem.css";
import {items} from "./type";

const FastFoodItem = ({name, price, ingredients, imageUrl}: items) => {
    return (
        <div
            className="card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz"
        >
             <span className="badge badge-end badge-shadow bg-success fs-md fw-medium">
                قیمت: {price.toLocaleString()} تومان
             </span>
            <div className="card__placeholder">
                <img className="card-img-top" src={imageUrl} alt={name} />
            </div>
            <div className="px-2 py-2">
                <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
                    <h5 className="mb-2">{name}</h5>
                </div>
                <div className="fs-m fw-bold text-muted mb-3">
                    <b className="bg-faded-dark rounded-3 px-1">محتوا : </b>
                    <div>{ingredients}</div>
                </div>
                <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    );
};

export default FastFoodItem;
