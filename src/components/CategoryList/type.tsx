import {ReactNode} from "react";

export interface CategoryListProps {
    filterItems: (id?: number) => void;
    children: ReactNode;
}
