import { ProductsModel } from "./ProductsModel";

export interface OrderProductModel {
    product: ProductsModel;
    quantity: number;
    discount: number;
    totalPrice: number;
    totalWeight: number;
}