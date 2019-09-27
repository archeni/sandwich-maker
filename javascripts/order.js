import utilities from "./components/utilities.js";
import bread from "./bread.js";
import cheese from './cheese.js';
import meat from './meat.js';

const makeOrder = (items) => {
    let stringDom = '';
    for(let i = 0; i < items.length; i++) {
        stringDom += `<h2>${items[i].name}</h2>`
    }
    utilities.printToDom('final-order', stringDom);
}

const createOrderEvent = () => {
    let emptyArr = [];
    const selectedBread = bread.getSelectedBread();
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeat = meat.getSelectedMeat();
    emptyArr = selectedBread.concat(selectedCheeses, selectedMeat);
    makeOrder(emptyArr);
}

const printOrderButton = () => {
    const stringDom = '<button id="order-button" class="btn btn-secondary">Make Sandwich</button>';
    utilities.printToDom('final-order', stringDom);
    document.getElementById("order-button").addEventListener("click", createOrderEvent)
}

export default { printOrderButton };