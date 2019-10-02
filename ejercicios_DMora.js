var texto = " \
La historia es una comedia romántica que da comienzo cuando Keiki Kiryu, un estudiante de \
preparatoria corriente que nunca ha tenido novia, recibe una carta de amor inesperada. La \
carta no tiene remitente, pero sí incluye unas braguitas blancas. Ahora Keiki tendrá que  \
investigar para encontrar quién es la Cenicienta que le dejó las bragas de recuerdo, pero no \
tardará en descubrir que todas las posibles candidatas son unas pervertidas interesadas en \
hacerlo partícipe de sus perversiones Mas oscuras. Mth \
";

let mensaje1 = "Arifureta Shokugyou de Sekai Saikyou";
let newMensaje1 = mensaje1.match(/[A-Z][a-z]{7,14}/g);
console.log(newMensaje1);


var expresion2 = /[a-z]+[^aeiou ]\b/gmi;
result = texto.match(expresion2);
console.log(result);

var expresion3 = /[M][^aeiou][a-z]+/g
result = texto.match(expresion3);
console.log(result);

let texto4 = "'bueno' es lo que soy dice mi 'Mama' pero para 'jugar' jejje"
let expresion4 = texto4.match(/['][a-z|A-Z]+[']/g);
console.log(expresion4);

let texto5 = "La ip de mi casa es 192.168.10.10 y la del vecino es 192.168.20.11"
let expresion5 = texto5.match(/(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})/g)
console.log(expresion5);

var horas = "\
12:30:00 \
13:60:61 \
01:11:30\
";

var expresion6 = /([0-12]{1,2})[:]([0-59]{1,2})[:]([0-59]{1,2})\b/g;
result = horas.match(expresion6)
console.log(result);

var expresion7 = /(\d{3})[-](\d{3})[-](\d{4})\b/g;

var telefono = "\
985-109-4107 \
1000-1000-1000 \
998-300-99\
998-300-0001\
";
result = telefono.match(expresion7)
console.log(result);

var expresion8 = /([a-z|0-9])+[@]([a-z|0-9])+[.]([a-z|0-9]{3})+\b/g;

var correos = "\
Dmora12@live.com \
loghorizon705@hotmail.com \
danielremenber@hotmail.com\
asdfghjk\
";
result = correos.match(expresion8)
console.log(result);

var link = "\
http//:www.animeboom.com \
http//:www.google.com \
aksbdjebifbenxud \
";
let newlink = link.match(/[http//:www.]+[a-z]+[.]+([a-z]{3})/g);
console.log(newlink);

var CodigoPostal = "El codigo postl de mi zona es: 97780"; //elimina un codigo postal
let newMCodigoPostal = CodigoPostal.match(/[0-9]{5}/g, "*");
console.log(newMCodigoPostal);