import cheese from './cheese.js';
import bread from './bread.js';
import order from './order.js';
import meat from './meat.js';
import condiment from './condiments.js';

const init = () => {
    cheese.cheesePrinter();
    bread.breadPrinter();
    meat.meatPrinter();
    condiment.condimentPrinter();
    order.printOrderButton();
}

init();