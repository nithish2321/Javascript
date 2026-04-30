// var let const

const num_rows = document.getElementById("num-rows");

num_rows.addEventListener('input',()=>{
    const star = document.getElementsByClassName("star");

    const n = parseInt(document.getElementById("num-rows").value);
    star[0].innerHTML = "";
    
    for(let i = 0 ; i < n ; i++){
    star[0].innerHTML += "<li style='margin:0;'>";
    for(var j = 0 ; j <= i; j++){
       star[0].innerHTML += "*";
    }
    star[0].innerHTML += "</li><br>";
}
    
  for(let i = 0; i < n ; i++){
      console.log("Nithish");
  }
        
});

//ExPLAINING CONSTANT

const i = 10;

//i = 9; we will not able assign the value like this

console.log(i);


//Learning Template literals

function gen_bio(){

const bio_form = document.getElementById("bio-form");
const name = document.getElementById("name").value;
const role = document.getElementById("role").value;

bio_form.style.display = "none";

//const bio = "Hello i am "+name+"\nI work as a "+role;
    
document.getElementById("bio-output").innerHTML = `Hello i am ${name}
I work as a ${role}`;
    
}






