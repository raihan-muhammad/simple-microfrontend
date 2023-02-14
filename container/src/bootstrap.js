import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/cartIndex";

productMount(document.getElementById("my-products"));
cartMount(document.getElementById("my-cart"));
