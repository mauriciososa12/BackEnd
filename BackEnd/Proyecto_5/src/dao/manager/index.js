import { ProductManager } from "./productsManager.js";
import { CartManager } from "./cartManager.js";
import { UserManager } from "./cartManager.js";

const ProductsManager = new ProductManager();
const CartsManager = new CartManager();
const UsersManager = new CartManager();

export default {
  ProductsManager,
  CartsManager,
  UserManager,
  
};