import utilities from './components/utilities.js';

const condiments = [
    {id: "condiments1", name: "bacon", price: .50},
    {id: "condiments2", name: "A1 sauce", price: 0},
    {id: "condiments3", name: "barbeque sauce", price: .75},
    {id: "condiments4", name: "ketchup", price: .35},
]

const getSelectedCondiments = () => {
    const selectedCondiment = [];
    const condimentCheckboxes = document.getElementsByClassName('condiment');
    for(let o = 0; o < condimentCheckboxes.length; o++) {
        for(let p = 0; p < condiments.length; p++) {
            if(condimentCheckboxes[o].checked && condimentCheckboxes[o].id === condiments[p].id){
                selectedCondiment.push(condiments[p]);
            }
        }
    }
    
    return selectedCondiment;
}

let condimentPrinter = () => {
    let stringDom = `<h3>Condiments</h3>`
    for(let i = 0; i < condiments.length; i++){
    stringDom += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input condiment" id=${condiments[i].id}>
        <label class="form-check-label" for=${condiments[i].id}>${condiments[i].name}</label>
    </div>`;}
    utilities.printToDom("condiment-counter", stringDom);
}

export default { condimentPrinter, getSelectedCondiments };