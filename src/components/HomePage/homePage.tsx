import "../../App.css";
import CategoryList from "../CategoryList/categoryList";

function HomePage() {

    return (
        <div className="wrapper bg-faded-dark">
            <CategoryList></CategoryList>
        </div>
    );
}

export default HomePage;
