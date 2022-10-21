import { ProductsDTO } from "./ProductsDTO";

export interface OrderProductDTO {
    produto: ProductsDTO;
    quantidade: number;
    discount: number;
}