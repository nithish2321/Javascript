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

export function gen_bio(){

const bio_form = document.getElementById("bio-form");
const name = document.getElementById("name").value;
const role = document.getElementById("role").value;

bio_form.style.display = "none";

//const bio = "Hello i am "+name+"\nI work as a "+role;
document.getElementById("bio-output").style.display = "block";
document.getElementById("bio-output").innerHTML = `Hello i am ${name}
I work as a ${role}`;
    
}


export function get_list(){
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


//Spred and rest operation operator[...]
//Please visit console to explore this 

//Spread
const baseTools = ["Git","Phoenix"];

const fullStack = ["React","Spring Boot",...baseTools];

console.log(baseTools);
console.log(fullStack);


const userDetails = {id: 101};
const completeProfile = {...userDetails, status:"Active"};

console.log(userDetails);
console.log(completeProfile);

//Rest 

function sumAll(...numbers){
    let sum = 0; 
    for(let n of numbers){
        console.log(n);
        sum += n;
    }
    
    return sum;
    
}

console.log(sumAll(90,10,40));
console.log(sumAll(90));
console.log(sumAll(90,100,70,60));



document.getElementById("validate-form").addEventListener(
"submit", function validate(event){
    const name = document.getElementById("form-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let error = "";
    if(name.length < 3){
       error  += "<li class = 'error-msg'>NAME SHOULD HAVE MORE THAN THREE CHARACTERS</li>";
    }
    if(!email.includes("@")){
        error += "<li class= 'error-msg'>Email should contains @ </li>";
    }
    if(password.length < 8){
         error  += "<li class = 'error-msg'>password SHOULD HAVE MORE THAN 8 CHARACTERS</li>";
   
    }
    if(error !== ""){
        event.preventDefault();
        document.getElementById("error").innerHTML = error;
    }else{
        document.getElementById("error").style.color = "greenyellow";
        document.getElementById("error").innerHTML = "Form submitted successfully";
    }

}
);




window.gen_bio = gen_bio;
window.get_list = get_list;
window.validate = validate;









