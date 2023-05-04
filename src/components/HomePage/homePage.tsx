import "../../App.css";
import CategoryList from "../CategoryList/index";
import {useState} from "react";
import Loading from "../Loading/loading";
import FastFoodList from "../FastFoodList/index";
import SearchBar from "../SearchBar/index";
import notFound from "../../assets/images/not-found.png";
import useAxios from "../../useAxios";

interface FastFoodItems {
    id: number;
    imageUrl: string;
    ingredients: string;
    name: string;
    price: number;
}

function HomePage() {
    const [url, setUrl] = useState('/FastFood/list/');
    const [fastFoodItems, , loading] = useAxios({
        url: url
    })
    // const [fastFoodItems, setFastFoodItems] = useState<Array<FastFoodItems>>();

    const searchItems = async (term: string) => {
        setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
    }

    const filterItems = (categoryId: number) => {
        setUrl(`FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`)
    }


    const renderContent = () => {
        if (loading) {
            return <Loading theme="dark" />
        }
        if (!(fastFoodItems) || fastFoodItems.length === 0) {
            return (
                <>
                    <div className="alert alert-warning text-center">
                        برای کلیدواژه فوق هیچ آیتمی یافت نشد
                    </div>
                    <img className="mx-auto mt-5 d-block fade-in-horiz" src={notFound} alt="img" />
                </>
            );
        }

        return <FastFoodList fastFoodItems={fastFoodItems} />
    }

    return (
        <div className="wrapper bg-faded-dark">
            <CategoryList filterItems={filterItems}>
                <SearchBar searchItems={searchItems} />
            </CategoryList>
            <div className="container mt-4">

                {renderContent()}

            </div>
        </div>
    );
}

export default HomePage;
