const form = document.getElementById('form');
const username = document.getElementById('username');
const age= document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const PhoneNumber = document.getElementById('PhoneNumber');
const  contactChoice =document.getElementById("contactChoice").value;



form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();  
	const ageValue = age.value.trim();
	const PhoneNumberValue = PhoneNumber.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
    } else if(usernameValue.length < 3 ) {
		setErrorFor(username, 'Username must be longer than 3 characters');
	} else {
		setSuccessFor(username);
	}

	if(ageValue === '') {
		setErrorFor(age, 'age cannot be blank');
	} else if(ageValue< 18 ) {
		setErrorFor(age, 'age must be older than 18 ');
	} else{
		setSuccessFor(age);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email); 
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
    } else if(passwordValue.length < 8 ) {
		setErrorFor(password, 'Password must be longer than 8 characters');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
	
	if(PhoneNumberValue === '') {
		setErrorFor(PhoneNumber, 'PhoneNumber cannot be blank');
	} else{
		setSuccessFor(PhoneNumber);
	}

	if(contactChoice.checked==false)
	{
	alert("plz check the checkbox field");
	document.getElementbyId("contactChoice").focus();
	return false;
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
// const contactChoice = document.getElementById('contactChoice');
// const Gender = document.getElementById('Gender');


// var getSelectedValue = document.querySelector( 'input[name="contact"]:checked');  
// var getSelectedValue = document.querySelector( 'input[name="gender"]:checked');  

// if(getSelectedValue != null) {   
	// 	document.getElementById("contactChoice").innerHTML=getSelectedValue.value +(" is selected");  
	// } else{  
	// 	document.getElementById("error").innerHTML= "*You have not selected any choice";    
	// }


	// if(getSelectedValue != null) {   
	// 	document.getElementById("Gender").innerHTML=getSelectedValue.value +(" is selected");  
	// } else{  
	// 	document.getElementById("error").innerHTML= "*You have not selected any choice";    
	// }