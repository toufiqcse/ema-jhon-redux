import { createSlice } from "@reduxjs/toolkit";

// set status
const STATUES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: "error"
});
//create slice
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUES.IDLE
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload
        },

        setStatus (state, action){
            state.status = action.payload
        }

    }
})

export const { setProducts, setStatus} = productSlice.actions

export default productSlice.reducer


// basic redux thunk
export function fetchProducts () {
    return async function fetchProductsThunk (dispatch, getState) {
        // set a status
        dispatch(setStatus(STATUES.LOADING))

        try{
            const res = await fetch('products.json')
            const data = await res.json()
            dispatch(setProducts(data))
            dispatch(setStatus(STATUES.IDLE))
        }catch(error){
            console.log(error);
            dispatch(setStatus(STATUES.ERROR))
        }
    }
}