import utilities from './components/utilities.js';

const meat = [
    {id: "meat1", name: "ham", price: 6},
    {id: "meat2", name: "turkey", price: 10},
    {id: "meat3", name: "Mortadella", price: 2},
    {id: "meat4", name: "steak", price: 1},
]

const getSelectedMeat = () => {
    const selectedMeat = [];
    const meatCheckboxes = document.getElementsByClassName('meat');
    for(let o = 0; o < meatCheckboxes.length; o++) {
        for(let p = 0; p < meat.length; p++) {
            if(meatCheckboxes[o].checked && meatCheckboxes[o].id === meat[p].id){
                selectedMeat.push(meat[p]);
            }
        }
    }
    
    return selectedMeat;
}

let meatPrinter = () => {
    let stringDom = `<h3>Meat</h3>`
    for(let i = 0; i < meat.length; i++){
    stringDom += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input meat" id=${meat[i].id}>
        <label class="form-check-label" for=${meat[i].id}>${meat[i].name}</label>
    </div>`;}
    utilities.printToDom("meat-counter", stringDom);
}

export default { meatPrinter, getSelectedMeat };