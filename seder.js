
//quand on clique sur le bouton "ajouter un dessert"
document.getElementById("bt").addEventListener("click",function (){
	const dess = prompt(" how mush de chest move");
	var dessertElt = document.createElement("li");
	dessertElt.textContent=dess;
	document.getElementById("des").appendChild(dessertElt);
});

//quand on clique sur un dessert de la liste
document.querySelector("ul").addEventListener("click",function(e){
	
	const part = prompt("How many muscles in the chest:");
	
	var dessertElt = document.createElement("p");
    dessertElt.innerHTML = part+" part(s) de <strong>"+ e.target.textContent +"</strong>";
	document.getElementById("choix").appendChild(dessertElt);
	e.target.style.color = "red";
	
});



document.getElementById("img1").addEventListener("mouseover",function(e){
	
	e.target.src="seder.jpg"
});
document.getElementById("img1").addEventListener("mouseout",function(){

	document.getElementById("img1").src="1234.jpg"
});
document.getElementById("img2").addEventListener("mouseover",function(){
	
	document.getElementById("img2").src="seder1.jpg"
});
document.getElementById("img2").addEventListener("mouseout",function(){
	
	document.getElementById("img2").src="sdr2.jpg"
});
document.getElementById("img3").addEventListener("mouseover",function(){
	
	document.getElementById("img3").src="name.jpg"
});
document.getElementById("img3").addEventListener("mouseout",function(){
	
	document.getElementById("img3").src="wed.jpg"
});