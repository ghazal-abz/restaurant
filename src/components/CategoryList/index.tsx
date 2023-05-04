import {useEffect, useState} from "react";
import axios from "../../plugins/axios";
import Loading from "../Loading/loading";
import useAxios from "../../"

interface CategoryItems {
    id: number;
    name: string;
}

const CategoryList = ({filterItems, children}) => {
    useAxios({

    })

    const [loading, setLoading] = useState(true);

    const [categories, setCategories] = useState<Array<CategoryItems>>();

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get('/FoodCategory/categories')
            setCategories(response.data);
            setLoading(false);
        }
        fetchCategories();
    }, []);

    const renderContent = () => {
        if (loading) {
            return <Loading theme="primary" />
        }
        return (
            <div className="ps-3 d-flex align-items-center justify-content-between gap-5">
                <ul className="nav">
                    <li className="nav-item" onClick={() => filterItems()}>
                        <a className="nav-link" href="#">
                            همه فست فود ها
                        </a>
                    </li>
                    {categories?.map((category) => (
                        <li className="nav-item" key={category.id} onClick={() => filterItems(category.id)}>
                            <a className="nav-link" href="#">
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
                {children}
            </div>
        )
    }

    return (
        <>
            <nav className="container mt-n5">
                <div className="d-flex align-item-center bg-white rounded-3 shadow-lg py-4" style={{height: '80px'}}>
                    {renderContent()}
                </div>
            </nav>
        </>
    )
}

export default CategoryList;
