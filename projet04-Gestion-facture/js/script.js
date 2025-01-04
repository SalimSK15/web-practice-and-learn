//  pratique les class et try catch throw
// function gestionErreur(nb1, nb2, op){
//     const operations = ["-","+","*","/"];
//     if(typeof nb1 !==("number") || typeof nb2 !== ("number")){
//         throw new Error("Veuillez entree des nombres !");
//     }else if(!operations.includes(op)){
//             throw new Error(`les operation permisent : " + - / * "`);
//         }else if(op === "/" && nb2 === 0){
//                 throw new Error("divistion interdite sur 0");
//             }
// }
// function calculer(nb1, nb2, op){
    
//     let resulta;
//     switch (op) {
//         case "/": resulta = nb1 / nb2; break;
//         case "*": resulta = nb1 * nb2; break;
//         case "+": resulta = nb1 + nb2; break;
//         case "-": resulta = nb1 - nb2; break;
//     }
//     return resulta;
// }
// try{
//     const val1 = parseInt(prompt("Veuillez saisir la 1er nombre "),10);
//     const val2 = parseInt(prompt("Veuillez saisir le 2eme nombre "),10);
//     const operation = prompt("veuillez saisir une operation : * / + -");

//     gestionErreur(val1, val2, operation);
//     calculer(val1, val2, operation);
//     console.log("Operation : "+val1+" "+operation+" "+val2+" = "+calculer(val1, val2, operation));
// }catch(e){
//     console.error(e);
// }

// class Calculator{
//     operations = {
//         "+": (a, b) => a + b,"-": (a, b) => a - b,"*": (a, b) => a * b,"/": (a, b) => a / b
//     }
//     get operationsPermises(){
//         return Object.keys(this.operations);
//     }
//     gestionErreur(nb1, nb2, operateur){
//         if(Number.isNaN(nb1) || Number.isNaN(nb2)) throw new Error("Ce nest pas une valeur numerique !")
//         if(!this.operations.hasOwnProperty (operateur)) throw new Error("Operatios Permises : "+this.operationsPermises);
//         if(operateur === '/' && nb2 === 0) throw new Error("Division par '0' impossible");
//     }
//     calculeFormat (val1, val2, op){
//         this.gestionErreur(val1, val2, op);
//         const resulta = this.operations[op](val1, val2);
//         return `${val1} ${op} ${val2} = ${resulta}`;
//     }
// }
// try{
//     const operation01 = new Calculator();
//     const val1 = parseFloat(prompt("Saisir la 1er valeur : "));
//     const val2 = parseFloat(prompt("Saisir la 2eme valeur : "));
//     const operation = (prompt("choisir une operation : "+operation01.operationsPermises));
//     const R = (operation01.calculeFormat(val1, val2, operation));
//     console.log(R);
//     alert(R);
// }catch (err){
//     console.error(err.message);
// }