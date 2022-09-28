export const initialState = {
    basket: [],
    user: null
    
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)


function reducer(state, action) {
    switch(action.type){
        case 'ADD_TO_BASKET':

            
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BUSKET':
            //LOGIC
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //Item exists
                newBasket.splice(index, 1);


            }else{
                console.warn(`can not remove product (id : ${action.id})`)
            }
            return {...state, basket: newBasket}
            break;
        default:
            return state;
    }
}

export default reducer;