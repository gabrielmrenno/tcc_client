import { ProductsModel } from "./ProductsModel";

export interface OrderProductModel {
    id: string | number[];
    product: ProductsModel;
    quantity: number;
    discount: number;
    totalPrice: number;
    totalWeight: number;
}