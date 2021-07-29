import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartShowMount } from "cart/CartShow";

console.log("Container!");

productsMount(document.querySelector("#my-products"));
cartShowMount(document.querySelector("#my-cart"));
