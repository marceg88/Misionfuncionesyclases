/*
Agregar un método palindrome a los strings de JavaScript que retorne true si el string es un 
palíndrome, o false de lo contrario.
*/

String.prototype.palindrome = function(string) {
        string = this.replace(/\s/g, "") //Elimina espacios
        let stringBack = string.split("").reverse().join("") 
        return string === stringBack
};

console.log("anita lava la tina".palindrome())


