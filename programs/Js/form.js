// This function is for form validation 
function change(){
	var name = document.forms["form"]["name"].value;
	var Email = document.forms["form"]["Email"].value;
	var Subject = document.forms["form"]["Subject"].value;
	var Message = document.forms["form"]["Your Message"].value;
//It checks for each element simultaneously
	if(name == "") {	
		alert("Please fill the name field");
		return false;
	}
	else if(Email == ""){
		alert("Please fill the Email field");
		return false;
	}
	else if(Subject == ""){
		alert("Please fill the Subject field");
		return false;
	}
	else if(Message == ""){
		alert("Please fill the Message field");
		return false;
	}
	else {
		alert("Thank you " + name + " for your concern.");
	}
}


