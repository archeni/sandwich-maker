import utilities from './components/utilities.js';

const typesOfBread = [
    {id: "bread1", name: "white", price: 550},
    {id: "bread2", name: "wheat", price: 600},
    {id: "bread3", name: "italian herbs & cheese", price: 940},
    {id: "bread4", name: "croissant", price: 100},
]

const getSelectedBread = () => {
    const selectedBread = [];
    const breadCheckboxes = document.getElementsByClassName('bread');
    for(let o = 0; o < breadCheckboxes.length; o++) {
        for(let p = 0; p < typesOfBread.length; p++) {
            if(breadCheckboxes[o].checked && breadCheckboxes[o].id === typesOfBread[p].id){
                selectedBread.push(typesOfBread[p]);
            }
        }
    }
    
    return selectedBread;
}

let breadPrinter = () => {
    let stringDom = `<h3>Bread</h3>`
    for(let i = 0; i < typesOfBread.length; i++){
    stringDom += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input bread" id=${typesOfBread[i].id}>
        <label class="form-check-label" for=${typesOfBread[i].id}>${typesOfBread[i].name}</label>
    </div>`;}
    utilities.printToDom("bread-counter", stringDom);
}

export default { breadPrinter, getSelectedBread };