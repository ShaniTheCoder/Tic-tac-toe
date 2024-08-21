var slots = [
    document.getElementById("slot1"),
    document.getElementById("slot2"),
    document.getElementById("slot3"),
    document.getElementById("slot4"),
    document.getElementById("slot5"),
    document.getElementById("slot6"),
    document.getElementById("slot7"),
    document.getElementById("slot8"),
    document.getElementById("slot9")
];
var turn = "X";
var current_turn = document.getElementById("turn");
current_turn.innerHTML = turn;
function trigger(val) {
    if (slots[val].innerHTML == "") {
        slots[val].innerHTML = turn;
        check_board();
        turn = turn == "X" ? "O" : "X";
        current_turn.innerHTML = turn;
    }
    else {
        alert("Slot taken, choose another");
    }
}
// 0 1 2
// 3 4 5
// 6 7 8
function check_board() {
    var str = "".concat(turn, " is the winner");
    // Horizontal checks
    if (slots[0].innerHTML === turn && slots[1].innerHTML === turn && slots[2].innerHTML === turn) {
        alert(str);
    }
    else if (slots[3].innerHTML === turn && slots[4].innerHTML === turn && slots[5].innerHTML === turn) {
        alert(str);
    }
    else if (slots[6].innerHTML === turn && slots[7].innerHTML === turn && slots[8].innerHTML === turn) {
        alert(str);
    }
    // Vertical checks
    else if (slots[0].innerHTML === turn && slots[3].innerHTML === turn && slots[6].innerHTML === turn) {
        alert(str);
    }
    else if (slots[1].innerHTML === turn && slots[4].innerHTML === turn && slots[7].innerHTML === turn) {
        alert(str);
    }
    else if (slots[2].innerHTML === turn && slots[5].innerHTML === turn && slots[8].innerHTML === turn) {
        alert(str);
    }
    // Diagonal checks
    else if (slots[0].innerHTML === turn && slots[4].innerHTML === turn && slots[8].innerHTML === turn) {
        alert(str);
    }
    else if (slots[2].innerHTML === turn && slots[4].innerHTML === turn && slots[6].innerHTML === turn) {
        alert(str);
    }
}
function clear_board() {
    slots.forEach(function (element) {
        element.innerHTML = "";
    });
}
