let player = {
  name: "player",
  health: 100,
  weapon: {},
  inv: [],
  img: "//placehold.it/150x250"
}

let enemy = {
  name: "enemy",
  health: 100,
  weapon: {},
  inv: [],
  img: "//placehold.it/150x350"
}

function drawCharacters() {
  let template = ' '
  template += `
    <h3>${player.name}</h3>
    <img src="${player.img}" alt="link broken">
    `
  document.getElementById("player").innerHTML = template

  template = " "

  template += `
    <h3>${enemy.name}</h3>
    <img src="${enemy.img}" alt="link broken">
    `
  document.getElementById("enemy").innerHTML = template
}

function slap() {
  dammage(10)

}

function kick() {
  Math.random() * 10 > 5 ? dammage(20) : dammage(4)
}

function dammage(amount, character = enemy) {
  character.health -= amount
  console.log(character.name + character.health);

}

drawCharacters()

