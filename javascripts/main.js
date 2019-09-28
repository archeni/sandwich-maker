import cheese from './cheese.js';
import bread from './bread.js';
import order from './order.js';
import meat from './meat.js';
import condiment from './condiments.js';
import veggie from './veggie.js';

const init = () => {
    cheese.cheesePrinter();
    bread.breadPrinter();
    meat.meatPrinter();
    condiment.condimentPrinter();
    veggie.veggiePrinter();

    order.printOrderButton();
}

init();