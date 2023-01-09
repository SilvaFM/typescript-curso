const firstName = "Felipe";
const secondName = "Manoel";
const x = true;
const y = 235;

function grettings(name: string, anotherName: string) {
    return console.log(`Hello ${name} ${anotherName}`)
};

grettings(firstName, secondName);
//grettings(x, y) Essa linha não deixa o tsc compilar o código, a função esta esperando uma string como parâmetro