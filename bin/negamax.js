// Mouvements possibles pour player
possibleMoves = getPossibleMoves(board, player);

// Initialisation à la profondeur 0
if(depth === 0){
    var bestMoves = [];
}

// Si feuilles finales, fonction d'évaluation
if(depth > 0 || possibleMoves.length === 0) {


    // Renvoyer une valeur positive pour l'IA si c'est bon
    // Renvoyer une valeur négative pour l'Humain
    var evaluation = 0;

    var scores = getScores(board);

    // Si Human a perdu, on retourne une valeur positive à IA (donc négative à Human)
    if(scores[1] === 0){
        return player * 1000;
    }

    // Si IA a perdu, la valeur renvoyée doit être super négative
    if(scores[0] === 0){
        return player * -1000;
    }

    // Si score IA > score Human, on renvoie une valeur positive
    if(scores[0] > scores[1]){
        evaluation += (player * ((scores[0] - scores[1]) + 50));
    }

    // Sinon si score Human > score IA, danger ! On renvoie une valeur négative
    else if(scores[1] > scores[0]){
        evaluation += (player * ((scores[0] - scores[1]) + 50));
    }

    // Si égalité, on considère que ce n'est pas tiptop (à voir)
    else {
        evaluation += 1;
    }

    return evaluation;
}

// Sinon
var max = -150;
possibleMoves.forEach(function(move){

    //
    if(depth === 0){
        opponentLastMoveId = HumanLastMove;
    }
    else {
        opponentLastMoveId = lastMoveId;
    }

    var copiedBoard = getCopyBoard(board);
    copiedBoard = setMove(copiedBoard, player, move);
    var x = -(negaMax(copiedBoard, depth+1, player * -1, -alpha, -beta, opponentLastMoveId, move[1]));

    if(x > max) {
        max = x;

        if(depth === 0){
            bestMoves = [move];
        }
    }
    if(x === max) {
        if(depth === 0){
            bestMoves.push(move);
        }
    }


    if(x > alpha) alpha = x;
    if(alpha >= beta) return alpha;
});

if(depth === 0){
    return bestMoves[Math.floor(Math.random() * bestMoves.length)];
}
else return max;