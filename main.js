function cachorro(nome, cor, raça) {
  this.nome = "thor";
  this.cor = cor;
  this.raça = "rotweiller";
}

function rotweiller(nome, cor, raça) {
  cachorro.call(this, raça);
  this.nome = nome;
  this.cor = "preto";
}

function canecorso(nome, cor, raça) {
  cachorro.call(this, nome);
  this.cor = "cinza";
  this.raça = "canecorso";
}

const rotweillerGabriel = new rotweiller("ragnar");
const canecorsoDoPedro = new canecorso("");

console.log(canecorsoDoPedro);
console.log(rotweillerGabriel);
