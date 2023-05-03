export interface FastFoodItemProps {
    name: string;
    price: number;
    ingredients: string;
    imageUrl: string;
    id: number;
}
export interface items {
    item?: Array<FastFoodItemProps>;
}
