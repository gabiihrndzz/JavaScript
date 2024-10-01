const libs = ["React","Vue","Angular"];
document.write("<br/>")
document.write(`Este curso trata de ${libs[0]}`);
const l = libs.length;

//variable =condicion ? valorSiVerdadero :valorSiFalso;
let cuantitativo = l==1 ? "Singular" : "Plural";
    document.write("<br>");
    document.write(cuantitativo);

    document.write("<br>");

document.write(`
    ${l>1 ? `Estas ${l} bibliotecas` : "Esta biblioteca"}:
    ${libs.join(", ")}
`)