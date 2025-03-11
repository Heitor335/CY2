//criando uma lista de supermercado
listaSupermercado = ["ovo","farinha","leite"];
console.log(listaSupermercado);

listaNumero = [1,2,3,4,5,6];
console.log(listaNumero);

//2nd forma de criar uma lista:
let heroes = [];
heroes [2] = "homem aranha";
heroes [0] = "homem de ferro";
heroes [1] = "hulk";
console.log (heroes);
console.log (heroes[1]);
console.log ("meu heroi preferido");

let comp = heroes.length;
console.log (`a lista tem ${comp} herois.`);

//inserindo uma super heroina 
heroes.push("mulher maravilha")
heroes.push("super homem")
console.log (heroes);

//criando uma lista multidimencional
let jogoDavelha= [["x", "o","x",],["o","x", "o",]["x", "o","o"]];
console.log(jogoDavelha);

let listaSuperMercado = [["ovo",18],["farinha", 5],["leite", 4.5]];
console.log(`o preço do ovo e ${listaSuperMercado[0][1]}`);

let objetoSuperMercado = {"ovo":18, "farinha": 5, "leite": 4.5};
console.log(objetoSuperMercado.ovo);

let listacafe = ["cafe", 50]