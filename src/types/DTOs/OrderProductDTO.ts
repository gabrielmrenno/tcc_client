import { ProductsDTO } from "./ProductsDTO";

export interface OrderProductDTO {
    product: ProductsDTO;
    quantity: number;
    discount: number;
    totalPrice: number;
    totalWeight: number;
}