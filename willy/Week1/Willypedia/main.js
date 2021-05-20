window.postComment=function() {
var div = document.getElementById("comments");

div.innerHTML = div.innerHTML +"<br>"+ document.getElementById("comment").value;

}

