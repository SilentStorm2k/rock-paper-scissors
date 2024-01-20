function getComputerChoice () {
    let choice = Math.floor(Math.random()*3) + 1;
    let ret;
    switch (choice) {
        case 1:
            ret = "Rock"
            break;
        case 2:
            ret = "Paper"
            break;
        case 3:
            ret = "Scissors"
            break;
    }
    return ret;
}