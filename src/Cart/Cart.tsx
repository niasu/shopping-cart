import CartItem from '../CartItem/CartItem';
// styles
import { Wrapper } from './Cart.styles';
// types
import { CartItemType } from '../App';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) =>  void;
    removeFromCart: (id: number) => void;

};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {
    const calculateTotal = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount * item.price, 0); // total amount 

    return (
        <Wrapper>
            <h2>Your cart so far:</h2>
            {cartItems.length === 0 ? <p>No items in cart so far.</p> : null}
            {cartItems.map(item => (
                <CartItem 
                    key = {item.id}
                    item = {item}
                    addToCart = {addToCart}
                    removeFromCart = {removeFromCart}
                />
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    );
};

export default Cart;