var firstName = "Felipe";
var secondName = "Manoel";
var x = true;
var y = 235;
function grettings(name, anotherName) {
    return console.log("Hello ".concat(name, " ").concat(anotherName));
}
;
grettings(firstName, secondName);
//grettings(x, y) Essa linha não deixa o tsc compilar o código, a função esta esperando uma string como parâmetro
