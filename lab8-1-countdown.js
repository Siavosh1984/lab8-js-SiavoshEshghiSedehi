/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener

window.onload = pageReady


//create page load function
function pageReady(){

	//create variables for required HTML elements
	var todayDate = document.getElementById("todayData");
	var dueDate = document.getElementById ("finalData");
	var difDateShow = document.getElementById("dueData")
	var myDate = new Date();
	var dueDate_ = new Date("April 21, 2023 18:00:00");
	var difTime = Math.floor((dueDate_ - myDate) / 86400000);
	todayDate.innerHTML= myDate.toDateString();

	dueDate.innerHTML = dueDate_.toDateString();

	

	if (dueDate_<myDate){

		var timelabelClass = document.getElementsByClassName("timelabel")
	    timelabelClass[2].style.display= "none";
	    timelabelClass[3].style.display= "none";
		difDateShow.innerHTML= "The Deadline for the Final Assignment has passed!"
		}
    else{


	//create variables for now date and due date
	
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE

	
	
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	difDateShow.innerHTML= difTime;
	
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE

    }

	};