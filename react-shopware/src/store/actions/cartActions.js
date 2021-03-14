import actiontypes from '../actiontypes'


export const addToCart = (product) => {
    return {
        type: actiontypes().cart.add,
        product: product
    }
}

export const deleteProductFromCart = (id) => {
    return {
        type: actiontypes().cart.deleteProductFromCart,
        id: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: actiontypes().cart.remove,
        id: id
    }
}

export const clearCart = (products) => {
    return {
        type: actiontypes().cart.clear,
        products: products
        
    }
}

