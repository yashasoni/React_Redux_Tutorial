import { ActionTypes } from "../constants/action-types";
import axios from "../../apis/fakeStoreApi";
export const fetchProducts  = () => async (dispatch) =>{
    const response = await axios.get("/products")
    dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data})
}
export const fetchProduct  = (id) => async (dispatch) =>{
    const response = await axios.get(`/products/${id}`)
    dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: response.data})
}
export const setProducts  = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProducts  = (product) => {
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeSelectedProduct  = () => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}