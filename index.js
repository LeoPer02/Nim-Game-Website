

//var P = new Array();
var IsAvailable = new Array();
var rows = 4;
var opponent = "AI";
var difficulty = "Easy";
var ConstTurn;
var turn = 1;
var gtype = "Default";
var lay = "Horizontal"
var FirstPlay = true;
var AllowedRow;
var lines4 = [1, 3, 5, 7];
var lines5 = [1, 3, 5, 7, 9];
var lines6 = [1, 3, 5, 7, 9, 11];
var lines7 = [1, 3, 5, 7, 9, 11, 13];

function Initialize() {
    if (rows === 4) {
        lines = lines4;
    } else if (rows === 5) {
        lines = lines5;
    } else if (rows === 6) {
        lines = lines6;
    } else if (rows === 7) {
        lines = lines7;
    }

    for (var i = 0; i < rows; i++) {
        IsAvailable[i] = new Array(lines[i]);
    }

    var draw_element = ''
    for (var i = 0; i < rows; i++) {
        draw_element = draw_element + '<table><tr>'
        for (var j = 0; j < lines[i]; j++) {
            draw_element = draw_element + '<td><div class=el_fig id=el_figId' + i + 'N' + j + ' data-Rows=' + i + ' data-Cols=' + j + ' ></div></td>'
            IsAvailable[i][j] = true;
        }
        draw_element = draw_element + '</tr></table>'
    }
    $('#draw_area').html(draw_element);
    $('.el_fig').css({ 'height': Math.floor(480 / rows - 15) + 'px' });
    $('.el_fig').click(function () { remove($(this)) });
    if (lay == 'Vertical') {
        $('.game_window table').css({ 'margin': 'auto' });
        $('#draw_area').css({ 'transform': 'rotate(0deg)' });
    } else {
        $('#draw_area').css({ 'transform': 'rotate(270deg)' });
    }
}


function closeDropDown(s) {
    id = "dropdown-content" + s;
    var dropdownContent = document.getElementById(id);
    dropdownContent.style.display = "none";
}

function openDropDown(s) {
    id = "dropdown-content" + s;
    var dropdownContent = document.getElementById(id);
    dropdownContent.style.display = "block";
}

function change_table(n) {
    rows = n;
    document.getElementById("dropdownbtn_text1").innerHTML = "Number of Lines - " + n;
    var dropdownContent = document.getElementById("dropdown-content1");
    dropdownContent.style.display = "none";
}

function define_opponent(n) {
    opponent = n;
    document.getElementById("dropdownbtn_text2").innerHTML = "Opponent - " + n;
    var dropdownContent = document.getElementById("dropdown-content2");
    dropdownContent.style.display = "none";
}

function define_order(n) {
    if (n == "First") ConstTurn = 1;
    else ConstTurn = 2;
    turn = ConstTurn;
    document.getElementById("dropdownbtn_text3").innerHTML = "Order - " + n;
    var dropdownContent = document.getElementById("dropdown-content3");
    dropdownContent.style.display = "none";
}

function define_difficulty(n) {
    difficulty = n;
    document.getElementById("dropdownbtn_text4").innerHTML = "Difficulty - " + n;
    var dropdownContent = document.getElementById("dropdown-content4");
    dropdownContent.style.display = "none";
}

function define_gametype(n) {
    gametype = n;
    document.getElementById("dropdownbtn_text5").innerHTML = "Gametype - " + n;
    var dropdownContent = document.getElementById("dropdown-content5");
    dropdownContent.style.display = "none";
}

function define_layout(n) {
    lay = n;
    document.getElementById("dropdownbtn_text6").innerHTML = "Layout - " + n;
    var dropdownContent = document.getElementById("dropdown-content6");
    dropdownContent.style.display = "none";
}

function startgame() {
    lines4 = [1, 3, 5, 7];
    lines5 = [1, 3, 5, 7, 9];
    lines6 = [1, 3, 5, 7, 9, 11];
    lines7 = [1, 3, 5, 7, 9, 11, 13];
    turn = ConstTurn;
    FirstPlay = true;
    console.log(turn);
    if (turn == 2) {
        play('Default', numberRows());
    }
    turn = 1;
    Initialize();
}

function showform() {
    var form = document.getElementById("login_form");
    form.style.display = "block";
    form.style.animation = "fade-in 0.4s forwards";
}

async function closeform() {
    var form = document.getElementById("login_form");
    form.style.animation = "fade-out 0.2s forwards";
    await new Promise(r => setTimeout(r, 200));
    form.style.display = "none";
}



