function welcomemsg(){ 
  alert("Welcome to Neural Machine Translation System");
}
function translatenow(){
  
  let english=document.getElementById("input").value;
  document.getElementById("btn").textContent="Translating...";
  document.getElementById("output").value=english;

  setTimeout(function(){
    document.getElementById("btn").textContent="Translation Completed";
  }, 2000);
}
function cleartext() {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
    document.getElementById("count").textContent = "Characters:0";
    document.getElementById("btn").textContent = "Translate Now";
}
function countchar(){
  let text=document.getElementById("input").value;
  document.getElementById("count").textContent="Characters:"+text.length;
}


 
  



