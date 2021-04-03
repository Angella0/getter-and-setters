var txt="";
 var person={fname:"carol", lname:"Doe", age:23};
 var x;
for(x in person){
      txt += person[x] + " ";
}
console.log(txt);

let animals=["cow","dog","rabit"];
let text="";
for(let x of animals){
      text += x + "<br>";
}
console.log(animals);