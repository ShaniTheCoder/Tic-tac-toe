
let slots = [
    document.getElementById("slot1") as HTMLDivElement,
    document.getElementById("slot2") as HTMLDivElement,
    document.getElementById("slot3") as HTMLDivElement,
    document.getElementById("slot4") as HTMLDivElement,
    document.getElementById("slot5") as HTMLDivElement,
    document.getElementById("slot6") as HTMLDivElement,
    document.getElementById("slot7") as HTMLDivElement,
    document.getElementById("slot8") as HTMLDivElement,
    document.getElementById("slot9") as HTMLDivElement
];
var turn = "X";
let current_turn = document.getElementById("turn") as HTMLParagraphElement;
current_turn.innerHTML = turn;

function trigger(val:number) {
    if(slots[val].innerHTML == ""){
        slots[val].innerHTML = turn;
        
        check_board();
        turn = turn == "X"?"O":"X";
        current_turn.innerHTML = turn;
    } else {
        alert(`Slot taken, choose another`);
    }
}
function check_board(): void {
    let str = `${turn} is the winner`;

    // Horizontal checks
    if (slots[0].innerHTML === turn && slots[1].innerHTML === turn && slots[2].innerHTML === turn) {
        alert(str);
    } else if (slots[3].innerHTML === turn && slots[4].innerHTML === turn && slots[5].innerHTML === turn) {
        alert(str);
    } else if (slots[6].innerHTML === turn && slots[7].innerHTML === turn && slots[8].innerHTML === turn) {
        alert(str);
    }

    // Vertical checks
    else if (slots[0].innerHTML === turn && slots[3].innerHTML === turn && slots[6].innerHTML === turn) {
        alert(str);
    } else if (slots[1].innerHTML === turn && slots[4].innerHTML === turn && slots[7].innerHTML === turn) {
        alert(str);
    } else if (slots[2].innerHTML === turn && slots[5].innerHTML === turn && slots[8].innerHTML === turn) {
        alert(str);
    }

    // Diagonal checks
    else if (slots[0].innerHTML === turn && slots[4].innerHTML === turn && slots[8].innerHTML === turn) {
        alert(str);
    } else if (slots[2].innerHTML === turn && slots[4].innerHTML === turn && slots[6].innerHTML === turn) {
        alert(str);
    }
}
function clear_board():void {
    slots.forEach(element => {
        element.innerHTML = "";
    });
}
