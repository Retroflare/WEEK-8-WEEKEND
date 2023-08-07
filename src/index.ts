import User from './src/User';
import Item from './src/Item';
import Shop from './src/Shop';

const shop = new Shop();

const item1 = new Item('Item 1', 'Description of Item 1', 10, 'uuid1');
const item2 = new Item('Item 2', 'Description of Item 2', 15, 'uuid2');
shop.addItem(item1);
shop.addItem(item2);


const shopArea = document.getElementById('shop-area');

shop.getItems().forEach((item) => {
    const itemElement = item.itemElement();
    shopArea?.appendChild(itemElement);
});

const loginForm = document.getElementById('login-form');

loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    User.loginUser(e);
});

shop.updateCart();
