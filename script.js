let nationality="pakistani"
let height=5.5;
let age = 28;
let education="master"

// if(nationality === "pakistani" && ( height >= 5.5 
// && (age >= 18 && age <=22) 
// || (age >=18 && age <=28 && education === "master"  )
// ) 
// )
// {
//     console.log("invite for interview");
// }
// else{
// console.log(" not eligible");
// }

///////////////////////////////////

if(nationality === "pakistani" && height >=5.5){

   if((age >= 18 && age <=22) || (age >=18 && age <=28 && education === "master"  )){

console.log("invite for interview");

}
else{
    console.log("not eligible");
}
}
else{

    console.log("not eligible");
}
////////////////////////////////////////////////////////////////////////








