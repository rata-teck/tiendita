import {Producto} from './producto';
export interface Carrito {
  id : number,
  products : Producto[],
  total : number,
  discountedtotal : number,
  userid : number,
  totalproducts : number,
  totalquality : number
}
