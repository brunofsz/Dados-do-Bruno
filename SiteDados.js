let total = 0;
function d() {
  let n = prompt("Numero de lados do dado:");
  let lado = Math.floor(Math.random() * n) + 1;
  document.getElementById("d").classList.add("rolar");
  setTimeout('document.getElementById("d").classList.remove("rolar")', 1000);
  document.getElementById("d").innerHTML = `<h1>${lado}</h1>`;
  total = total + lado;
  mostraTotal();
}
function d6() {
  let lado = Math.floor(Math.random() * 6) + 1;
  document.getElementById("d6").innerHTML = `<h1>${lado}</h1>`;
  document.getElementById("d6").classList.add("rolar");
  setTimeout('document.getElementById("d6").classList.remove("rolar")', 1000);

  total = total + lado;
  mostraTotal();
}
function d10() {
  let lado = Math.floor(Math.random() * 10) + 1;
  document.getElementById("d10").innerHTML = `<h1>${lado}</h1>`;
  document.getElementById("d10").classList.add("rolar");
  setTimeout('document.getElementById("d10").classList.remove("rolar")', 1000);

  total = total + lado;
  mostraTotal();
}
function d12() {
  let lado = Math.floor(Math.random() * 12) + 1;
  document.getElementById("d12").innerHTML = `<h1>${lado}</h1>`;
  document.getElementById("d12").classList.add("rolar");
  setTimeout('document.getElementById("d12").classList.remove("rolar")', 1000);

  total = total + lado;
  mostraTotal();
}
function d20() {
  let lado = Math.floor(Math.random() * 20) + 1;
  document.getElementById("d20").innerHTML = `<h1>${lado}</h1>`;
  document.getElementById("d20").classList.add("rolar");
  setTimeout('document.getElementById("d20").classList.remove("rolar")', 1000);

  total = total + lado;
  mostraTotal();
}

function d100() {
  let lado = Math.floor(Math.random() * 100) + 1;
  document.getElementById("d100").innerHTML = `<h1>${lado}</h1>`;
  document.getElementById("d100").classList.add("rolar");

  setTimeout('document.getElementById("d100").classList.remove("rolar")', 1000);

  total = total + lado;
  mostraTotal();
}
function mostraTotal() {
  document.getElementById("total").innerHTML = `
  <h1 class="h1">TOTAL: ${total}</h1>
  <input type="submit" value="zerar" onclick="resetaTotal()" />`;
}
function resetaTotal() {
  total = 0;
  mostraTotal();
}
