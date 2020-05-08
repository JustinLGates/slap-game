let player = {
  name: "player",
  canAttack: true,
  health: 100,
  dammage: 5,
  multiplier: 1,
  weapon: {},
  inv: [],
  img:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScbpJNXKc_enYjbZk_PCIwr7U_NPpkWBzvTOibSk5euaB59Uld&usqp=CAU",
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
  img:
    "https://toppng.com/uploads/preview/vector-branches-stickman-stick-figure-throwing-a-ball-11563072514wm2gj5heer.png",
};

function drawCharacters() {
  let template = " ";
  template += `
    <h3>${player.name}</h3>
    <img height="250px" src="${player.img}" alt="link broken">
    `;
  document.getElementById("player").innerHTML = template;

  template = " ";

  template += `
    <h3>${enemy.name}</h3>
    <img height="250px" src="${enemy.img}" alt="link broken">
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
    drawEnemyHealthBar();
    enemyAttack();
  }
}
function kick() {
  if (canAttack()) {
    Math.random() * 10 > 5 ? dammage(player.dammage * 2) : dammage(4);
    drawEnemyHealthBar();

    enemyAttack();
  }
}

function eatTaco() {
  for (let i = 0; i < player.inv.length; i++) {
    let item = player.inv[i];
    if (item === taco) {
      let template = "";
      template += `<h1>Taco Power!!!</h1>`;
      document.getElementById("taco-power-up").innerHTML = template;
      player.inv[i] = {};
      player.dammage = player.dammage * 2;
      setTimeout(() => {
        player.dammage = player.dammage / 2;
        template = `<h1></h1>`;
        document.getElementById("taco-power-up").innerHTML = template;
      }, 5000);
      break;
    }
  }
  console.log("no tacos to eat");
}

function theCheeseburgerOfHealing() {
  for (let i = 0; i < player.inv.length; i++) {
    let item = player.inv[i];
    if (item === cheeseBurger) {
      healPlayer(30);
      player.inv[i] = {};
      drawHealthBar();
      break;
    }
  }
  console.log("no burgers to eat");
}
function healPlayer(amt) {
  player.health += amt;
}
function dammage(amount, character = enemy) {
  character.health -= amount;
  console.log(character.name + character.health);
}
function drawHealthBar() {
  let template = `<div class="progress">
  <div class="progress-bar" role="progressbar"style="width: ${player.health}%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;
  document.getElementById("health-bar-player").innerHTML = template;
}
function drawEnemyHealthBar() {
  let template = `<div class="progress">
  <div class="progress-bar" role="progressbar"style="width: ${enemy.health}%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;
  document.getElementById("health-bar-enemy").innerHTML = template;
}
setInterval(() => {
  player.inv.push(cheeseBurger);
  player.inv.push(taco);
  console.log(player.inv);
}, 10000);

drawCharacters();
drawHealthBar();
drawEnemyHealthBar();

function enemyAttack() {
  setTimeout(() => {
    player.health -= 9;
    console.log(player.canAttack);
    player.canAttack = true;
    drawHealthBar();
    console.log(player.canAttack);
  }, 900);
}
