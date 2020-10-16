let sign = "X";
let tern = document.getElementById("player");

function printx(number) {
  let isko = document.getElementById("r" + number);
  if (isko.innerText == "") {
    isko.innerHTML = sign;
    winner();
    checksign();
    tern.innerHTML = sign + " Chance";

  }
}

function checksign() {
  if (sign == "X")
    sign = "O";
  else
    sign = "X";
}

function getbox(no) {
  return document.getElementById("r" + no).innerHTML;
}

function checkmove(a, b, c, m) {
  if (getbox(a) == m && getbox(b) == m && getbox(c) == m) {
    return true;
  }
  else return false;
}

function winner() {
  if (checkmove(1, 2, 3, sign) || checkmove(1, 4, 7, sign) || checkmove(2, 5, 8, sign) || checkmove(3, 6, 9, sign) || checkmove(4, 5, 6, sign) || checkmove(7, 8, 9, sign) || checkmove(1, 5, 9, sign) || checkmove(3, 5, 7, sign)) {
    player.innerHTML = "** " + sign + " IS WINNER **";
    player.style.color = "purple";
    throw "Game End";
  }
  else {
    if (getbox(1) != "" && getbox(2) != "" && getbox(3) != "" && getbox(4) != "" && getbox(5) != "" && getbox(6) != "" && getbox(7) != "" && getbox(8) != "" && getbox(9) != "") {
      player.innerHTML = "** ITS A TIE **";
      player.style.color = "purple";
      throw "Game End"
    }
  }
}

function Start() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("r" + i).innerHTML = "";
  }
  player.innerHTML = sign + " Chance ";
  player.style.color = "White";
}