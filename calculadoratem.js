function temperatura() {
const temperatura = document.getElementById("num").value;
const resultado = (parseInt(temperatura)-32)*5/9 ;
document.getElementById("resultado").innerHTML = resultado;
sumando2 = resultado; 
}
