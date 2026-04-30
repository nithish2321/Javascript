// var let const

var star = document.getElementsByClassName("star");



var n = 10;

for(var i = 0 ; i < n ; i++){
    star[0].innerHTML += "<p>";
    for(var j = 0 ; j < n; j++){
       star[0].innerHTML += "*";
    }
    star[0].innerHTML += "</p><br>";
}

