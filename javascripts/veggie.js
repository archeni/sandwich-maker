import utilities from './components/utilities.js';

const veggie = [
    {id: "veggie1", name: "tofu", price: 50},
    {id: "veggie2", name: "mayonnaise", price: 80},
    {id: "veggie3", name: "horseradish", price: 75},
    {id: "veggie4", name: "lettuce", price: 35},
]

const getSelectedVeggies = () => {
    const selectedVeggie = [];
    const veggieCheckboxes = document.getElementsByClassName('veggie');
    for(let o = 0; o < veggieCheckboxes.length; o++) {
        for(let p = 0; p < veggie.length; p++) {
            if(veggieCheckboxes[o].checked && veggieCheckboxes[o].id === veggie[p].id){
                selectedVeggie.push(veggie[p]);
            }
        }
    }
    
    return selectedVeggie;
}

let veggiePrinter = () => {
    let stringDom = `<h3>Veggies</h3>`
    for(let i = 0; i < veggie.length; i++){
    stringDom += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input veggie" id=${veggie[i].id}>
        <label class="form-check-label" for=${veggie[i].id}>${veggie[i].name}</label>
    </div>`;}
    utilities.printToDom("veggie-counter", stringDom);
}

export default { veggiePrinter, getSelectedVeggies };