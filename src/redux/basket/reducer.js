import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        products: [],
    },
    reducers: {
        addProductInBasket: (state, action) => {
            state.products.push(action.payload)
            // state.products.push({
            //     id: action.payload.id,
            //     count: 1,
            //     products: action.payload,
            // })
        },
        testAction: (state, action) => {
            // Хер пойму как обратиться к определенному элементу из сетйта, чтобы как-нибудь изменить его
            // console.log(state.products[0].id)

        }
    },
});

export const { addProductInBasket, testAction } = basketSlice.actions;
export default basketSlice.reducer;