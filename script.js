import {usersData} from './users.js';

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
document.getElementById("bio-output").style.display = "block";
document.getElementById("bio-output").innerHTML = `Hello i am ${name}
I work as a ${role}`;
    
}


function get_list(){
    let fruit_list = document.querySelectorAll('input[name="fruits"]:checked');
    document.getElementsByClassName("list-form")[0].style.display = "none";
    const output = document.getElementById("fruit-output");
    output.style.display = "block";
    output.innerHTML = `The fruit list are as follows:
[`;
    fruit_list.forEach((element)=>{
        output.innerHTML +=`${element.value}, `;
    });
    
   output.innerHTML += `]
`;  
  console.log(fruit_list.length);
   let [second,last] = fruit_list;
    
   output.innerHTML += `first : ${second.value}
   second : ${last.value}`;
   
}

const usersList = document.getElementById("users");

usersData.forEach((element,index)=>{
    usersList.innerHTML += "<li>"+JSON.stringify(element)+"</li>";
}
);

const usersMailSending = document.getElementById("users-mail-sending");

usersData.forEach((element,index)=>{
    let {name,email} = element;
    usersMailSending.innerHTML += `<li>Sending Mail to ${name} in the email address of ${email} <li>`;
}
);

const usersage = document.getElementById("users-age");

usersData.forEach((element,index)=>{
    let {name,age} = element;
    usersage.innerHTML += `<li>The user ${name} is ${age} years old <li>`;
}
);









