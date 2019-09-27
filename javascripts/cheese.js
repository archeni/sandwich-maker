import utilities from './components/utilities.js';

const cheeses = [
    {id: "cheese1", name: "swiss", price: 50},
    {id: "cheese2", name: "mozzarella", price: 60},
    {id: "cheese3", name: "cheddar", price: 40},
    {id: "cheese4", name: "provolone", price: 70},
]

const getSelectedCheeses = () => {
    const selectedCheeses = [];
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    for(let o = 0; o < cheeseCheckboxes.length; o++) {
        for(let p = 0; p < cheeses.length; p++) {
            if(cheeseCheckboxes[o].checked && cheeseCheckboxes[o].id === cheeses[p].id){
                selectedCheeses.push(cheeses[p]);
            }
        }
    }
    
    return selectedCheeses;
}

let cheesePrinter = () => {
    let stringDom = `<h3>Cheese</h3>`
    for(let i = 0; i < cheeses.length; i++){
    stringDom += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input cheese" id=${cheeses[i].id}>
        <label class="form-check-label" for=${cheeses[i].id}>${cheeses[i].name}</label>
    </div>`;}
    utilities.printToDom("cheese-counter", stringDom);
}

export default { cheesePrinter, getSelectedCheeses };