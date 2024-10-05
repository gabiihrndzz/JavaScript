/*
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
*/
function testUnidad2_1(){
let nombre;
let nota;
nombre=prompt('introduzca su nombre: ','');
nota=prompt('introduzca su nota: ','');
if ( nota >=5){
    alert(nombre + ' ha aprobado con un '+nota);

}
else{
    alert(nombre + ' ha suspendido con un '+nota);
}
}

//Backup
/*let nota1, nota2, nota3;
nota1=prompt('introduzca su primera nota: ','');
nota2=prompt('introduzca su segunda nota: ','');
nota3=prompt('introduzca su tercera nota: ','');
nota1=parseInt(nota1);
nota2=parseInt(nota2);
nota3=parseInt(nota3);
let global;
global=(nota1+nota2+nota3)/3;
document.write(global);
if(global>=9){
    alert('Sobresaliente');
}
else{
    if(global>=7){
        alert('notable');
    }
    else{
        if(global>=5){
            alert('aprobado');
        }
        else{
            if(global<5){
                alert('suspenso');
            }
}
    }}

*/
function testUnidad2_1bck(){
    let nota1, nota2, nota3;
    nota1=prompt('introduzca su primera nota: ','');
    nota2=prompt('introduzca su segunda nota: ','');
    nota3=prompt('introduzca su tercera nota: ','');
    nota1=parseInt(nota1);
    nota2=parseInt(nota2);
    nota3=parseInt(nota3);
    let global;
    global=(nota1+nota2+nota3)/3;
    document.write('la media da: '+global);
    if(global>=9){
        alert('Sobresaliente');}
    else if(global>=7){
            alert('notable');}
    else if(global>=5){
            alert('aprobado');}
    else{
        alert('suspenso');}
    }

    function pruebaboolean (){
        let v = "cualquier cosa";
      /*  if (v && true)
            alert('verdadero');
        else
            alert('falso');*/
        alert(/*true*/false && "cualquier cosa");
    }

    function testUnidad2_2(){
        let valor;
        do{
            valor = prompt ('Ingrese un valor entre 0 y 999','');
            valor = parseInt(valor);

            if(valor<0 ||valor>999 || isNaN(valor)){
                document.write('El numero', valor, ' no esta en el rango elegido')
            }
            else if (valor<10){
                document.write('El valor ' +valor +' tiene: un digito');
            }
            else if(valor<100 ){
                document.write('El valor ' +valor +' tiene: 2 digitos');
            }
            else if(valor<1000 ){
                document.write('El valor ' +valor +' tiene: 3 digitos');
            }
            document.write('<br>');
        }while(valor >0 && valor<=999);

    }

    function viernes(){
        let f; 
        for(f= 1; f<=10; f++){
            document.write(f + " ");
        }
        document.write('<br>El valor de f es: ', f);
    }
