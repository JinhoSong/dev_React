import axios from "axios";
const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

class ApiService {
  fetchProduct() {
    return axios.get(PRODUCT_API_BASE_URL);
  }
  fetchProductByID(id) {
    return axios.get(PRODUCT_API_BASE_URL + "/" + id);
  }
  deleteProduct(id) {
    return axios.delete(PRODUCT_API_BASE_URL + "/" + id);
  }
  addProduct(product) {
    return axios.post(PRODUCT_API_BASE_URL, product);
  }
  editProduct(product) {
    return axios.put(PRODUCT_API_BASE_URL + "/" + product.id, product);
  }
}

export default new ApiService();
