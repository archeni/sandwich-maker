import utilities from "./components/utilities.js";
import bread from "./bread.js";
import cheese from './cheese.js';
import meat from './meat.js';
import condiment from './condiments.js';
import veggie from "./veggie.js";

const makeOrder = (items) => {
    let stringDom = '';
    for(let i = 0; i < items.length; i++) {
        stringDom += `<h3>${items[i].name} ${items[i].price}&#65504</h3>`
    }
    utilities.printToDom('final-order', stringDom);

    let cost = 0;
    let stringDom2 = ``;

    for(let i = 0; i < items.length; i++) {
        cost += items[i].price;
    }

    stringDom2 += `<h4>Your price is $${(cost / 100).toFixed(2)}</h4>`
    utilities.printToDom('final-cost', stringDom2);
}

const createOrderEvent = () => {
    let emptyArr = [];
    const selectedBread = bread.getSelectedBread();
    const selectedContiment = condiment.getSelectedCondiments();
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeat = meat.getSelectedMeat();
    const selectedVeggies = veggie.getSelectedVeggies();
    emptyArr = selectedBread.concat(selectedCheeses, selectedMeat, selectedContiment, selectedVeggies);
    makeOrder(emptyArr); 
}

const printOrderButton = () => {
    const stringDom = '<button id="order-button" class="btn btn-secondary">Review</button>';
    utilities.printToDom('final-order', stringDom);
    document.getElementById("order-button").addEventListener("click", createOrderEvent)
}

export default { printOrderButton };