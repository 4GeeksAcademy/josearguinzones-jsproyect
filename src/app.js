// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload =  function imprimir() {
//   //write your code here
  function imprimir() {
  
  
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
     
       const random1 = Math.floor(Math.random() * who.length);
       const random2= Math.floor(Math.random() * action.length);
       const random3= Math.floor(Math.random() * what.length);
       const random4= Math.floor(Math.random() * when.length);
   
   
   console.log(who[random1]+" "+action[random2]+" "+what[random3]+" "+when[random4]);
   
   }
   let resultado=String;
   resultado=imprimir();




