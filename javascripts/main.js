import cheese from './cheese.js';
import bread from './bread.js';
import order from './order.js';
import meat from './meat.js';

const init = () => {
    cheese.cheesePrinter();
    bread.breadPrinter();
    meat.meatPrinter();
    order.printOrderButton();
}

init();