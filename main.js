function myFunction(clickedID){
    document.board.screen.value += clickedID;
}

function  clearScreen() {
    document.board.screen.value = " ";
}

function calculation() {
    try {
        var eqn = eval(document.board.screen.value);
        document.board.screen.value = eqn;
    } catch(err) {
        document.board.screen.value = "error!!";
    }

}