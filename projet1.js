
document.getElementById("height").addEventListener("blur",function(e){
	
	 e.target.style.background="white";
	if(e.target.value==="")
	{alert("Please make sure you entered your height");
	e.target.style.background="red";
	}
	
	else{
		  var regex= /^[0-9]{2,5}$/;
		  if(!regex.test(e.target.value))
		  {alert("your height no valide");
	       e.target.style.background="red";
		  }
	   
	   
	    }

			
});

document.getElementById("weight").addEventListener("blur",function(e){
	
	 e.target.style.background="white";
	if(e.target.value==="")
	{alert("Please make sure you entered your weight");
	e.target.style.background="red";
	}
	
	else{
		  var regex= /^[0-9]{2,5}$/;
		  if(!regex.test(e.target.value))
		  {alert("your weight no valide");
	       e.target.style.background="red";
		  }
	   
	   
	    }

			
});
document.getElementById("age").addEventListener("blur",function(e){
	
	 e.target.style.background="white";
	if(e.target.value==="")
	{alert("Please make sure you entered your age");
	e.target.style.background="red";
	}
	
	else{
		  var regex= /^[0-9]{2,5}$/;
		  if(!regex.test(e.target.value))
		  {alert("your age no valide");
	       e.target.style.background="red";
		  }
	   
	   
	    }

			
});

var form= document.querySelector("form");
form.addEventListener("submit",function(e){
	
	var height=form.elements.height.value;
	
	var weight=form.elements.weight.value;
	var age=form.elements.age.value;
	var male = document.getElementById("m");
    var female = document.getElementById("f");
    var newheight=height/100;
	
	 if(height==""||weight==""||age==""||(male.checked==false && female.checked==false))
	 {alert("All fields are required!");}
	 
	else {
		
		
		
		 
		  
		  var bmi=(weight)/(newheight*newheight);
		  
          var result=" "; 
		   
		   if(bmi<18.5){
			   result="Underweight" +"😢😢";
		   }
		   		   
		   else if(18.5<=bmi&&bmi<=24.9){
			   result = "Healthy"+"🐱‍🏍😎";
           }else if(25<=bmi&&bmi<=29.9){
               result = "Overweight"+"😩😩";
           }else if(30<=bmi&&bmi<=34.9){
               result = "Obese"+"🥺🥺🤒";
           }else if(35<=bmi){
               result = "Extremely obese"+"🤬🤬😡";
            }
	
		
	    document.getElementById("textCalcule").textContent=bmi.toFixed(2) + result; 
		
	}
	
	
	
	
	e.preventDefault();
	
});

