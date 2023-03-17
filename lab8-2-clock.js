/* LAB 8.2 - STOP TIME */
window.onload = timer_

function timer_(){





//create page load listener

//create page load function

	//create variables for required HTML elements
	var hour_ = document.getElementById("hoursOut");
	var minutes_ = document.getElementById("minsOut");
	var seconds_ = document.getElementById("secsOut")
	
	//create time variable so all functions have access to it
	
	
	/*setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("hoursOut").innerHTML = d.toLocaleTimeString();
}*/




    function time_calculator(){
	var myDate = new Date();

	if (myDate.getHours()<10){

		hour_.innerHTML = "0" + myDate.getHours()
	}
	else {hour_.innerHTML =  myDate.getHours()};

	if (myDate.getMinutes()<10){

		minutes_.innerHTML = "0" + myDate.getMinutes()
	}
	else {minutes_.innerHTML =  myDate.getMinutes()};

	if (myDate.getSeconds()<10){

		seconds_.innerHTML = "0" + myDate.getSeconds()
	}
	else {seconds_.innerHTML =  myDate.getSeconds()};

	
	/*minutes_.innerHTML = myDate.getMinutes();
	seconds_.innerHTML = myDate.getSeconds();*/
    };

	
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	var startBtn = document.getElementById("btnStart");
	var stoptBtn = document.getElementById("btnStop");
	var startPoint =null;
	//CREATE FUNCTION TO START THE CLOCK.
	function timeStart(){
     startPoint = setInterval(time_calculator,1000);
	
	};
	
	//CREATE FUNCTION TO STOP THE CLOCK
	
	function timeStop(){

    clearInterval(startPoint);
	
	
	};

	// SET EVENT LISTENERS
	var startBtn = document.getElementById("btnStart");
	var stoptBtn = document.getElementById("btnStop");

	startBtn.onclick = timeStart
	stoptBtn.onclick = timeStop

	




};