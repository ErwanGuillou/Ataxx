
    // Board (1 = IA ; -1 = Human ; 0 = Empty ; 5 = Hole)

    var board = [

        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, 5, 0, 0, 0, 0, 0, 0, 0, null, null,
        null, null, 0, 0, 0, 0, 0, 0, 0, 0, null, null,
        null, null, 0, 0, 0, 0, 0, 0, 0, 0, null, null,
        null, null, 0, 0, 0, 5, 5, 1, 1, 0, null, null,
        null, null, 0, 0, 0, 5, 5, 0, 0, 0, null, null,
        null, null, 0, 0, 0, 0, 0, 0, 0, 0, null, null,
        null, null, 0, 0, 0, 0, 0, 0, 0, -1, null, null,
        null, null, 0, 0, 0, 0, 0, 0, 0, 5, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null

    ];

    // List of entities
    var Ai      =   1;
    var Human   =   -1;
    var Empty   =   0;
    var Hole    =   5;
    var Out     =   null;

    // Entities as Object
    var AiObj       =   $('<div class="pion ai"></div>').data({ Entity:Ai, Parent:null });
    var HumanObj    =   $('<div class="pion human"></div>').data({ Entity:Human, Parent:null });
    var EmptyObj    =   $('<div></div>').data({ Id:0, Entity:Empty, Child:null });
    var HoleObj     =   $('<div class="hole"></div>').data({ Id:0, Entity:Hole });

    // HTML
    var ClonePlaceholder    =   '<div class="cplaceholder"></div>';
    var JumpPlaceholder     =   '<div class="jplaceholder"></div>';
    var PlaceHolder         =   '<div class="placeholder"></div>';

    // Misc
    var HumanLastMove   =   null;

    // Functions

    function getPossibleMoves(board, player){
        var possibleMoves = [];
        var i = 0;
        if (board[22] === player) {
            if (board[24] === 0) {
                possibleMoves[i++] = [22, 24, 1];
            }
            if (board[46] === 0) {
                possibleMoves[i++] = [22, 46, 1];
            }
            if (board[23] === 0) {
                possibleMoves[i++] = [22, 23, 0];
            }
            if (board[34] === 0) {
                possibleMoves[i++] = [22, 34, 0];
            }
            if (board[35] === 0) {
                possibleMoves[i++] = [22, 35, 0];
            }
        }
        if (board[23] === player) {
            if (board[25] === 0) {
                possibleMoves[i++] = [23, 25, 1];
            }
            if (board[47] === 0) {
                possibleMoves[i++] = [23, 47, 1];
            }
            if (board[22] === 0) {
                possibleMoves[i++] = [23, 22, 0];
            }
            if (board[24] === 0) {
                possibleMoves[i++] = [23, 24, 0];
            }
            if (board[34] === 0) {
                possibleMoves[i++] = [23, 34, 0];
            }
            if (board[35] === 0) {
                possibleMoves[i++] = [23, 35, 0];
            }
            if (board[36] === 0) {
                possibleMoves[i++] = [23, 36, 0];
            }
        }
        if (board[24] === player) {
            if (board[22] === 0) {
                possibleMoves[i++] = [24, 22, 1];
            }
            if (board[26] === 0) {
                possibleMoves[i++] = [24, 26, 1];
            }
            if (board[48] === 0) {
                possibleMoves[i++] = [24, 48, 1];
            }
            if (board[23] === 0) {
                possibleMoves[i++] = [24, 23, 0];
            }
            if (board[25] === 0) {
                possibleMoves[i++] = [24, 25, 0];
            }
            if (board[35] === 0) {
                possibleMoves[i++] = [24, 35, 0];
            }
            if (board[36] === 0) {
                possibleMoves[i++] = [24, 36, 0];
            }
            if (board[37] === 0) {
                possibleMoves[i++] = [24, 37, 0];
            }
        }
        if (board[25] === player) {
            if (board[23] === 0) {
                possibleMoves[i++] = [25, 23, 1];
            }
            if (board[27] === 0) {
                possibleMoves[i++] = [25, 27, 1];
            }
            if (board[49] === 0) {
                possibleMoves[i++] = [25, 49, 1];
            }
            if (board[24] === 0) {
                possibleMoves[i++] = [25, 24, 0];
            }
            if (board[26] === 0) {
                possibleMoves[i++] = [25, 26, 0];
            }
            if (board[36] === 0) {
                possibleMoves[i++] = [25, 36, 0];
            }
            if (board[37] === 0) {
                possibleMoves[i++] = [25, 37, 0];
            }
            if (board[38] === 0) {
                possibleMoves[i++] = [25, 38, 0];
            }
        }
        if (board[26] === player) {
            if (board[24] === 0) {
                possibleMoves[i++] = [26, 24, 1];
            }
            if (board[28] === 0) {
                possibleMoves[i++] = [26, 28, 1];
            }
            if (board[50] === 0) {
                possibleMoves[i++] = [26, 50, 1];
            }
            if (board[25] === 0) {
                possibleMoves[i++] = [26, 25, 0];
            }
            if (board[27] === 0) {
                possibleMoves[i++] = [26, 27, 0];
            }
            if (board[37] === 0) {
                possibleMoves[i++] = [26, 37, 0];
            }
            if (board[38] === 0) {
                possibleMoves[i++] = [26, 38, 0];
            }
            if (board[39] === 0) {
                possibleMoves[i++] = [26, 39, 0];
            }
        }
        if (board[27] === player) {
            if (board[25] === 0) {
                possibleMoves[i++] = [27, 25, 1];
            }
            if (board[29] === 0) {
                possibleMoves[i++] = [27, 29, 1];
            }
            if (board[51] === 0) {
                possibleMoves[i++] = [27, 51, 1];
            }
            if (board[26] === 0) {
                possibleMoves[i++] = [27, 26, 0];
            }
            if (board[28] === 0) {
                possibleMoves[i++] = [27, 28, 0];
            }
            if (board[38] === 0) {
                possibleMoves[i++] = [27, 38, 0];
            }
            if (board[39] === 0) {
                possibleMoves[i++] = [27, 39, 0];
            }
            if (board[40] === 0) {
                possibleMoves[i++] = [27, 40, 0];
            }
        }
        if (board[28] === player) {
            if (board[26] === 0) {
                possibleMoves[i++] = [28, 26, 1];
            }
            if (board[52] === 0) {
                possibleMoves[i++] = [28, 52, 1];
            }
            if (board[27] === 0) {
                possibleMoves[i++] = [28, 27, 0];
            }
            if (board[29] === 0) {
                possibleMoves[i++] = [28, 29, 0];
            }
            if (board[39] === 0) {
                possibleMoves[i++] = [28, 39, 0];
            }
            if (board[40] === 0) {
                possibleMoves[i++] = [28, 40, 0];
            }
            if (board[41] === 0) {
                possibleMoves[i++] = [28, 41, 0];
            }
        }
        if (board[29] === player) {
            if (board[27] === 0) {
                possibleMoves[i++] = [29, 27, 1];
            }
            if (board[53] === 0) {
                possibleMoves[i++] = [29, 53, 1];
            }
            if (board[28] === 0) {
                possibleMoves[i++] = [29, 28, 0];
            }
            if (board[40] === 0) {
                possibleMoves[i++] = [29, 40, 0];
            }
            if (board[41] === 0) {
                possibleMoves[i++] = [29, 41, 0];
            }
        }
        if (board[34] === player) {
            if (board[36] === 0) {
                possibleMoves[i++] = [34, 36, 1];
            }
            if (board[58] === 0) {
                possibleMoves[i++] = [34, 58, 1];
            }
            if (board[22] === 0) {
                possibleMoves[i++] = [34, 22, 0];
            }
            if (board[23] === 0) {
                possibleMoves[i++] = [34, 23, 0];
            }
            if (board[35] === 0) {
                possibleMoves[i++] = [34, 35, 0];
            }
            if (board[46] === 0) {
                possibleMoves[i++] = [34, 46, 0];
            }
            if (board[47] === 0) {
                possibleMoves[i++] = [34, 47, 0];
            }
        }
        if (board[35] === player) {
            if (board[37] === 0) {
                possibleMoves[i++] = [35, 37, 1];
            }
            if (board[59] === 0) {
                possibleMoves[i++] = [35, 59, 1];
            }
            if (board[22] === 0) {
                possibleMoves[i++] = [35, 22, 0];
            }
            if (board[23] === 0) {
                possibleMoves[i++] = [35, 23, 0];
            }
            if (board[24] === 0) {
                possibleMoves[i++] = [35, 24, 0];
            }
            if (board[34] === 0) {
                possibleMoves[i++] = [35, 34, 0];
            }
            if (board[36] === 0) {
                possibleMoves[i++] = [35, 36, 0];
            }
            if (board[46] === 0) {
                possibleMoves[i++] = [35, 46, 0];
            }
            if (board[47] === 0) {
                possibleMoves[i++] = [35, 47, 0];
            }
            if (board[48] === 0) {
                possibleMoves[i++] = [35, 48, 0];
            }
        }
        if (board[36] === player) {
            if (board[34] === 0) {
                possibleMoves[i++] = [36, 34, 1];
            }
            if (board[38] === 0) {
                possibleMoves[i++] = [36, 38, 1];
            }
            if (board[60] === 0) {
                possibleMoves[i++] = [36, 60, 1];
            }
            if (board[23] === 0) {
                possibleMoves[i++] = [36, 23, 0];
            }
            if (board[24] === 0) {
                possibleMoves[i++] = [36, 24, 0];
            }
            if (board[25] === 0) {
                possibleMoves[i++] = [36, 25, 0];
            }
            if (board[35] === 0) {
                possibleMoves[i++] = [36, 35, 0];
            }
            if (board[37] === 0) {
                possibleMoves[i++] = [36, 37, 0];
            }
            if (board[47] === 0) {
                possibleMoves[i++] = [36, 47, 0];
            }
            if (board[48] === 0) {
                possibleMoves[i++] = [36, 48, 0];
            }
            if (board[49] === 0) {
                possibleMoves[i++] = [36, 49, 0];
            }
        }
        if (board[37] === player) {
            if (board[35] === 0) {
                possibleMoves[i++] = [37, 35, 1];
            }
            if (board[39] === 0) {
                possibleMoves[i++] = [37, 39, 1];
            }
            if (board[61] === 0) {
                possibleMoves[i++] = [37, 61, 1];
            }
            if (board[24] === 0) {
                possibleMoves[i++] = [37, 24, 0];
            }
            if (board[25] === 0) {
                possibleMoves[i++] = [37, 25, 0];
            }
            if (board[26] === 0) {
                possibleMoves[i++] = [37, 26, 0];
            }
            if (board[36] === 0) {
                possibleMoves[i++] = [37, 36, 0];
            }
            if (board[38] === 0) {
                possibleMoves[i++] = [37, 38, 0];
            }
            if (board[48] === 0) {
                possibleMoves[i++] = [37, 48, 0];
            }
            if (board[49] === 0) {
                possibleMoves[i++] = [37, 49, 0];
            }
            if (board[50] === 0) {
                possibleMoves[i++] = [37, 50, 0];
            }
        }
        if (board[38] === player) {
            if (board[36] === 0) {
                possibleMoves[i++] = [38, 36, 1];
            }
            if (board[40] === 0) {
                possibleMoves[i++] = [38, 40, 1];
            }
            if (board[62] === 0) {
                possibleMoves[i++] = [38, 62, 1];
            }
            if (board[25] === 0) {
                possibleMoves[i++] = [38, 25, 0];
            }
            if (board[26] === 0) {
                possibleMoves[i++] = [38, 26, 0];
            }
            if (board[27] === 0) {
                possibleMoves[i++] = [38, 27, 0];
            }
            if (board[37] === 0) {
                possibleMoves[i++] = [38, 37, 0];
            }
            if (board[39] === 0) {
                possibleMoves[i++] = [38, 39, 0];
            }
            if (board[49] === 0) {
                possibleMoves[i++] = [38, 49, 0];
            }
            if (board[50] === 0) {
                possibleMoves[i++] = [38, 50, 0];
            }
            if (board[51] === 0) {
                possibleMoves[i++] = [38, 51, 0];
            }
        }
        if (board[39] === player) {
            if (board[37] === 0) {
                possibleMoves[i++] = [39, 37, 1];
            }
            if (board[41] === 0) {
                possibleMoves[i++] = [39, 41, 1];
            }
            if (board[63] === 0) {
                possibleMoves[i++] = [39, 63, 1];
            }
            if (board[26] === 0) {
                possibleMoves[i++] = [39, 26, 0];
            }
            if (board[27] === 0) {
                possibleMoves[i++] = [39, 27, 0];
            }
            if (board[28] === 0) {
                possibleMoves[i++] = [39, 28, 0];
            }
            if (board[38] === 0) {
                possibleMoves[i++] = [39, 38, 0];
            }
            if (board[40] === 0) {
                possibleMoves[i++] = [39, 40, 0];
            }
            if (board[50] === 0) {
                possibleMoves[i++] = [39, 50, 0];
            }
            if (board[51] === 0) {
                possibleMoves[i++] = [39, 51, 0];
            }
            if (board[52] === 0) {
                possibleMoves[i++] = [39, 52, 0];
            }
        }
        if (board[40] === player) {
            if (board[38] === 0) {
                possibleMoves[i++] = [40, 38, 1];
            }
            if (board[64] === 0) {
                possibleMoves[i++] = [40, 64, 1];
            }
            if (board[27] === 0) {
                possibleMoves[i++] = [40, 27, 0];
            }
            if (board[28] === 0) {
                possibleMoves[i++] = [40, 28, 0];
            }
            if (board[29] === 0) {
                possibleMoves[i++] = [40, 29, 0];
            }
            if (board[39] === 0) {
                possibleMoves[i++] = [40, 39, 0];
            }
            if (board[41] === 0) {
                possibleMoves[i++] = [40, 41, 0];
            }
            if (board[51] === 0) {
                possibleMoves[i++] = [40, 51, 0];
            }
            if (board[52] === 0) {
                possibleMoves[i++] = [40, 52, 0];
            }
            if (board[53] === 0) {
                possibleMoves[i++] = [40, 53, 0];
            }
        }
        if (board[41] === player) {
            if (board[39] === 0) {
                possibleMoves[i++] = [41, 39, 1];
            }
            if (board[65] === 0) {
                possibleMoves[i++] = [41, 65, 1];
            }
            if (board[28] === 0) {
                possibleMoves[i++] = [41, 28, 0];
            }
            if (board[29] === 0) {
                possibleMoves[i++] = [41, 29, 0];
            }
            if (board[40] === 0) {
                possibleMoves[i++] = [41, 40, 0];
            }
            if (board[52] === 0) {
                possibleMoves[i++] = [41, 52, 0];
            }
            if (board[53] === 0) {
                possibleMoves[i++] = [41, 53, 0];
            }
        }
        if (board[46] === player) {
            if (board[22] === 0) {
                possibleMoves[i++] = [46, 22, 1];
            }
            if (board[48] === 0) {
                possibleMoves[i++] = [46, 48, 1];
            }
            if (board[70] === 0) {
                possibleMoves[i++] = [46, 70, 1];
            }
            if (board[34] === 0) {
                possibleMoves[i++] = [46, 34, 0];
            }
            if (board[35] === 0) {
                possibleMoves[i++] = [46, 35, 0];
            }
            if (board[47] === 0) {
                possibleMoves[i++] = [46, 47, 0];
            }
            if (board[58] === 0) {
                possibleMoves[i++] = [46, 58, 0];
            }
            if (board[59] === 0) {
                possibleMoves[i++] = [46, 59, 0];
            }
        }
        if (board[47] === player) {
            if (board[23] === 0) {
                possibleMoves[i++] = [47, 23, 1];
            }
            if (board[49] === 0) {
                possibleMoves[i++] = [47, 49, 1];
            }
            if (board[71] === 0) {
                possibleMoves[i++] = [47, 71, 1];
            }
            if (board[34] === 0) {
                possibleMoves[i++] = [47, 34, 0];
            }
            if (board[35] === 0) {
                possibleMoves[i++] = [47, 35, 0];
            }
            if (board[36] === 0) {
                possibleMoves[i++] = [47, 36, 0];
            }
            if (board[46] === 0) {
                possibleMoves[i++] = [47, 46, 0];
            }
            if (board[48] === 0) {
                possibleMoves[i++] = [47, 48, 0];
            }
            if (board[58] === 0) {
                possibleMoves[i++] = [47, 58, 0];
            }
            if (board[59] === 0) {
                possibleMoves[i++] = [47, 59, 0];
            }
            if (board[60] === 0) {
                possibleMoves[i++] = [47, 60, 0];
            }
        }
        if (board[48] === player) {
            if (board[24] === 0) {
                possibleMoves[i++] = [48, 24, 1];
            }
            if (board[46] === 0) {
                possibleMoves[i++] = [48, 46, 1];
            }
            if (board[50] === 0) {
                possibleMoves[i++] = [48, 50, 1];
            }
            if (board[72] === 0) {
                possibleMoves[i++] = [48, 72, 1];
            }
            if (board[35] === 0) {
                possibleMoves[i++] = [48, 35, 0];
            }
            if (board[36] === 0) {
                possibleMoves[i++] = [48, 36, 0];
            }
            if (board[37] === 0) {
                possibleMoves[i++] = [48, 37, 0];
            }
            if (board[47] === 0) {
                possibleMoves[i++] = [48, 47, 0];
            }
            if (board[49] === 0) {
                possibleMoves[i++] = [48, 49, 0];
            }
            if (board[59] === 0) {
                possibleMoves[i++] = [48, 59, 0];
            }
            if (board[60] === 0) {
                possibleMoves[i++] = [48, 60, 0];
            }
            if (board[61] === 0) {
                possibleMoves[i++] = [48, 61, 0];
            }
        }
        if (board[49] === player) {
            if (board[25] === 0) {
                possibleMoves[i++] = [49, 25, 1];
            }
            if (board[47] === 0) {
                possibleMoves[i++] = [49, 47, 1];
            }
            if (board[51] === 0) {
                possibleMoves[i++] = [49, 51, 1];
            }
            if (board[73] === 0) {
                possibleMoves[i++] = [49, 73, 1];
            }
            if (board[36] === 0) {
                possibleMoves[i++] = [49, 36, 0];
            }
            if (board[37] === 0) {
                possibleMoves[i++] = [49, 37, 0];
            }
            if (board[38] === 0) {
                possibleMoves[i++] = [49, 38, 0];
            }
            if (board[48] === 0) {
                possibleMoves[i++] = [49, 48, 0];
            }
            if (board[50] === 0) {
                possibleMoves[i++] = [49, 50, 0];
            }
            if (board[60] === 0) {
                possibleMoves[i++] = [49, 60, 0];
            }
            if (board[61] === 0) {
                possibleMoves[i++] = [49, 61, 0];
            }
            if (board[62] === 0) {
                possibleMoves[i++] = [49, 62, 0];
            }
        }
        if (board[50] === player) {
            if (board[26] === 0) {
                possibleMoves[i++] = [50, 26, 1];
            }
            if (board[48] === 0) {
                possibleMoves[i++] = [50, 48, 1];
            }
            if (board[52] === 0) {
                possibleMoves[i++] = [50, 52, 1];
            }
            if (board[74] === 0) {
                possibleMoves[i++] = [50, 74, 1];
            }
            if (board[37] === 0) {
                possibleMoves[i++] = [50, 37, 0];
            }
            if (board[38] === 0) {
                possibleMoves[i++] = [50, 38, 0];
            }
            if (board[39] === 0) {
                possibleMoves[i++] = [50, 39, 0];
            }
            if (board[49] === 0) {
                possibleMoves[i++] = [50, 49, 0];
            }
            if (board[51] === 0) {
                possibleMoves[i++] = [50, 51, 0];
            }
            if (board[61] === 0) {
                possibleMoves[i++] = [50, 61, 0];
            }
            if (board[62] === 0) {
                possibleMoves[i++] = [50, 62, 0];
            }
            if (board[63] === 0) {
                possibleMoves[i++] = [50, 63, 0];
            }
        }
        if (board[51] === player) {
            if (board[27] === 0) {
                possibleMoves[i++] = [51, 27, 1];
            }
            if (board[49] === 0) {
                possibleMoves[i++] = [51, 49, 1];
            }
            if (board[53] === 0) {
                possibleMoves[i++] = [51, 53, 1];
            }
            if (board[75] === 0) {
                possibleMoves[i++] = [51, 75, 1];
            }
            if (board[38] === 0) {
                possibleMoves[i++] = [51, 38, 0];
            }
            if (board[39] === 0) {
                possibleMoves[i++] = [51, 39, 0];
            }
            if (board[40] === 0) {
                possibleMoves[i++] = [51, 40, 0];
            }
            if (board[50] === 0) {
                possibleMoves[i++] = [51, 50, 0];
            }
            if (board[52] === 0) {
                possibleMoves[i++] = [51, 52, 0];
            }
            if (board[62] === 0) {
                possibleMoves[i++] = [51, 62, 0];
            }
            if (board[63] === 0) {
                possibleMoves[i++] = [51, 63, 0];
            }
            if (board[64] === 0) {
                possibleMoves[i++] = [51, 64, 0];
            }
        }
        if (board[52] === player) {
            if (board[28] === 0) {
                possibleMoves[i++] = [52, 28, 1];
            }
            if (board[50] === 0) {
                possibleMoves[i++] = [52, 50, 1];
            }
            if (board[76] === 0) {
                possibleMoves[i++] = [52, 76, 1];
            }
            if (board[39] === 0) {
                possibleMoves[i++] = [52, 39, 0];
            }
            if (board[40] === 0) {
                possibleMoves[i++] = [52, 40, 0];
            }
            if (board[41] === 0) {
                possibleMoves[i++] = [52, 41, 0];
            }
            if (board[51] === 0) {
                possibleMoves[i++] = [52, 51, 0];
            }
            if (board[53] === 0) {
                possibleMoves[i++] = [52, 53, 0];
            }
            if (board[63] === 0) {
                possibleMoves[i++] = [52, 63, 0];
            }
            if (board[64] === 0) {
                possibleMoves[i++] = [52, 64, 0];
            }
            if (board[65] === 0) {
                possibleMoves[i++] = [52, 65, 0];
            }
        }
        if (board[53] === player) {
            if (board[29] === 0) {
                possibleMoves[i++] = [53, 29, 1];
            }
            if (board[51] === 0) {
                possibleMoves[i++] = [53, 51, 1];
            }
            if (board[77] === 0) {
                possibleMoves[i++] = [53, 77, 1];
            }
            if (board[40] === 0) {
                possibleMoves[i++] = [53, 40, 0];
            }
            if (board[41] === 0) {
                possibleMoves[i++] = [53, 41, 0];
            }
            if (board[52] === 0) {
                possibleMoves[i++] = [53, 52, 0];
            }
            if (board[64] === 0) {
                possibleMoves[i++] = [53, 64, 0];
            }
            if (board[65] === 0) {
                possibleMoves[i++] = [53, 65, 0];
            }
        }
        if (board[58] === player) {
            if (board[34] === 0) {
                possibleMoves[i++] = [58, 34, 1];
            }
            if (board[60] === 0) {
                possibleMoves[i++] = [58, 60, 1];
            }
            if (board[82] === 0) {
                possibleMoves[i++] = [58, 82, 1];
            }
            if (board[46] === 0) {
                possibleMoves[i++] = [58, 46, 0];
            }
            if (board[47] === 0) {
                possibleMoves[i++] = [58, 47, 0];
            }
            if (board[59] === 0) {
                possibleMoves[i++] = [58, 59, 0];
            }
            if (board[70] === 0) {
                possibleMoves[i++] = [58, 70, 0];
            }
            if (board[71] === 0) {
                possibleMoves[i++] = [58, 71, 0];
            }
        }
        if (board[59] === player) {
            if (board[35] === 0) {
                possibleMoves[i++] = [59, 35, 1];
            }
            if (board[61] === 0) {
                possibleMoves[i++] = [59, 61, 1];
            }
            if (board[83] === 0) {
                possibleMoves[i++] = [59, 83, 1];
            }
            if (board[46] === 0) {
                possibleMoves[i++] = [59, 46, 0];
            }
            if (board[47] === 0) {
                possibleMoves[i++] = [59, 47, 0];
            }
            if (board[48] === 0) {
                possibleMoves[i++] = [59, 48, 0];
            }
            if (board[58] === 0) {
                possibleMoves[i++] = [59, 58, 0];
            }
            if (board[60] === 0) {
                possibleMoves[i++] = [59, 60, 0];
            }
            if (board[70] === 0) {
                possibleMoves[i++] = [59, 70, 0];
            }
            if (board[71] === 0) {
                possibleMoves[i++] = [59, 71, 0];
            }
            if (board[72] === 0) {
                possibleMoves[i++] = [59, 72, 0];
            }
        }
        if (board[60] === player) {
            if (board[36] === 0) {
                possibleMoves[i++] = [60, 36, 1];
            }
            if (board[58] === 0) {
                possibleMoves[i++] = [60, 58, 1];
            }
            if (board[62] === 0) {
                possibleMoves[i++] = [60, 62, 1];
            }
            if (board[84] === 0) {
                possibleMoves[i++] = [60, 84, 1];
            }
            if (board[47] === 0) {
                possibleMoves[i++] = [60, 47, 0];
            }
            if (board[48] === 0) {
                possibleMoves[i++] = [60, 48, 0];
            }
            if (board[49] === 0) {
                possibleMoves[i++] = [60, 49, 0];
            }
            if (board[59] === 0) {
                possibleMoves[i++] = [60, 59, 0];
            }
            if (board[61] === 0) {
                possibleMoves[i++] = [60, 61, 0];
            }
            if (board[71] === 0) {
                possibleMoves[i++] = [60, 71, 0];
            }
            if (board[72] === 0) {
                possibleMoves[i++] = [60, 72, 0];
            }
            if (board[73] === 0) {
                possibleMoves[i++] = [60, 73, 0];
            }
        }
        if (board[61] === player) {
            if (board[37] === 0) {
                possibleMoves[i++] = [61, 37, 1];
            }
            if (board[59] === 0) {
                possibleMoves[i++] = [61, 59, 1];
            }
            if (board[63] === 0) {
                possibleMoves[i++] = [61, 63, 1];
            }
            if (board[85] === 0) {
                possibleMoves[i++] = [61, 85, 1];
            }
            if (board[48] === 0) {
                possibleMoves[i++] = [61, 48, 0];
            }
            if (board[49] === 0) {
                possibleMoves[i++] = [61, 49, 0];
            }
            if (board[50] === 0) {
                possibleMoves[i++] = [61, 50, 0];
            }
            if (board[60] === 0) {
                possibleMoves[i++] = [61, 60, 0];
            }
            if (board[62] === 0) {
                possibleMoves[i++] = [61, 62, 0];
            }
            if (board[72] === 0) {
                possibleMoves[i++] = [61, 72, 0];
            }
            if (board[73] === 0) {
                possibleMoves[i++] = [61, 73, 0];
            }
            if (board[74] === 0) {
                possibleMoves[i++] = [61, 74, 0];
            }
        }
        if (board[62] === player) {
            if (board[38] === 0) {
                possibleMoves[i++] = [62, 38, 1];
            }
            if (board[60] === 0) {
                possibleMoves[i++] = [62, 60, 1];
            }
            if (board[64] === 0) {
                possibleMoves[i++] = [62, 64, 1];
            }
            if (board[86] === 0) {
                possibleMoves[i++] = [62, 86, 1];
            }
            if (board[49] === 0) {
                possibleMoves[i++] = [62, 49, 0];
            }
            if (board[50] === 0) {
                possibleMoves[i++] = [62, 50, 0];
            }
            if (board[51] === 0) {
                possibleMoves[i++] = [62, 51, 0];
            }
            if (board[61] === 0) {
                possibleMoves[i++] = [62, 61, 0];
            }
            if (board[63] === 0) {
                possibleMoves[i++] = [62, 63, 0];
            }
            if (board[73] === 0) {
                possibleMoves[i++] = [62, 73, 0];
            }
            if (board[74] === 0) {
                possibleMoves[i++] = [62, 74, 0];
            }
            if (board[75] === 0) {
                possibleMoves[i++] = [62, 75, 0];
            }
        }
        if (board[63] === player) {
            if (board[39] === 0) {
                possibleMoves[i++] = [63, 39, 1];
            }
            if (board[61] === 0) {
                possibleMoves[i++] = [63, 61, 1];
            }
            if (board[65] === 0) {
                possibleMoves[i++] = [63, 65, 1];
            }
            if (board[87] === 0) {
                possibleMoves[i++] = [63, 87, 1];
            }
            if (board[50] === 0) {
                possibleMoves[i++] = [63, 50, 0];
            }
            if (board[51] === 0) {
                possibleMoves[i++] = [63, 51, 0];
            }
            if (board[52] === 0) {
                possibleMoves[i++] = [63, 52, 0];
            }
            if (board[62] === 0) {
                possibleMoves[i++] = [63, 62, 0];
            }
            if (board[64] === 0) {
                possibleMoves[i++] = [63, 64, 0];
            }
            if (board[74] === 0) {
                possibleMoves[i++] = [63, 74, 0];
            }
            if (board[75] === 0) {
                possibleMoves[i++] = [63, 75, 0];
            }
            if (board[76] === 0) {
                possibleMoves[i++] = [63, 76, 0];
            }
        }
        if (board[64] === player) {
            if (board[40] === 0) {
                possibleMoves[i++] = [64, 40, 1];
            }
            if (board[62] === 0) {
                possibleMoves[i++] = [64, 62, 1];
            }
            if (board[88] === 0) {
                possibleMoves[i++] = [64, 88, 1];
            }
            if (board[51] === 0) {
                possibleMoves[i++] = [64, 51, 0];
            }
            if (board[52] === 0) {
                possibleMoves[i++] = [64, 52, 0];
            }
            if (board[53] === 0) {
                possibleMoves[i++] = [64, 53, 0];
            }
            if (board[63] === 0) {
                possibleMoves[i++] = [64, 63, 0];
            }
            if (board[65] === 0) {
                possibleMoves[i++] = [64, 65, 0];
            }
            if (board[75] === 0) {
                possibleMoves[i++] = [64, 75, 0];
            }
            if (board[76] === 0) {
                possibleMoves[i++] = [64, 76, 0];
            }
            if (board[77] === 0) {
                possibleMoves[i++] = [64, 77, 0];
            }
        }
        if (board[65] === player) {
            if (board[41] === 0) {
                possibleMoves[i++] = [65, 41, 1];
            }
            if (board[63] === 0) {
                possibleMoves[i++] = [65, 63, 1];
            }
            if (board[89] === 0) {
                possibleMoves[i++] = [65, 89, 1];
            }
            if (board[52] === 0) {
                possibleMoves[i++] = [65, 52, 0];
            }
            if (board[53] === 0) {
                possibleMoves[i++] = [65, 53, 0];
            }
            if (board[64] === 0) {
                possibleMoves[i++] = [65, 64, 0];
            }
            if (board[76] === 0) {
                possibleMoves[i++] = [65, 76, 0];
            }
            if (board[77] === 0) {
                possibleMoves[i++] = [65, 77, 0];
            }
        }
        if (board[70] === player) {
            if (board[46] === 0) {
                possibleMoves[i++] = [70, 46, 1];
            }
            if (board[72] === 0) {
                possibleMoves[i++] = [70, 72, 1];
            }
            if (board[94] === 0) {
                possibleMoves[i++] = [70, 94, 1];
            }
            if (board[58] === 0) {
                possibleMoves[i++] = [70, 58, 0];
            }
            if (board[59] === 0) {
                possibleMoves[i++] = [70, 59, 0];
            }
            if (board[71] === 0) {
                possibleMoves[i++] = [70, 71, 0];
            }
            if (board[82] === 0) {
                possibleMoves[i++] = [70, 82, 0];
            }
            if (board[83] === 0) {
                possibleMoves[i++] = [70, 83, 0];
            }
        }
        if (board[71] === player) {
            if (board[47] === 0) {
                possibleMoves[i++] = [71, 47, 1];
            }
            if (board[73] === 0) {
                possibleMoves[i++] = [71, 73, 1];
            }
            if (board[95] === 0) {
                possibleMoves[i++] = [71, 95, 1];
            }
            if (board[58] === 0) {
                possibleMoves[i++] = [71, 58, 0];
            }
            if (board[59] === 0) {
                possibleMoves[i++] = [71, 59, 0];
            }
            if (board[60] === 0) {
                possibleMoves[i++] = [71, 60, 0];
            }
            if (board[70] === 0) {
                possibleMoves[i++] = [71, 70, 0];
            }
            if (board[72] === 0) {
                possibleMoves[i++] = [71, 72, 0];
            }
            if (board[82] === 0) {
                possibleMoves[i++] = [71, 82, 0];
            }
            if (board[83] === 0) {
                possibleMoves[i++] = [71, 83, 0];
            }
            if (board[84] === 0) {
                possibleMoves[i++] = [71, 84, 0];
            }
        }
        if (board[72] === player) {
            if (board[48] === 0) {
                possibleMoves[i++] = [72, 48, 1];
            }
            if (board[70] === 0) {
                possibleMoves[i++] = [72, 70, 1];
            }
            if (board[74] === 0) {
                possibleMoves[i++] = [72, 74, 1];
            }
            if (board[96] === 0) {
                possibleMoves[i++] = [72, 96, 1];
            }
            if (board[59] === 0) {
                possibleMoves[i++] = [72, 59, 0];
            }
            if (board[60] === 0) {
                possibleMoves[i++] = [72, 60, 0];
            }
            if (board[61] === 0) {
                possibleMoves[i++] = [72, 61, 0];
            }
            if (board[71] === 0) {
                possibleMoves[i++] = [72, 71, 0];
            }
            if (board[73] === 0) {
                possibleMoves[i++] = [72, 73, 0];
            }
            if (board[83] === 0) {
                possibleMoves[i++] = [72, 83, 0];
            }
            if (board[84] === 0) {
                possibleMoves[i++] = [72, 84, 0];
            }
            if (board[85] === 0) {
                possibleMoves[i++] = [72, 85, 0];
            }
        }
        if (board[73] === player) {
            if (board[49] === 0) {
                possibleMoves[i++] = [73, 49, 1];
            }
            if (board[71] === 0) {
                possibleMoves[i++] = [73, 71, 1];
            }
            if (board[75] === 0) {
                possibleMoves[i++] = [73, 75, 1];
            }
            if (board[97] === 0) {
                possibleMoves[i++] = [73, 97, 1];
            }
            if (board[60] === 0) {
                possibleMoves[i++] = [73, 60, 0];
            }
            if (board[61] === 0) {
                possibleMoves[i++] = [73, 61, 0];
            }
            if (board[62] === 0) {
                possibleMoves[i++] = [73, 62, 0];
            }
            if (board[72] === 0) {
                possibleMoves[i++] = [73, 72, 0];
            }
            if (board[74] === 0) {
                possibleMoves[i++] = [73, 74, 0];
            }
            if (board[84] === 0) {
                possibleMoves[i++] = [73, 84, 0];
            }
            if (board[85] === 0) {
                possibleMoves[i++] = [73, 85, 0];
            }
            if (board[86] === 0) {
                possibleMoves[i++] = [73, 86, 0];
            }
        }
        if (board[74] === player) {
            if (board[50] === 0) {
                possibleMoves[i++] = [74, 50, 1];
            }
            if (board[72] === 0) {
                possibleMoves[i++] = [74, 72, 1];
            }
            if (board[76] === 0) {
                possibleMoves[i++] = [74, 76, 1];
            }
            if (board[98] === 0) {
                possibleMoves[i++] = [74, 98, 1];
            }
            if (board[61] === 0) {
                possibleMoves[i++] = [74, 61, 0];
            }
            if (board[62] === 0) {
                possibleMoves[i++] = [74, 62, 0];
            }
            if (board[63] === 0) {
                possibleMoves[i++] = [74, 63, 0];
            }
            if (board[73] === 0) {
                possibleMoves[i++] = [74, 73, 0];
            }
            if (board[75] === 0) {
                possibleMoves[i++] = [74, 75, 0];
            }
            if (board[85] === 0) {
                possibleMoves[i++] = [74, 85, 0];
            }
            if (board[86] === 0) {
                possibleMoves[i++] = [74, 86, 0];
            }
            if (board[87] === 0) {
                possibleMoves[i++] = [74, 87, 0];
            }
        }
        if (board[75] === player) {
            if (board[51] === 0) {
                possibleMoves[i++] = [75, 51, 1];
            }
            if (board[73] === 0) {
                possibleMoves[i++] = [75, 73, 1];
            }
            if (board[77] === 0) {
                possibleMoves[i++] = [75, 77, 1];
            }
            if (board[99] === 0) {
                possibleMoves[i++] = [75, 99, 1];
            }
            if (board[62] === 0) {
                possibleMoves[i++] = [75, 62, 0];
            }
            if (board[63] === 0) {
                possibleMoves[i++] = [75, 63, 0];
            }
            if (board[64] === 0) {
                possibleMoves[i++] = [75, 64, 0];
            }
            if (board[74] === 0) {
                possibleMoves[i++] = [75, 74, 0];
            }
            if (board[76] === 0) {
                possibleMoves[i++] = [75, 76, 0];
            }
            if (board[86] === 0) {
                possibleMoves[i++] = [75, 86, 0];
            }
            if (board[87] === 0) {
                possibleMoves[i++] = [75, 87, 0];
            }
            if (board[88] === 0) {
                possibleMoves[i++] = [75, 88, 0];
            }
        }
        if (board[76] === player) {
            if (board[52] === 0) {
                possibleMoves[i++] = [76, 52, 1];
            }
            if (board[74] === 0) {
                possibleMoves[i++] = [76, 74, 1];
            }
            if (board[100] === 0) {
                possibleMoves[i++] = [76, 100, 1];
            }
            if (board[63] === 0) {
                possibleMoves[i++] = [76, 63, 0];
            }
            if (board[64] === 0) {
                possibleMoves[i++] = [76, 64, 0];
            }
            if (board[65] === 0) {
                possibleMoves[i++] = [76, 65, 0];
            }
            if (board[75] === 0) {
                possibleMoves[i++] = [76, 75, 0];
            }
            if (board[77] === 0) {
                possibleMoves[i++] = [76, 77, 0];
            }
            if (board[87] === 0) {
                possibleMoves[i++] = [76, 87, 0];
            }
            if (board[88] === 0) {
                possibleMoves[i++] = [76, 88, 0];
            }
            if (board[89] === 0) {
                possibleMoves[i++] = [76, 89, 0];
            }
        }
        if (board[77] === player) {
            if (board[53] === 0) {
                possibleMoves[i++] = [77, 53, 1];
            }
            if (board[75] === 0) {
                possibleMoves[i++] = [77, 75, 1];
            }
            if (board[101] === 0) {
                possibleMoves[i++] = [77, 101, 1];
            }
            if (board[64] === 0) {
                possibleMoves[i++] = [77, 64, 0];
            }
            if (board[65] === 0) {
                possibleMoves[i++] = [77, 65, 0];
            }
            if (board[76] === 0) {
                possibleMoves[i++] = [77, 76, 0];
            }
            if (board[88] === 0) {
                possibleMoves[i++] = [77, 88, 0];
            }
            if (board[89] === 0) {
                possibleMoves[i++] = [77, 89, 0];
            }
        }
        if (board[82] === player) {
            if (board[58] === 0) {
                possibleMoves[i++] = [82, 58, 1];
            }
            if (board[84] === 0) {
                possibleMoves[i++] = [82, 84, 1];
            }
            if (board[106] === 0) {
                possibleMoves[i++] = [82, 106, 1];
            }
            if (board[70] === 0) {
                possibleMoves[i++] = [82, 70, 0];
            }
            if (board[71] === 0) {
                possibleMoves[i++] = [82, 71, 0];
            }
            if (board[83] === 0) {
                possibleMoves[i++] = [82, 83, 0];
            }
            if (board[94] === 0) {
                possibleMoves[i++] = [82, 94, 0];
            }
            if (board[95] === 0) {
                possibleMoves[i++] = [82, 95, 0];
            }
        }
        if (board[83] === player) {
            if (board[59] === 0) {
                possibleMoves[i++] = [83, 59, 1];
            }
            if (board[85] === 0) {
                possibleMoves[i++] = [83, 85, 1];
            }
            if (board[107] === 0) {
                possibleMoves[i++] = [83, 107, 1];
            }
            if (board[70] === 0) {
                possibleMoves[i++] = [83, 70, 0];
            }
            if (board[71] === 0) {
                possibleMoves[i++] = [83, 71, 0];
            }
            if (board[72] === 0) {
                possibleMoves[i++] = [83, 72, 0];
            }
            if (board[82] === 0) {
                possibleMoves[i++] = [83, 82, 0];
            }
            if (board[84] === 0) {
                possibleMoves[i++] = [83, 84, 0];
            }
            if (board[94] === 0) {
                possibleMoves[i++] = [83, 94, 0];
            }
            if (board[95] === 0) {
                possibleMoves[i++] = [83, 95, 0];
            }
            if (board[96] === 0) {
                possibleMoves[i++] = [83, 96, 0];
            }
        }
        if (board[84] === player) {
            if (board[60] === 0) {
                possibleMoves[i++] = [84, 60, 1];
            }
            if (board[82] === 0) {
                possibleMoves[i++] = [84, 82, 1];
            }
            if (board[86] === 0) {
                possibleMoves[i++] = [84, 86, 1];
            }
            if (board[108] === 0) {
                possibleMoves[i++] = [84, 108, 1];
            }
            if (board[71] === 0) {
                possibleMoves[i++] = [84, 71, 0];
            }
            if (board[72] === 0) {
                possibleMoves[i++] = [84, 72, 0];
            }
            if (board[73] === 0) {
                possibleMoves[i++] = [84, 73, 0];
            }
            if (board[83] === 0) {
                possibleMoves[i++] = [84, 83, 0];
            }
            if (board[85] === 0) {
                possibleMoves[i++] = [84, 85, 0];
            }
            if (board[95] === 0) {
                possibleMoves[i++] = [84, 95, 0];
            }
            if (board[96] === 0) {
                possibleMoves[i++] = [84, 96, 0];
            }
            if (board[97] === 0) {
                possibleMoves[i++] = [84, 97, 0];
            }
        }
        if (board[85] === player) {
            if (board[61] === 0) {
                possibleMoves[i++] = [85, 61, 1];
            }
            if (board[83] === 0) {
                possibleMoves[i++] = [85, 83, 1];
            }
            if (board[87] === 0) {
                possibleMoves[i++] = [85, 87, 1];
            }
            if (board[109] === 0) {
                possibleMoves[i++] = [85, 109, 1];
            }
            if (board[72] === 0) {
                possibleMoves[i++] = [85, 72, 0];
            }
            if (board[73] === 0) {
                possibleMoves[i++] = [85, 73, 0];
            }
            if (board[74] === 0) {
                possibleMoves[i++] = [85, 74, 0];
            }
            if (board[84] === 0) {
                possibleMoves[i++] = [85, 84, 0];
            }
            if (board[86] === 0) {
                possibleMoves[i++] = [85, 86, 0];
            }
            if (board[96] === 0) {
                possibleMoves[i++] = [85, 96, 0];
            }
            if (board[97] === 0) {
                possibleMoves[i++] = [85, 97, 0];
            }
            if (board[98] === 0) {
                possibleMoves[i++] = [85, 98, 0];
            }
        }
        if (board[86] === player) {
            if (board[62] === 0) {
                possibleMoves[i++] = [86, 62, 1];
            }
            if (board[84] === 0) {
                possibleMoves[i++] = [86, 84, 1];
            }
            if (board[88] === 0) {
                possibleMoves[i++] = [86, 88, 1];
            }
            if (board[110] === 0) {
                possibleMoves[i++] = [86, 110, 1];
            }
            if (board[73] === 0) {
                possibleMoves[i++] = [86, 73, 0];
            }
            if (board[74] === 0) {
                possibleMoves[i++] = [86, 74, 0];
            }
            if (board[75] === 0) {
                possibleMoves[i++] = [86, 75, 0];
            }
            if (board[85] === 0) {
                possibleMoves[i++] = [86, 85, 0];
            }
            if (board[87] === 0) {
                possibleMoves[i++] = [86, 87, 0];
            }
            if (board[97] === 0) {
                possibleMoves[i++] = [86, 97, 0];
            }
            if (board[98] === 0) {
                possibleMoves[i++] = [86, 98, 0];
            }
            if (board[99] === 0) {
                possibleMoves[i++] = [86, 99, 0];
            }
        }
        if (board[87] === player) {
            if (board[63] === 0) {
                possibleMoves[i++] = [87, 63, 1];
            }
            if (board[85] === 0) {
                possibleMoves[i++] = [87, 85, 1];
            }
            if (board[89] === 0) {
                possibleMoves[i++] = [87, 89, 1];
            }
            if (board[111] === 0) {
                possibleMoves[i++] = [87, 111, 1];
            }
            if (board[74] === 0) {
                possibleMoves[i++] = [87, 74, 0];
            }
            if (board[75] === 0) {
                possibleMoves[i++] = [87, 75, 0];
            }
            if (board[76] === 0) {
                possibleMoves[i++] = [87, 76, 0];
            }
            if (board[86] === 0) {
                possibleMoves[i++] = [87, 86, 0];
            }
            if (board[88] === 0) {
                possibleMoves[i++] = [87, 88, 0];
            }
            if (board[98] === 0) {
                possibleMoves[i++] = [87, 98, 0];
            }
            if (board[99] === 0) {
                possibleMoves[i++] = [87, 99, 0];
            }
            if (board[100] === 0) {
                possibleMoves[i++] = [87, 100, 0];
            }
        }
        if (board[88] === player) {
            if (board[64] === 0) {
                possibleMoves[i++] = [88, 64, 1];
            }
            if (board[86] === 0) {
                possibleMoves[i++] = [88, 86, 1];
            }
            if (board[112] === 0) {
                possibleMoves[i++] = [88, 112, 1];
            }
            if (board[75] === 0) {
                possibleMoves[i++] = [88, 75, 0];
            }
            if (board[76] === 0) {
                possibleMoves[i++] = [88, 76, 0];
            }
            if (board[77] === 0) {
                possibleMoves[i++] = [88, 77, 0];
            }
            if (board[87] === 0) {
                possibleMoves[i++] = [88, 87, 0];
            }
            if (board[89] === 0) {
                possibleMoves[i++] = [88, 89, 0];
            }
            if (board[99] === 0) {
                possibleMoves[i++] = [88, 99, 0];
            }
            if (board[100] === 0) {
                possibleMoves[i++] = [88, 100, 0];
            }
            if (board[101] === 0) {
                possibleMoves[i++] = [88, 101, 0];
            }
        }
        if (board[89] === player) {
            if (board[65] === 0) {
                possibleMoves[i++] = [89, 65, 1];
            }
            if (board[87] === 0) {
                possibleMoves[i++] = [89, 87, 1];
            }
            if (board[113] === 0) {
                possibleMoves[i++] = [89, 113, 1];
            }
            if (board[76] === 0) {
                possibleMoves[i++] = [89, 76, 0];
            }
            if (board[77] === 0) {
                possibleMoves[i++] = [89, 77, 0];
            }
            if (board[88] === 0) {
                possibleMoves[i++] = [89, 88, 0];
            }
            if (board[100] === 0) {
                possibleMoves[i++] = [89, 100, 0];
            }
            if (board[101] === 0) {
                possibleMoves[i++] = [89, 101, 0];
            }
        }
        if (board[94] === player) {
            if (board[70] === 0) {
                possibleMoves[i++] = [94, 70, 1];
            }
            if (board[96] === 0) {
                possibleMoves[i++] = [94, 96, 1];
            }
            if (board[82] === 0) {
                possibleMoves[i++] = [94, 82, 0];
            }
            if (board[83] === 0) {
                possibleMoves[i++] = [94, 83, 0];
            }
            if (board[95] === 0) {
                possibleMoves[i++] = [94, 95, 0];
            }
            if (board[106] === 0) {
                possibleMoves[i++] = [94, 106, 0];
            }
            if (board[107] === 0) {
                possibleMoves[i++] = [94, 107, 0];
            }
        }
        if (board[95] === player) {
            if (board[71] === 0) {
                possibleMoves[i++] = [95, 71, 1];
            }
            if (board[97] === 0) {
                possibleMoves[i++] = [95, 97, 1];
            }
            if (board[82] === 0) {
                possibleMoves[i++] = [95, 82, 0];
            }
            if (board[83] === 0) {
                possibleMoves[i++] = [95, 83, 0];
            }
            if (board[84] === 0) {
                possibleMoves[i++] = [95, 84, 0];
            }
            if (board[94] === 0) {
                possibleMoves[i++] = [95, 94, 0];
            }
            if (board[96] === 0) {
                possibleMoves[i++] = [95, 96, 0];
            }
            if (board[106] === 0) {
                possibleMoves[i++] = [95, 106, 0];
            }
            if (board[107] === 0) {
                possibleMoves[i++] = [95, 107, 0];
            }
            if (board[108] === 0) {
                possibleMoves[i++] = [95, 108, 0];
            }
        }
        if (board[96] === player) {
            if (board[72] === 0) {
                possibleMoves[i++] = [96, 72, 1];
            }
            if (board[94] === 0) {
                possibleMoves[i++] = [96, 94, 1];
            }
            if (board[98] === 0) {
                possibleMoves[i++] = [96, 98, 1];
            }
            if (board[83] === 0) {
                possibleMoves[i++] = [96, 83, 0];
            }
            if (board[84] === 0) {
                possibleMoves[i++] = [96, 84, 0];
            }
            if (board[85] === 0) {
                possibleMoves[i++] = [96, 85, 0];
            }
            if (board[95] === 0) {
                possibleMoves[i++] = [96, 95, 0];
            }
            if (board[97] === 0) {
                possibleMoves[i++] = [96, 97, 0];
            }
            if (board[107] === 0) {
                possibleMoves[i++] = [96, 107, 0];
            }
            if (board[108] === 0) {
                possibleMoves[i++] = [96, 108, 0];
            }
            if (board[109] === 0) {
                possibleMoves[i++] = [96, 109, 0];
            }
        }
        if (board[97] === player) {
            if (board[73] === 0) {
                possibleMoves[i++] = [97, 73, 1];
            }
            if (board[95] === 0) {
                possibleMoves[i++] = [97, 95, 1];
            }
            if (board[99] === 0) {
                possibleMoves[i++] = [97, 99, 1];
            }
            if (board[84] === 0) {
                possibleMoves[i++] = [97, 84, 0];
            }
            if (board[85] === 0) {
                possibleMoves[i++] = [97, 85, 0];
            }
            if (board[86] === 0) {
                possibleMoves[i++] = [97, 86, 0];
            }
            if (board[96] === 0) {
                possibleMoves[i++] = [97, 96, 0];
            }
            if (board[98] === 0) {
                possibleMoves[i++] = [97, 98, 0];
            }
            if (board[108] === 0) {
                possibleMoves[i++] = [97, 108, 0];
            }
            if (board[109] === 0) {
                possibleMoves[i++] = [97, 109, 0];
            }
            if (board[110] === 0) {
                possibleMoves[i++] = [97, 110, 0];
            }
        }
        if (board[98] === player) {
            if (board[74] === 0) {
                possibleMoves[i++] = [98, 74, 1];
            }
            if (board[96] === 0) {
                possibleMoves[i++] = [98, 96, 1];
            }
            if (board[100] === 0) {
                possibleMoves[i++] = [98, 100, 1];
            }
            if (board[85] === 0) {
                possibleMoves[i++] = [98, 85, 0];
            }
            if (board[86] === 0) {
                possibleMoves[i++] = [98, 86, 0];
            }
            if (board[87] === 0) {
                possibleMoves[i++] = [98, 87, 0];
            }
            if (board[97] === 0) {
                possibleMoves[i++] = [98, 97, 0];
            }
            if (board[99] === 0) {
                possibleMoves[i++] = [98, 99, 0];
            }
            if (board[109] === 0) {
                possibleMoves[i++] = [98, 109, 0];
            }
            if (board[110] === 0) {
                possibleMoves[i++] = [98, 110, 0];
            }
            if (board[111] === 0) {
                possibleMoves[i++] = [98, 111, 0];
            }
        }
        if (board[99] === player) {
            if (board[75] === 0) {
                possibleMoves[i++] = [99, 75, 1];
            }
            if (board[97] === 0) {
                possibleMoves[i++] = [99, 97, 1];
            }
            if (board[101] === 0) {
                possibleMoves[i++] = [99, 101, 1];
            }
            if (board[86] === 0) {
                possibleMoves[i++] = [99, 86, 0];
            }
            if (board[87] === 0) {
                possibleMoves[i++] = [99, 87, 0];
            }
            if (board[88] === 0) {
                possibleMoves[i++] = [99, 88, 0];
            }
            if (board[98] === 0) {
                possibleMoves[i++] = [99, 98, 0];
            }
            if (board[100] === 0) {
                possibleMoves[i++] = [99, 100, 0];
            }
            if (board[110] === 0) {
                possibleMoves[i++] = [99, 110, 0];
            }
            if (board[111] === 0) {
                possibleMoves[i++] = [99, 111, 0];
            }
            if (board[112] === 0) {
                possibleMoves[i++] = [99, 112, 0];
            }
        }
        if (board[100] === player) {
            if (board[76] === 0) {
                possibleMoves[i++] = [100, 76, 1];
            }
            if (board[98] === 0) {
                possibleMoves[i++] = [100, 98, 1];
            }
            if (board[87] === 0) {
                possibleMoves[i++] = [100, 87, 0];
            }
            if (board[88] === 0) {
                possibleMoves[i++] = [100, 88, 0];
            }
            if (board[89] === 0) {
                possibleMoves[i++] = [100, 89, 0];
            }
            if (board[99] === 0) {
                possibleMoves[i++] = [100, 99, 0];
            }
            if (board[101] === 0) {
                possibleMoves[i++] = [100, 101, 0];
            }
            if (board[111] === 0) {
                possibleMoves[i++] = [100, 111, 0];
            }
            if (board[112] === 0) {
                possibleMoves[i++] = [100, 112, 0];
            }
            if (board[113] === 0) {
                possibleMoves[i++] = [100, 113, 0];
            }
        }
        if (board[101] === player) {
            if (board[77] === 0) {
                possibleMoves[i++] = [101, 77, 1];
            }
            if (board[99] === 0) {
                possibleMoves[i++] = [101, 99, 1];
            }
            if (board[88] === 0) {
                possibleMoves[i++] = [101, 88, 0];
            }
            if (board[89] === 0) {
                possibleMoves[i++] = [101, 89, 0];
            }
            if (board[100] === 0) {
                possibleMoves[i++] = [101, 100, 0];
            }
            if (board[112] === 0) {
                possibleMoves[i++] = [101, 112, 0];
            }
            if (board[113] === 0) {
                possibleMoves[i++] = [101, 113, 0];
            }
        }
        if (board[106] === player) {
            if (board[82] === 0) {
                possibleMoves[i++] = [106, 82, 1];
            }
            if (board[108] === 0) {
                possibleMoves[i++] = [106, 108, 1];
            }
            if (board[94] === 0) {
                possibleMoves[i++] = [106, 94, 0];
            }
            if (board[95] === 0) {
                possibleMoves[i++] = [106, 95, 0];
            }
            if (board[107] === 0) {
                possibleMoves[i++] = [106, 107, 0];
            }
        }
        if (board[107] === player) {
            if (board[83] === 0) {
                possibleMoves[i++] = [107, 83, 1];
            }
            if (board[109] === 0) {
                possibleMoves[i++] = [107, 109, 1];
            }
            if (board[94] === 0) {
                possibleMoves[i++] = [107, 94, 0];
            }
            if (board[95] === 0) {
                possibleMoves[i++] = [107, 95, 0];
            }
            if (board[96] === 0) {
                possibleMoves[i++] = [107, 96, 0];
            }
            if (board[106] === 0) {
                possibleMoves[i++] = [107, 106, 0];
            }
            if (board[108] === 0) {
                possibleMoves[i++] = [107, 108, 0];
            }
        }
        if (board[108] === player) {
            if (board[84] === 0) {
                possibleMoves[i++] = [108, 84, 1];
            }
            if (board[106] === 0) {
                possibleMoves[i++] = [108, 106, 1];
            }
            if (board[110] === 0) {
                possibleMoves[i++] = [108, 110, 1];
            }
            if (board[95] === 0) {
                possibleMoves[i++] = [108, 95, 0];
            }
            if (board[96] === 0) {
                possibleMoves[i++] = [108, 96, 0];
            }
            if (board[97] === 0) {
                possibleMoves[i++] = [108, 97, 0];
            }
            if (board[107] === 0) {
                possibleMoves[i++] = [108, 107, 0];
            }
            if (board[109] === 0) {
                possibleMoves[i++] = [108, 109, 0];
            }
        }
        if (board[109] === player) {
            if (board[85] === 0) {
                possibleMoves[i++] = [109, 85, 1];
            }
            if (board[107] === 0) {
                possibleMoves[i++] = [109, 107, 1];
            }
            if (board[111] === 0) {
                possibleMoves[i++] = [109, 111, 1];
            }
            if (board[96] === 0) {
                possibleMoves[i++] = [109, 96, 0];
            }
            if (board[97] === 0) {
                possibleMoves[i++] = [109, 97, 0];
            }
            if (board[98] === 0) {
                possibleMoves[i++] = [109, 98, 0];
            }
            if (board[108] === 0) {
                possibleMoves[i++] = [109, 108, 0];
            }
            if (board[110] === 0) {
                possibleMoves[i++] = [109, 110, 0];
            }
        }
        if (board[110] === player) {
            if (board[86] === 0) {
                possibleMoves[i++] = [110, 86, 1];
            }
            if (board[108] === 0) {
                possibleMoves[i++] = [110, 108, 1];
            }
            if (board[112] === 0) {
                possibleMoves[i++] = [110, 112, 1];
            }
            if (board[97] === 0) {
                possibleMoves[i++] = [110, 97, 0];
            }
            if (board[98] === 0) {
                possibleMoves[i++] = [110, 98, 0];
            }
            if (board[99] === 0) {
                possibleMoves[i++] = [110, 99, 0];
            }
            if (board[109] === 0) {
                possibleMoves[i++] = [110, 109, 0];
            }
            if (board[111] === 0) {
                possibleMoves[i++] = [110, 111, 0];
            }
        }
        if (board[111] === player) {
            if (board[87] === 0) {
                possibleMoves[i++] = [111, 87, 1];
            }
            if (board[109] === 0) {
                possibleMoves[i++] = [111, 109, 1];
            }
            if (board[113] === 0) {
                possibleMoves[i++] = [111, 113, 1];
            }
            if (board[98] === 0) {
                possibleMoves[i++] = [111, 98, 0];
            }
            if (board[99] === 0) {
                possibleMoves[i++] = [111, 99, 0];
            }
            if (board[100] === 0) {
                possibleMoves[i++] = [111, 100, 0];
            }
            if (board[110] === 0) {
                possibleMoves[i++] = [111, 110, 0];
            }
            if (board[112] === 0) {
                possibleMoves[i++] = [111, 112, 0];
            }
        }
        if (board[112] === player) {
            if (board[88] === 0) {
                possibleMoves[i++] = [112, 88, 1];
            }
            if (board[110] === 0) {
                possibleMoves[i++] = [112, 110, 1];
            }
            if (board[99] === 0) {
                possibleMoves[i++] = [112, 99, 0];
            }
            if (board[100] === 0) {
                possibleMoves[i++] = [112, 100, 0];
            }
            if (board[101] === 0) {
                possibleMoves[i++] = [112, 101, 0];
            }
            if (board[111] === 0) {
                possibleMoves[i++] = [112, 111, 0];
            }
            if (board[113] === 0) {
                possibleMoves[i++] = [112, 113, 0];
            }
        }
        if (board[113] === player) {
            if (board[89] === 0) {
                possibleMoves[i++] = [113, 89, 1];
            }
            if (board[111] === 0) {
                possibleMoves[i++] = [113, 111, 1];
            }
            if (board[100] === 0) {
                possibleMoves[i++] = [113, 100, 0];
            }
            if (board[101] === 0) {
                possibleMoves[i++] = [113, 101, 0];
            }
            if (board[112] === 0) {
                possibleMoves[i++] = [113, 112, 0];
            }
        }

        return possibleMoves;
    }

    function getCopyBoard(board){
        return [board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8], board[9], board[10], board[11], board[12], board[13], board[14], board[15], board[16], board[17], board[18], board[19], board[20], board[21], board[22], board[23], board[24], board[25], board[26], board[27], board[28], board[29], board[30], board[31], board[32], board[33], board[34], board[35], board[36], board[37], board[38], board[39], board[40], board[41], board[42], board[43], board[44], board[45], board[46], board[47], board[48], board[49], board[50], board[51], board[52], board[53], board[54], board[55], board[56], board[57], board[58], board[59], board[60], board[61], board[62], board[63], board[64], board[65], board[66], board[67], board[68], board[69], board[70], board[71], board[72], board[73], board[74], board[75], board[76], board[77], board[78], board[79], board[80], board[81], board[82], board[83], board[84], board[85], board[86], board[87], board[88], board[89], board[90], board[91], board[92], board[93], board[94], board[95], board[96], board[97], board[98], board[99], board[100], board[101], board[102], board[103], board[104], board[105], board[106], board[107], board[108], board[109], board[110], board[111], board[112], board[113], board[114], board[115], board[116], board[117], board[118], board[119], board[120], board[121], board[122], board[123], board[124], board[125], board[126], board[127], board[128], board[129], board[130], board[131], board[132], board[133], board[134], board[135]];
    }

    function setMove(board, player, move){

        var from = move[0];
        var to = move[1];

        // Set the new position
        board[to] = player;

        // Clear source if jump
        if(move[2] === 1){
            board[from] = 0;
        }

        // Capture around
        var opponent = player * -1;

        if(board[to-13] === opponent)   { board[to-13] = player; }
        if(board[to-12] === opponent)   { board[to-12] = player; }
        if(board[to-11] === opponent)   { board[to-11] = player; }
        if(board[to-1] === opponent)    { board[to-1] = player; }
        if(board[to+1] === opponent)    { board[to+1] = player; }
        if(board[to+11] === opponent)   { board[to+11] = player; }
        if(board[to+12] === opponent)   { board[to+12] = player; }
        if(board[to+13] === opponent)   { board[to+13] = player; };

        return board;
    }

    function buildBoard(){
        var $board = $('#board');

        // Récupérer une position Humaine, au hasard
        if(HumanLastMove === null){
            var HumanPositions = [];
        }

        for(var Id = 0; Id <= 136; Id++){
            switch(board[Id]){
                case Ai:

                    var $child = AiObj.clone(true);
                    var $parent = EmptyObj.clone(true).data({ Id:Id, Child:$child }).attr('title', Id);
                    $child.data({ Parent:$parent });

                    $parent.html($child);
                    $board.append($parent);

                    break;

                case Human:

                    var $child = HumanObj.clone(true);
                    var $parent = EmptyObj.clone(true).data({ Id:Id, Child:$child }).attr('title', Id);
                    $child.data({ Parent:$parent });

                    $parent.html($child);
                    $board.append($parent);

                    if(HumanLastMove === null){
                        HumanPositions.push(Id);
                    }

                    break;

                case Empty:

                    var $elt = EmptyObj.clone(true).data({ Id:Id }).attr('title', Id);
                    $board.append($elt);

                    break;

                case Hole:

                    var $elt = HoleObj.clone(true).data( { Id:Id } ).attr('title', Id);
                    $board.append($elt);

                    break;
            }
        }

        // Attribuer une position à Humain si null
        if(HumanLastMove === null){
            HumanLastMove = HumanPositions[Math.floor(Math.random() * HumanPositions.length)];
        }
    }

    function getScores(board){
        var nAi = nHuman = nHole = 0;
        if (board[22] === Ai) {
            nAi++;
        }
        if (board[22] === Human) {
            nHuman++;
        }
        if (board[22] === Hole) {
            nHole++;
        }
        if (board[23] === Ai) {
            nAi++;
        }
        if (board[23] === Human) {
            nHuman++;
        }
        if (board[23] === Hole) {
            nHole++;
        }
        if (board[24] === Ai) {
            nAi++;
        }
        if (board[24] === Human) {
            nHuman++;
        }
        if (board[24] === Hole) {
            nHole++;
        }
        if (board[25] === Ai) {
            nAi++;
        }
        if (board[25] === Human) {
            nHuman++;
        }
        if (board[25] === Hole) {
            nHole++;
        }
        if (board[26] === Ai) {
            nAi++;
        }
        if (board[26] === Human) {
            nHuman++;
        }
        if (board[26] === Hole) {
            nHole++;
        }
        if (board[27] === Ai) {
            nAi++;
        }
        if (board[27] === Human) {
            nHuman++;
        }
        if (board[27] === Hole) {
            nHole++;
        }
        if (board[28] === Ai) {
            nAi++;
        }
        if (board[28] === Human) {
            nHuman++;
        }
        if (board[28] === Hole) {
            nHole++;
        }
        if (board[29] === Ai) {
            nAi++;
        }
        if (board[29] === Human) {
            nHuman++;
        }
        if (board[29] === Hole) {
            nHole++;
        }
        if (board[34] === Ai) {
            nAi++;
        }
        if (board[34] === Human) {
            nHuman++;
        }
        if (board[34] === Hole) {
            nHole++;
        }
        if (board[35] === Ai) {
            nAi++;
        }
        if (board[35] === Human) {
            nHuman++;
        }
        if (board[35] === Hole) {
            nHole++;
        }
        if (board[36] === Ai) {
            nAi++;
        }
        if (board[36] === Human) {
            nHuman++;
        }
        if (board[36] === Hole) {
            nHole++;
        }
        if (board[37] === Ai) {
            nAi++;
        }
        if (board[37] === Human) {
            nHuman++;
        }
        if (board[37] === Hole) {
            nHole++;
        }
        if (board[38] === Ai) {
            nAi++;
        }
        if (board[38] === Human) {
            nHuman++;
        }
        if (board[38] === Hole) {
            nHole++;
        }
        if (board[39] === Ai) {
            nAi++;
        }
        if (board[39] === Human) {
            nHuman++;
        }
        if (board[39] === Hole) {
            nHole++;
        }
        if (board[40] === Ai) {
            nAi++;
        }
        if (board[40] === Human) {
            nHuman++;
        }
        if (board[40] === Hole) {
            nHole++;
        }
        if (board[41] === Ai) {
            nAi++;
        }
        if (board[41] === Human) {
            nHuman++;
        }
        if (board[41] === Hole) {
            nHole++;
        }
        if (board[46] === Ai) {
            nAi++;
        }
        if (board[46] === Human) {
            nHuman++;
        }
        if (board[46] === Hole) {
            nHole++;
        }
        if (board[47] === Ai) {
            nAi++;
        }
        if (board[47] === Human) {
            nHuman++;
        }
        if (board[47] === Hole) {
            nHole++;
        }
        if (board[48] === Ai) {
            nAi++;
        }
        if (board[48] === Human) {
            nHuman++;
        }
        if (board[48] === Hole) {
            nHole++;
        }
        if (board[49] === Ai) {
            nAi++;
        }
        if (board[49] === Human) {
            nHuman++;
        }
        if (board[49] === Hole) {
            nHole++;
        }
        if (board[50] === Ai) {
            nAi++;
        }
        if (board[50] === Human) {
            nHuman++;
        }
        if (board[50] === Hole) {
            nHole++;
        }
        if (board[51] === Ai) {
            nAi++;
        }
        if (board[51] === Human) {
            nHuman++;
        }
        if (board[51] === Hole) {
            nHole++;
        }
        if (board[52] === Ai) {
            nAi++;
        }
        if (board[52] === Human) {
            nHuman++;
        }
        if (board[52] === Hole) {
            nHole++;
        }
        if (board[53] === Ai) {
            nAi++;
        }
        if (board[53] === Human) {
            nHuman++;
        }
        if (board[53] === Hole) {
            nHole++;
        }
        if (board[58] === Ai) {
            nAi++;
        }
        if (board[58] === Human) {
            nHuman++;
        }
        if (board[58] === Hole) {
            nHole++;
        }
        if (board[59] === Ai) {
            nAi++;
        }
        if (board[59] === Human) {
            nHuman++;
        }
        if (board[59] === Hole) {
            nHole++;
        }
        if (board[60] === Ai) {
            nAi++;
        }
        if (board[60] === Human) {
            nHuman++;
        }
        if (board[60] === Hole) {
            nHole++;
        }
        if (board[61] === Ai) {
            nAi++;
        }
        if (board[61] === Human) {
            nHuman++;
        }
        if (board[61] === Hole) {
            nHole++;
        }
        if (board[62] === Ai) {
            nAi++;
        }
        if (board[62] === Human) {
            nHuman++;
        }
        if (board[62] === Hole) {
            nHole++;
        }
        if (board[63] === Ai) {
            nAi++;
        }
        if (board[63] === Human) {
            nHuman++;
        }
        if (board[63] === Hole) {
            nHole++;
        }
        if (board[64] === Ai) {
            nAi++;
        }
        if (board[64] === Human) {
            nHuman++;
        }
        if (board[64] === Hole) {
            nHole++;
        }
        if (board[65] === Ai) {
            nAi++;
        }
        if (board[65] === Human) {
            nHuman++;
        }
        if (board[65] === Hole) {
            nHole++;
        }
        if (board[70] === Ai) {
            nAi++;
        }
        if (board[70] === Human) {
            nHuman++;
        }
        if (board[70] === Hole) {
            nHole++;
        }
        if (board[71] === Ai) {
            nAi++;
        }
        if (board[71] === Human) {
            nHuman++;
        }
        if (board[71] === Hole) {
            nHole++;
        }
        if (board[72] === Ai) {
            nAi++;
        }
        if (board[72] === Human) {
            nHuman++;
        }
        if (board[72] === Hole) {
            nHole++;
        }
        if (board[73] === Ai) {
            nAi++;
        }
        if (board[73] === Human) {
            nHuman++;
        }
        if (board[73] === Hole) {
            nHole++;
        }
        if (board[74] === Ai) {
            nAi++;
        }
        if (board[74] === Human) {
            nHuman++;
        }
        if (board[74] === Hole) {
            nHole++;
        }
        if (board[75] === Ai) {
            nAi++;
        }
        if (board[75] === Human) {
            nHuman++;
        }
        if (board[75] === Hole) {
            nHole++;
        }
        if (board[76] === Ai) {
            nAi++;
        }
        if (board[76] === Human) {
            nHuman++;
        }
        if (board[76] === Hole) {
            nHole++;
        }
        if (board[77] === Ai) {
            nAi++;
        }
        if (board[77] === Human) {
            nHuman++;
        }
        if (board[77] === Hole) {
            nHole++;
        }
        if (board[82] === Ai) {
            nAi++;
        }
        if (board[82] === Human) {
            nHuman++;
        }
        if (board[82] === Hole) {
            nHole++;
        }
        if (board[83] === Ai) {
            nAi++;
        }
        if (board[83] === Human) {
            nHuman++;
        }
        if (board[83] === Hole) {
            nHole++;
        }
        if (board[84] === Ai) {
            nAi++;
        }
        if (board[84] === Human) {
            nHuman++;
        }
        if (board[84] === Hole) {
            nHole++;
        }
        if (board[85] === Ai) {
            nAi++;
        }
        if (board[85] === Human) {
            nHuman++;
        }
        if (board[85] === Hole) {
            nHole++;
        }
        if (board[86] === Ai) {
            nAi++;
        }
        if (board[86] === Human) {
            nHuman++;
        }
        if (board[86] === Hole) {
            nHole++;
        }
        if (board[87] === Ai) {
            nAi++;
        }
        if (board[87] === Human) {
            nHuman++;
        }
        if (board[87] === Hole) {
            nHole++;
        }
        if (board[88] === Ai) {
            nAi++;
        }
        if (board[88] === Human) {
            nHuman++;
        }
        if (board[88] === Hole) {
            nHole++;
        }
        if (board[89] === Ai) {
            nAi++;
        }
        if (board[89] === Human) {
            nHuman++;
        }
        if (board[89] === Hole) {
            nHole++;
        }
        if (board[94] === Ai) {
            nAi++;
        }
        if (board[94] === Human) {
            nHuman++;
        }
        if (board[94] === Hole) {
            nHole++;
        }
        if (board[95] === Ai) {
            nAi++;
        }
        if (board[95] === Human) {
            nHuman++;
        }
        if (board[95] === Hole) {
            nHole++;
        }
        if (board[96] === Ai) {
            nAi++;
        }
        if (board[96] === Human) {
            nHuman++;
        }
        if (board[96] === Hole) {
            nHole++;
        }
        if (board[97] === Ai) {
            nAi++;
        }
        if (board[97] === Human) {
            nHuman++;
        }
        if (board[97] === Hole) {
            nHole++;
        }
        if (board[98] === Ai) {
            nAi++;
        }
        if (board[98] === Human) {
            nHuman++;
        }
        if (board[98] === Hole) {
            nHole++;
        }
        if (board[99] === Ai) {
            nAi++;
        }
        if (board[99] === Human) {
            nHuman++;
        }
        if (board[99] === Hole) {
            nHole++;
        }
        if (board[100] === Ai) {
            nAi++;
        }
        if (board[100] === Human) {
            nHuman++;
        }
        if (board[100] === Hole) {
            nHole++;
        }
        if (board[101] === Ai) {
            nAi++;
        }
        if (board[101] === Human) {
            nHuman++;
        }
        if (board[101] === Hole) {
            nHole++;
        }
        if (board[106] === Ai) {
            nAi++;
        }
        if (board[106] === Human) {
            nHuman++;
        }
        if (board[106] === Hole) {
            nHole++;
        }
        if (board[107] === Ai) {
            nAi++;
        }
        if (board[107] === Human) {
            nHuman++;
        }
        if (board[107] === Hole) {
            nHole++;
        }
        if (board[108] === Ai) {
            nAi++;
        }
        if (board[108] === Human) {
            nHuman++;
        }
        if (board[108] === Hole) {
            nHole++;
        }
        if (board[109] === Ai) {
            nAi++;
        }
        if (board[109] === Human) {
            nHuman++;
        }
        if (board[109] === Hole) {
            nHole++;
        }
        if (board[110] === Ai) {
            nAi++;
        }
        if (board[110] === Human) {
            nHuman++;
        }
        if (board[110] === Hole) {
            nHole++;
        }
        if (board[111] === Ai) {
            nAi++;
        }
        if (board[111] === Human) {
            nHuman++;
        }
        if (board[111] === Hole) {
            nHole++;
        }
        if (board[112] === Ai) {
            nAi++;
        }
        if (board[112] === Human) {
            nHuman++;
        }
        if (board[112] === Hole) {
            nHole++;
        }
        if (board[113] === Ai) {
            nAi++;
        }
        if (board[113] === Human) {
            nHuman++;
        }
        if (board[113] === Hole) {
            nHole++;
        }

        return [nAi, nHuman, nHole];
    }

    // Peut encore être améliorée en réduisant les accès au tableau
    function setScores(){

        var scores = getScores(board);

        $('#score-ai > .score').text(scores[0]);
        $('#score-human > .score').text(scores[1]);
    }

    function togglePossibleMoves(){

        var $alpha = $(this);
        var $alphaContainer = $alpha.data('Parent');
        var alphaId = $alphaContainer.data('Id');

        if(board[alphaId] === Human){

            $alpha.toggleClass(function(e,classes,showMoves){

                // Callback when clicking moving placeholder
                // Elle doit rediriger vers une fonction commune aux deux joueurs.
                // D'où la nécessite d'être transitoire.
                var redirectToApplyMove = function(evt){
                    var container = $(this).parent('div');
                    var betaId = container.data('Id') || null;
                    var isJump = evt.data.jump;

                    if(betaId !== null){
                        if(board[betaId] === Empty){
                            // Lock board
                            stop(Human);

                            // Save move
                            var oldBoard = getCopyBoard(board);
                            HumanLastMove = betaId;
                            board = setMove(board, Human, [alphaId, betaId, isJump]);

                            // Get visual feedback
                            visualMove(alphaId, betaId, isJump, Human, oldBoard);
                        }
                    }
                };

                // Get possible clone & jump moves
                var $clones = $('#board > div:data(Id)').filter(function(){

                    var thisId = $(this).data('Id');

                    return (
                    (thisId === (alphaId - 13) && board[alphaId - 13] === 0) ||
                    (thisId === (alphaId - 12) && board[alphaId - 12] === 0) ||
                    (thisId === (alphaId - 11) && board[alphaId - 11] === 0) ||
                    (thisId === (alphaId - 1) && board[alphaId - 1] === 0) ||
                    (thisId === (alphaId + 1) && board[alphaId + 1] === 0) ||
                    (thisId === (alphaId + 11) && board[alphaId + 11] === 0) ||
                    (thisId === (alphaId + 12) && board[alphaId + 12] === 0) ||
                    (thisId === (alphaId + 13) && board[alphaId + 13] === 0));

                });
                var $jumps = $('#board > div:data(Id)').filter(function(){

                    var thisId = $(this).data('Id');

                    return (
                    (thisId === (alphaId - 24) && board[alphaId - 24] === 0) ||
                    (thisId === (alphaId - 2) && board[alphaId - 2] === 0) ||
                    (thisId === (alphaId + 2) && board[alphaId + 2] === 0) ||
                    (thisId === (alphaId + 24) && board[alphaId + 24] === 0));

                });

                if(showMoves){

                    // First, hide visible placeholders
                    $('#board div.clicked').trigger('click');

                    // Then add eventlisteners
                    $clones.html(ClonePlaceholder);
                    $clones.find('> div.cplaceholder').one('click', {jump : 0}, redirectToApplyMove);
                    $jumps.html(JumpPlaceholder);
                    $jumps.find('> div.jplaceholder').one('click', {jump : 1}, redirectToApplyMove);
                }
                else {
                    $jumps.find('>div').off('click', redirectToApplyMove);
                    $jumps.empty();
                    $clones.find('>div').off('click', redirectToApplyMove);
                    $clones.empty();
                }

                return 'clicked';
            }, !$alpha.hasClass("clicked"));

        }
    }

    function visualCatch(to, player, board){

        var opponent = player * -1;

        var toCatch = [];

        if(board[to-13] === opponent) toCatch.push(to-13);
        if(board[to-12] === opponent) toCatch.push(to-12);
        if(board[to-11] === opponent) toCatch.push(to-11);
        if(board[to-1] === opponent) toCatch.push(to-1);
        if(board[to+1] === opponent) toCatch.push(to+1);
        if(board[to+11] === opponent) toCatch.push(to+11);
        if(board[to+12] === opponent) toCatch.push(to+12);
        if(board[to+13] === opponent) toCatch.push(to+13);

        // Effectuer la transition
        // Si rien à capturer, continuer.
        if(toCatch.length === 0){
            next(opponent);
        }

        // Sinon, capturer puis changer de tour
        else {

            var completed = 0;
            var $opponentPawnContainers = $('#board > div:data(Id)').filter(function(){
                return toCatch.indexOf( $(this).data('Id') ) > -1;
            });

            // Callback
            var increaseDecrease = function(){
                $(this).removeClass( opponent == Human ? 'human' : 'ai' );
                $(this).switchClass('decrease', (player == Ai ? 'ai' : 'human'), 250, 'swing', function(){
                    completed++;

                    if(completed === toCatch.length){
                        // Next !
                        next(opponent);
                    }
                });
            };

            // Transition
            $opponentPawnContainers.each(function(){
                $(this).find('> div.pion').switchClass('', 'decrease', 250, 'swing', increaseDecrease);
            });

        }
    }

    function visualMove(from, to, isJump, player, board){

        // This is ONLY for visual feedback.
        // Board is reloaded after calling this, through next()

        // Récupérer Alpha et Beta
        var $containerAlpha, $containerBeta, $alpha;
        $('#board > div:data(Id)').each(function(){
            if($(this).data('Id') === from) $containerAlpha = $(this);
            if($(this).data('Id') === to) $containerBeta = $(this);
        });

        if($containerAlpha && $containerBeta){
            if( ($containerAlpha.length + $containerBeta.length) === 2 ){

                $alpha = $containerAlpha.find('div.pion');
                $placeholder = $(PlaceHolder);
                $containerBeta.html($placeholder);

                // Sauter
                if(isJump === 1){
                    $alpha.addClass('absolute');
                    $alpha.animate($placeholder.position(), 1000, 'easeInOutElastic', function(){
                        $placeholder.replaceWith($alpha).remove();
                        $alpha.removeClass('absolute').removeAttr('style');
                        visualCatch(to, player, board);
                    });
                }

                // Cloner
                else {
                    var $cloneAlpha = $alpha.clone(true);
                    $cloneAlpha.addClass('absolute');
                    $alpha.after($cloneAlpha);
                    $cloneAlpha.animate($placeholder.position(), 250, 'swing', function(){
                        $(this).removeClass('absolute').removeAttr('style');
                        $placeholder.replaceWith($cloneAlpha).remove();
                        visualCatch(to, player, board);
                    });
                }


            }
        }
    }

    function negaMax(board, depth, player, alpha, beta, opponentLastMoveId, lastMoveId){

        // Mouvements possibles pour player
        var possibleMoves = getPossibleMoves(board, player);

        // Initialisation à la profondeur 0
        if(depth === 0){
            bestMoves = [];
        }

        // Si feuilles finales, fonction d'évaluation
        if(depth === 3 || possibleMoves.length === 0) {


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

        for(var i = possibleMoves.length - 1; i > 0; i--){

            var move = possibleMoves[i];

            //
            if(depth === 0){
                opponentLastMoveId = HumanLastMove;
            }
            else {
                opponentLastMoveId = lastMoveId;
            }

            var copiedBoard = getCopyBoard(board);
            copiedBoard = setMove(copiedBoard, player, move);
            var x = -(negaMax(copiedBoard, depth+1, player * -1, -beta, -alpha, opponentLastMoveId, move[1]));

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
            if(alpha >= beta) {
                return move;
            }
        }

        if(depth === 0){
            return bestMoves[Math.floor(Math.random() * bestMoves.length)];
        }

        return max;
    }

    function play(player){

        // Au tour de l'IA
        if(player == Ai){

            console.time('E');
            var aiMove = negaMax(board, 0, Ai, -150, 150);
            console.timeEnd('E');

            console.log("Move made : ", aiMove);

            if(typeof aiMove === 'object'){

                // Save move
                var oldBoard = getCopyBoard(board);
                board = setMove(board, Ai, aiMove);

                // Get visual feedback
                visualMove(aiMove[0], aiMove[1], aiMove[2], Ai, oldBoard);
            }
            else {
                console.log('Fin de la partie');
            }
        }

        // Au tour de l'humain
        else {

            // Activer ses pièces
            var $humansPawns = $('#board > div > div.pion.human').addClass('clickable');
            $humansPawns.on('click', togglePossibleMoves);
        }

    }

    function stop(player){

        // Humain ne peut plus jouer
        if(player == Human){

            // Cacher les placeholders s'il y en a
            $('#board div.clicked').trigger('click');

            // On n'écoute plus les évènements
            var $humansPawns = $('#board > div > div.pion.human').removeClass('clickable');
            $humansPawns.off('click', togglePossibleMoves);
        }

    }

    function next(player){

        // First, rebuild board
        $('#board').empty();
        buildBoard();
        setScores();

        // Then, the player must play !
        // Petit timeout d'un 0,5 seconde pour éviter que l'IA ne soit trop rapide
        setTimeout(function(){
            play(player);
        }, 500);
    }

    function start(firstPlayer){

        // First : building board
        buildBoard();
        setScores();

        // Let's move !
        play(firstPlayer);

    }

    // Start playing !

    start(Human);




