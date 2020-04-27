const CHANGE_INPUT = 'products/CHANGE_INPUT';
const INSERT = 'products/INSERT';
const TOGGLE = 'products/TOGGLE';
const CLICK = 'products/CLICK';

export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
});

let id = 3; // 호출마다 1씩 더함

export const insert = text => ({
    type: INSERT,
    product: {
        id: id++,
        text,
        done: false
    }
});

export const toggle = id => ({
    type: TOGGLE,
    id
});

export const remove = id => ({
    type: CLICK,
    id
});


const initialState = {
    input: '',
    products: [
        {
            id: 1,
            text: "텍스트",
            done: true
        },
        {
            id: 2,
            text: "텍스트2",
            done: false
        },

    ]
};

function products(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                products: state.products.concat(action.product)
            };
        case TOGGLE:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id ? { ...product, done: !product.done } : product)
            };
        case CLICK:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.id)
            };
        default: return state;
    }
}

export default products;