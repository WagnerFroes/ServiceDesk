var userclossclass = document.getElementById('usercloss');
var usuarioinformclass = document.getElementById('Usuarioinform');

function openuser() {
    document.getElementById("userside").style.height = "60%";
  	 userclossclass.style.display = "block";
  	 usuarioinformclass.style.display = "block";
}

function closeuser() {
    document.getElementById("userside").style.height = "5%";
    userclossclass.style.display = "none";
    usuarioinformclass.style.display = "none";
 
}
window.onclick = function(event) {
		    if (event.target == userclossclass) {
		        document.getElementById("userside").style.height = "5%";
		        userclossclass.style.display = "none";
		        usuarioinformclass.style.display = "none";
		    }
		}