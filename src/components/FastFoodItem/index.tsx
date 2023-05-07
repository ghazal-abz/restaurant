import "./fastFoodItem.css";
import {items} from "./type";
import {useThemeContext} from "../../context/context";

const FastFoodItem = ({name, price, ingredients, imageUrl, delay}: items) => {
    const theme = useThemeContext();
    const darkMode = theme.darkMode;

    return (
        <div className={`card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz ${darkMode ? "bg-light text-dark" : "bg-dark text-light"}`}
        >
             <span className="badge badge-end badge-shadow bg-success fs-md fw-medium" style={{animationDelay: delay + "s"}}>
                قیمت: {price.toLocaleString()} تومان
             </span>
            <div className="card__placeholder rounded-3">
                <img className="card-img-top" src={imageUrl} alt={name} />
            </div>
            <div className={`card-body text-center pt-3 pb-4 d-flex flex-column  ${darkMode ? " bg-light text-dark" : "bg-dark text-light"}`}>
                <h5 className={`mb-2 ${darkMode ? "bg-light text-dark" : "bg-dark text-light"}`}>{name}</h5>
                <div className="fs-ms fw-bold text-muted mb-3">{ingredients}</div>
                <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    );
};

export default FastFoodItem;
