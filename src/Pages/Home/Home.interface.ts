export interface menuType {
    id: number;
    name: string;
    type: string;
    cuisine: string;
    availability: Array<string>;
    price: number;
    description: string;
    bestseller: boolean;
    new: boolean;
    image: string;
}