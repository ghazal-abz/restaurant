export interface FastFoodItemProps {
    name: string;
    price: number;
    ingredients: string;
    imageUrl: string;
    id: number;
    delay: number;
}
export interface items {
    item?: Array<FastFoodItemProps>;
}
