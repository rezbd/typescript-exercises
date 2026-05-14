type CartItem = {
    name: string,
    price: number,
    quantity?: number
};

function calculateTotal(cartItem: CartItem): number {
    const {price, quantity=1} = cartItem;
    return price * quantity;
}