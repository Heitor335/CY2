document.write("<h1>hello 2!</h1>");

let nome =prompt("qual e seu nome?");
document.write("<h1>bem-vindo, "  +nome+ "!</h1>");
document.write(`<h2>bem vindo ${nome}</h2>`);

let texto1 = prompt ("digite um numero:");
let texto2 = prompt ("digite outro numero:");

let n1 = Number(texto1);
let n2 = Number(texto2);

document.write(`A soma entre ${n1} e ${n2} e igual a ${n1+n2}`);