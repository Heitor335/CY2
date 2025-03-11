let velocidade =10;

if ( velocidade > 70) {
    console.log("voce foi multado!");
}
else {
    console.log("parabens! continue assim")
}

//condicional animadas

let hora = new Date().getHours();
console.log(hora);

if (hora<12) {
    console.log("bom dia ")
}

else if (hora<18) {
    console.log("boa tarde");
}

else {
    console.log("boa noite");
}