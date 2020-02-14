
function getRollNumber(){
	return document.getElementById("roll").value;
}

function getName(){
	return document.getElementById("name").value
}

function getGender(){
	var gender = document.getElementById("m");
	if(gender.checked){
		return "Male";
	}else{
		return "Female";
	}
}

function getAddress(){
	return document.getElementById("address").value;
}

function getSkill(){
	var c = document.getElementById("c");
	var j = document.getElementById("j");
	var h = document.getElementById("h");
	var skill = "";
	if(c.checked){
		skill =  skill + "CSharp,";
	}
	if(j.checked){
		skill = skill + "Java,";
	}
	if(h.checked){
		skill = skill +"Html,";
	}
	return skill;
}

function getCity(){
	var cty = document.getElementById("city");
	var city;
	for(var i=0;i<cty.options.length;i++){
		if(cty.options[i].selected){
			city = cty.options[i].value;
		}
	}
	return city;	
}

function getState(){
	var st = document.getElementById("state");
	var state;
	for(var i=0;i<st.options.length;i++){
		if(st.options[i].selected){
			state = st.options[i].value;
		}
	}
	return state;		
}

function setRollNumber(){
	document.getElementById("roll").value = student.roll;
}

function setName(){
	document.getElementById("name").value = student.name;
}

function setGender(){
	var gender = document.getElementById("m");
	if(student.gender=="Male"){
		document.getElementById("m").checked = true;
	}else{
		document.getElementById("f").checked = true;
	}
}

function setAddress(){
	document.getElementById("address").value = student.address;
}

function setSkill(){
	if(!(student.skill.search("CSharp") < 0)){
		document.getElementById("c").checked=true;
	}
	if(!(student.skill.search("Java") < 0)){
		document.getElementById("j").checked=true;
	}
	if(!(student.skill.search("Html") < 0)){
		document.getElementById("h").checked=true;
	}
	alert(student.skill)
}

function setCity(){
	document.getElementById("city").value = student.city;
}

function setState(){
	document.getElementById("state").value=student.state;
}

function getStudent(){
	var stud = {
		roll:getRollNumber(),
		name:getName(),
		gender:getGender(),
		address:getAddress(),
		skill:getSkill(),
		city:getCity(),
		state:getState()
	};
	return stud;
}
var student;

function GetData(){
	setRollNumber();
	setName();
	setGender();
	setAddress();
	setSkill();
	setCity();
	setState();	
}
function myData(){
	student = getStudent();
}

function DisplayData(){
	alert(student.roll);
}