async function remove(element) {
    ElRow = element.attr('data-Rows');
    var el = document.getElementById(element.attr('id'));
    if (rows == 4) {
        if (FirstPlay) {
            el.style.animation = "fade-out 0.2s forwards";
            await new Promise(r => setTimeout(r, 200));
            AllowedRow = ElRow;
            lines4[ElRow] -= 1;
            Initialize();
            FirstPlay = false;
        } else {
            if (AllowedRow == ElRow) {
                el.style.animation = "fade-out 0.2s forwards";
                await new Promise(r => setTimeout(r, 200));
                lines4[ElRow] -= 1;
                Initialize();
            }
        }
    } else if (rows == 5) {
        if (FirstPlay) {
            el.style.animation = "fade-out 0.2s forwards";
            await new Promise(r => setTimeout(r, 200));
            AllowedRow = ElRow;
            lines5[ElRow] -= 1;
            Initialize();
            FirstPlay = false;
        } else {
            if (AllowedRow == ElRow) {
                el.style.animation = "fade-out 0.2s forwards";
                await new Promise(r => setTimeout(r, 200));
                lines5[ElRow] -= 1;
                Initialize();
            }
        }
    } else if (rows == 6) {
        if (FirstPlay) {
            el.style.animation = "fade-out 0.2s forwards";
            await new Promise(r => setTimeout(r, 200));
            AllowedRow = ElRow;
            lines6[ElRow] -= 1;
            Initialize();
            FirstPlay = false;
        } else {
            if (AllowedRow == ElRow) {
                el.style.animation = "fade-out 0.2s forwards";
                await new Promise(r => setTimeout(r, 200));
                lines6[ElRow] -= 1;
                Initialize();
            }
        }
    } else if (rows == 7) {
        if (FirstPlay) {
            el.style.animation = "fade-out 0.2s forwards";
            await new Promise(r => setTimeout(r, 200));
            AllowedRow = ElRow;
            lines7[ElRow] -= 1;
            Initialize();
            FirstPlay = false;
        } else {
            if (AllowedRow == ElRow) {
                el.style.animation = "fade-out 0.2s forwards";
                await new Promise(r => setTimeout(r, 200));
                lines7[ElRow] -= 1;
                Initialize();
            }
        }
    } else {
        console.log("Number of Lines not allowed")
    }
}

async function endturn() {
    if (winner('Default', numberRows())) {
        if (turn == 1) turn = 2;
        else turn = 1;
        showWinner();
        return;
    }
    if (!FirstPlay) {
        if (turn == 1) turn = 2;
        else turn = 1;
        if (opponent == "AI") {
            //if Player vs AI
            play('Default', numberRows());
            if (winner('Default', numberRows())) {
                showWinner();
            }
            Initialize();
        }
        numberRows().sort(function (a, b) { return a - b });
        await new Promise(r => setTimeout(r, 450));
        Initialize();
        FirstPlay = true;
    }
}

function numberRows() {
    if (rows == 4) return lines4;
    if (rows == 5) return lines5;
    if (rows == 6) return lines6;
    if (rows == 7) return lines7;
}

function showWinner() {
    var form = document.getElementById("winnerpop");
    var printwinner = '';
    if (turn == 1) {
        printwinner = "You Have Won!";
    } else {
        if (opponent == 'AI') {
            printwinner = "The AI has Won :(";
        } else {
            printwinner = "Your Opponent Won :(";
        }
    }
    document.getElementById("winnerName").innerHTML = printwinner;
    form.style.display = "block";
    form.style.animation = "fade-in 0.4s forwards";
}

async function closewinner() {
    var form = document.getElementById("winnerpop");
    form.style.animation = "fade-out 0.2s forwards";
    await new Promise(r => setTimeout(r, 200));
    form.style.display = "none";
}

//Instructions
//Nim is a simple puzzle game that can be played either against AI or other players.
//The rules are simple: in your turn, you can take as many sticks as you desire, but from only one column at the time.

//Configuration Instructions:
//Number of Lines (temos que mudar este nome porque o default é number of columns): defines the number of lines in the board.
//Opponent: defines if you're playing against the Artificial Intelligence or a fellow player.
//Order: defines who plays first (first if it's you, second if it's the opponent)
//Difficulty: defines the difficulty of the AI. Easy: AI plays randomly. Hard: AI plays perfectly using the NimSum calculation.
//Game Type: There are two game types: Standard: wins the player that takes the last stick of the board. A La Misère: loses the player that takes the last stick of the board.
//Layout: defines if the board is horizontal ou vertical. Note that, if the board is vertical, you take from lines and not columns.
