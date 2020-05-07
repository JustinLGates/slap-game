let player = {
  name: "player",
  canAttack: true,
  health: 100,
  dammage: 5,
  multiplier: 1,
  weapon: {},
  inv: [],
  img: "//placehold.it/150x250",
};
let taco = {
  power: 2,
};

let cheeseBurger = {
  healAmt: 30,
};

let enemy = {
  name: "enemy",
  health: 100,
  weapon: {},
  inv: [],
  img: "//placehold.it/150x350",
};

function drawCharacters() {
  let template = " ";
  template += `
    <h3>${player.name}</h3>
    <img src="${player.img}" alt="link broken">
    `;
  document.getElementById("player").innerHTML = template;

  template = " ";

  template += `
    <h3>${enemy.name}</h3>
    <img src="${enemy.img}" alt="link broken">
    `;
  document.getElementById("enemy").innerHTML = template;
}

function canAttack() {
  if (player.canAttack) {
    player.canAttack = false;
    return true;
  }
  return false;
}

function slap() {
  if (canAttack()) {
    dammage(player.dammage);
  }
}
function kick() {
  if (canAttack()) {
    Math.random() * 10 > 5 ? dammage(player.dammage * 2) : dammage(4);
  }
}

function eatTaco() {
  player.dammage = player.dammage * 2;
  setTimeout(() => {
    player.dammage = player.dammage / 2;
  }, 5000);
}

function theCheesburgerOfHealing() {
  player.health += 30;
}

function dammage(amount, character = enemy) {
  character.health -= amount;
  console.log(character.name + character.health);
}

setInterval(() => {
  player.inv.push(cheeseBurger);
  player.inv.push(taco);
}, 10000);

drawCharacters();

// let choices=[
// {name:"rock",beats:"sissors"},
// {name:"paper",beats:"sissors"},
// ]

// for (let i = 1; i < choices.length; i++) {
//   const choice = choices[i];
//   // += `<button onclick="play('${choice.name}')>${choice.name}</button>`

// }

// function play(c){
// if(c==="rock"{})
// }
