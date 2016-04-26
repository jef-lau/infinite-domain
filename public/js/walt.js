'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
// ############################# START Testing out Ajax #############################
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.appDisplay a').click(addProjectDetails);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();
	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	$.get("/project/" + idNumber, addProject);
	console.log("URL: /project/" + idNumber);
}

function addProject(result) {
	console.log(result);
	var idNumber = result['id'];
	var projectHTML = result['summary']; // pulling in the summary from projects.json 
	$("#div1").html(projectHTML); // replace div1
}

// ############################# END Testing out Ajax #############################

// toasts for apps with no updates
$(document).ready(function(){
    $(".noupdates").click(function(){
    	console.log("pressed");
	toastr.options = {
	  "closeButton": false,
	  "debug": false,
	  "newestOnTop": false,
	  "progressBar": false,
	  "positionClass": "toast-bottom-center",
	  "preventDuplicates": false,
	  "onclick": null,
	  "showDuration": "300",
	  "hideDuration": "1000",
	  "timeOut": "2500",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "slideDown",
	  "hideMethod": "slideUp"
	};
    	toastr["info"]("No new updates...");
        // $("#div1").load("playgroundtest");
    });
});

// loads text div inside playground
$(document).ready(function(){
    $("#buttontest").click(function(){
    	console.log("pressed");
        $("#div1").load("playgroundtest");
    });
});

// load instagram
$(document).ready(function(){
    $("#instagramButton").click(function(){
    	console.log("pressed");
        $("#div1").load("instaT");
    	history.pushState(null, null, 'playground');   
    	console.log(history);
    });
});

// /*
//  * Function that is called when the document is ready.
//  */
// function initializePage() {
// 	$('.project a').click(addProjectDetails);

// 	$('#colorBtn').click(randomizeColors);

// 	$('#viewMap').on('shown.bs.modal', function (e) {
//               refreshMap();
//             })
// }


