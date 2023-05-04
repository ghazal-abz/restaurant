import axios from "../../plugins/axios"
import "../../App.css";
import CategoryList from "../CategoryList/index";
import {useEffect, useState} from "react";
import Loading from "../Loading/loading";
import FastFoodList from "../FastFoodList/index";
import SearchBar from "../SearchBar/index";
import notFound from "../../assets/images/not-found.png";

interface FastFoodItems {
    id: number;
    imageUrl: string;
    ingredients: string;
    name: string;
    price: number;
}

function HomePage() {

    const [loading, setLoading] = useState(true);
    const [fastFoodItems, setFastFoodItems] = useState<Array<FastFoodItems>>();

    const fetchFoods = async (categoryId: null | number = null) => {
        setLoading(true);
        const response = await axios.get(
            `FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
        );
        setLoading(false);
        setFastFoodItems(response.data);
    };

    useEffect(() => {
        fetchFoods();
    }, [])

    const searchItems = async(term: string) => {
        setLoading(true);
        const Response = await axios.get(`/FastFood/search/${term ? "?term=" + term : ""}`);

        setLoading(false);
        setFastFoodItems(Response.data)
    }

    const filterItems = (categoryId: number) => {
        fetchFoods(categoryId);
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
