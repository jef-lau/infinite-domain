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
	$("#div1").html(); // replace div1
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

// ############################# Authorizing #############################
$("#div1" ).on( "click", "#auth-button", function() {
	console.log($( this ));
	$("#div1").load("auth");  
});

// ############################# Fetches #############################



function loadFetch1()  {
	console.log($( this ));
	$("#div1").load("fetch1");  
}

// ############################# Mint Template #############################
// load between updates and overview
$("#mintbody" ).on( "click", "#overview-button", function() {
	console.log($( this ));
	$("#mintbody").load("mintoverviewT");  
});

$("#mintbody" ).on( "click", "#updates-button", function() {
	console.log($( this ));
	$("#mintbody").load("mintupdatesT"); 
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


