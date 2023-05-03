import "../../App.css";
import CategoryList from "../CategoryList/categoryList";
import {useEffect, useState} from "react";
import axios from "../../plugins/axios"
import Loading from "../Loading/loading";
import FastFoodList from "../FastFoodList/index";

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
        console.log(response.data)
        setFastFoodItems(response.data);
    };

    useEffect(() => {
        fetchFoods();
    }, [])

    const renderContent = () => {
        if (loading) {
            return <Loading theme="dark" />
        }

        return <FastFoodList fastFoodItmes={fastFoodItems} />
    }

    return (
        <div className="wrapper bg-faded-dark">
            <CategoryList></CategoryList>
            <div className="container mt-4">

                {renderContent()}

            </div>
        </div>
    );
}

export default HomePage;
