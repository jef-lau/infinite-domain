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
	$('.model-body a').click(addProjectDetails);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();
	$("#div1").html(); // replace div1
	$("#mintbody").html();
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

// ############################# Pages #############################
// ############################# Page 1 #############################
$("#div1" ).on( "click", "#page1", function() {
	console.log($( this ));
	$("#div1").load("page1");
	scrollToBottom();
});
$("#div1" ).on( "click", "#page1_2", function() {
	console.log($( this ));
	$("#append_page1_2").load('page1_2');
	scrollToBottom();
});
$("#div1" ).on( "click", "#page1_3", function() {
	console.log($( this ));
	$("#append_page1_3").load('page1_3');
	scrollToBottom();
});
$("#div1" ).on( "click", "#page1_4", function() {
	console.log($( this ));
	$("#append_page1_4").load('page1_4');
	scrollToBottom();
});
// $("#div1" ).on( "click", "#refresh1", function() {
// 	console.log($( this ));
// 	$("#div1").load('refresh1');
// });

// ############################# Page 2 #############################
// function page2()  {
// 	console.log($( this ));
// 	$("#div1").load("page2");  
// }
$("#div1" ).on( "click", "#page2", function() {
	console.log($( this ));
	$("#div1").load('page2');
	scrollToBottom();
});
$("#div1" ).on( "click", "#page2_2", function() {
	console.log($("append_page2 clicked"));
	$("#append_page2").load('page2_2');
	scrollToBottom();
});
$("#div1" ).on( "click", "#page2_3", function() {
	console.log($("append_page2 clicked"));
	$("#append_page2_2").load('page2_3');
	scrollToBottom();
});
$("#div1" ).on( "click", "#page2_4", function() {
	console.log($( this ));
	$("#append_page2_3").load('page2_4');
	scrollToBottom();
});

// ############################# Page 3 #############################
$("#div1" ).on( "click", "#page3", function() {
	console.log($(this));
	$("#div1").load('page3');
	scrollToBottom();
});
$("#div1" ).on( "click", "#page3_1", function() {
	console.log($(this));
	$("#append_page3_1").load('page3_1');
	scrollToBottom();
});
$("#div1" ).on( "click", "#page3_2", function() {
	console.log($(this));
	$("#append_page3").load('page3_2');
	scrollToBottom();
});
$("#div1" ).on( "click", "#page3_3", function() {
	console.log($(this));
	$("#append_page3_2").load('page3_3');
	scrollToBottom();
});
$("#div1" ).on( "click", "#page3_4", function() {
	console.log($(this));
	$("#append_page3_3").load('page3_4');
	scrollToBottom();
});

// ############################# Page 4 #############################
$("#div1" ).on( "click", "#page4", function() {
	console.log($(this));
	$("#div1").load('page4');
	scrollToBottom();
});

// ############################# Fetches #############################

function loadFetch1()  {
	console.log($( this ));
	$("#div1").load("fetch1");  
}

// ############################# Walt #############################
// load first page of data logs
$("#div1" ).on( "click", "#walt-button", function() {
	console.log($( this ));
	$("#div1").load("walt");  
});


// ############################# Mint Template #############################
// load between updates and overview
$("#mintbody").on( "click", "#overview-button", function() {
	console.log($( this ));
	$("#mintbody").load("mintoverviewT");  
});

$("#mintbody").on( "click", "#updates-button", function() {
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
// ############################# Scroll To Bottom #############################
function scrollToBottom(){
	setTimeout(function(){
    	$('div').scrollTop(1E10);
    }, 100);
}

