let age = 31;

const eresMayor = (age) => {
     if(age >= 18){
         return "Pudes votar";
     }
     else{
        return "No pudes votar";
     }
}

console.log(eresMayor(age));