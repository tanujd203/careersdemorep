// $('#myCarousel').carousel({ pause: "false" });

$(document).ready(function(){
	$("#testimonial-slider").owlCarousel({
		items:3,
		itemsDesktop:[1000,3],
		itemsDesktopSmall:[979,2],
		itemsTablet:[768,2],
		itemsMobile:[650,1],
		pagination:true,
		autoPlay:true
	});


//$('#myModal').modal('show');

  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar"});   

  // Add smooth scrolling on all links inside the navbar
  $("#bs-example-navbar-collapse-1 a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
      	scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
    });
    }  // End if
});
	$(".testimonials").hide();
	$(".testimonials").fadeIn(6000);

/*	$('#goToHome').click(function() {

		$('html,body').animate({
			scrollTop : $('#section1').offset().top - 50
		}, 'slow');

	})


	$('#goToJobMap').click(function() {

		$('html,body').animate({
			scrollTop : $('#section2').offset().top - 50
		}, 'slow');

	})
	
	$('#goToCoreValues').click(function() {

		$('html,body').animate({
			scrollTop : $('#section3').offset().top - 50
		}, 'slow');

	})

	$('#goToEmpSpeak').click(function() {

		$('html,body').animate({
			scrollTop : $('#section4').offset().top - 50
		}, 'slow');

	})*/

	$('#scrollToJobMap2').click(function() {

		$('html,body').animate({
			scrollTop : $('.container-map').offset().top
		}, 'slow');

	})

	$('#scrollToJobMap3').click(function() {

		$('html,body').animate({
			scrollTop : $('.container-map').offset().top
		}, 'slow');

	})

	$('#section1-arrow').click(function() {

		$('html,body').animate({
			scrollTop : $('#section2').offset().top
		}, 'slow');

	})

});

/* Map Script Start */
$(function() {
	$(".container-map")
	.mapael(
	{
		map : {
			name : "world_countries"

									// Enable zoom on the map
									,
									zoom : {
										enabled : true,
										mousewheel: false,
										maxLevel : 10,
										buttons: {
											"reset": {
												cssClass: "zoomButton zoomReset",
                           content: "&#x2609;", // bullet sign
                           title: "Reset zoom"
                       },
                       "in": {
                       	cssClass: "zoomButton zoomIn",
                       	content: "+",
                       	title: "Zoom in"
                       },
                       "out": {
                       	cssClass: "zoomButton zoomOut",
                           content: "-", // minus sign
                           title: "Zoom out"
                       }}
                   }
									// Set default plots and areas style
									,
									defaultPlot : {
										attrs : {
											fill : "#004a9b",
											opacity : 2
										},
										attrsHover : {
											opacity : 5,
											stroke : "#ffffff",
											"stroke-width" : 2,
											animDuration: 0
										},
										text : {
											attrs : {
												fill : "#505444"
											},
											attrsHover : {
												fill : "#000",
												stroke : "#ffffff",
												"stroke-width" : 2
											}
										}
									},
									defaultArea : {
										attrs : {
											fill : "#e2e2e2",
											stroke : "#5bbfe8",
											"stroke-width" : 0.5
										},
										attrsHover : {
											fill : "#000",
											stroke : "#ffffff",
											"stroke-width" : 0.5,
											animDuration: 0
										},
										text : {
											attrs : {
												fill : "#505444"
											},
											attrsHover : {
												fill : "#000",
												stroke : "#ffffff",
												"stroke-width" : 2
											}
										}
									},
									
								},
								// Customize some areas of the map
								areas : {
									"IN" : {
										eventHandlers : {
											click : function() {

												$(
													"#locationUL")
												.html(
													'<li><span data-path="default">Filter by Location</span></li><li><span data-path=".Banglore">Banglore</span></li><li><span data-path=".Noida">Noida</span></li>');
												$(
													"#functionUL")
												.html(
													'<li><span data-path="default">Filter by Function</span></li><li><span data-path=".Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</span></li>');
												$(
													"#businessUL")
												.html(
													'<li><span data-path="default">Filter by Business</span></li><li><span data-path=".Dosage_Forms">Dosage Forms</span></li><li><span data-path=".Generics">Generics</span></li>');
												$(
													"#jobpostingsBody")
												.html(
													'<tr class="tbl-item"><td class="title">DGM - Business Development & Sales</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Noida">Noida</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Manager - Sales & Marketing (Domestic)</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Banglore">Banglore</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr>');

												$(
													'#demo')
												.jplist(
												{
													itemsBox : '.demo-tbl',
													itemPath : '.tbl-item',
													panelPath : '.jplist-panel'
																						//save plugin state
																						//,storage: 'localstorage' //'', 'cookies', 'localstorage'			
																						//,storageName: 'jplist-table-sortable-cols'
																					});

												$(
													'.demo-tbl .header')
												.on(
													'click',
													function() {
														$(
															this)
														.next(
															'.sort-btns')
														.find(
															'[data-path]:not(.jplist-selected):first')
														.trigger(
															'click');
													});
												$('#section2description')
												.show();
												$(
													'html,body')
												.animate(
												{
													scrollTop : $(
														'.jplist')
													.offset().top - 40
												},
												'slow');
												

											},
										},
										attrs : {
											fill : "#06425b"
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">India</span><br />"
										},
										attrsHover : {
											fill : "#000000"
										},

									},
									"CA" : {
										eventHandlers : {
											click : function() {

												$(
													"#locationUL")
												.html(
													'<li><span data-path="default">Filter by Location</span></li><li><span data-path=".Montreal">Montreal</span></li>');
												$(
													"#functionUL")
												.html(
													'<li><span data-path="default">Filter by Function</span></li><li><span data-path=".Quality">Quality</span></li><li><span data-path=".Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</span></li>');
												$(
													"#businessUL")
												.html(
													'<li><span data-path="default">Filter by Business</span></li><li><span data-path=".DraxImage">DraxImage</span></li>');
												$(
													"#jobpostingsBody")
												.html(
													'<tr class="tbl-item"><td class="title">Compliance Specialist</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Montreal">Montreal</td><td class="Quality">Quality</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Business Analyst</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Montreal">Montreal</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr>');

												$(
													'#demo')
												.jplist(
												{
													itemsBox : '.demo-tbl',
													itemPath : '.tbl-item',
													panelPath : '.jplist-panel'
												});

												$(
													'.demo-tbl .header')
												.on(
													'click',
													function() {
														$(
															this)
														.next(
															'.sort-btns')
														.find(
															'[data-path]:not(.jplist-selected):first')
														.trigger(
															'click');
													});
												$('#section2description')
												.show();
												$(
													'html,body')
												.animate(
												{
													scrollTop : $(
														'.jplist')
													.offset().top - 40
												},
												'slow');
												
											},
										},

										attrs : {
											fill : "#06425b"
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Canada</span><br />"
										},
										attrsHover : {
											fill : "#000000"
										}
									},
									"US" : {

										eventHandlers : {
											click : function() {

												$(
													"#locationUL")
												.html(
													'<li><span data-path="default">Filter by Location</span></li><li><span data-path=".Spokane">Spokane</span></li><li><span data-path=".Yardley">Yardley</span></li>');
												$(
													"#functionUL")
												.html(
													'<li><span data-path="default">Filter by Function</span></li><li><span data-path=".Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</span></li><li><span data-path=".Pharmacovigilance">Pharmacovigilance</span></li>');
												$(
													"#businessUL")
												.html(
													'<li><span data-path="default">Filter by Business</span></li><li><span data-path=".Allergy">Allergy</span></li><li><span data-path=".Corporate">Corporate</span></li>');
												$(
													"#jobpostingsBody")
												.html(
													'<tr class="tbl-item"><td class="title">Learning & Development Manager</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Yardley">Yardley</td><td class="Corporate">Corporate</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Inside Sales Representative</td><td class="desc">An arch is a structure that spans a space and supports a load.</td><td class="Spokane">Spokane</td><td class="Allergy">Allergy</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr>');

												$(
													'#demo')
												.jplist(
												{
													itemsBox : '.demo-tbl',
													itemPath : '.tbl-item',
													panelPath : '.jplist-panel'
												});

												$(
													'.demo-tbl .header')
												.on(
													'click',
													function() {
														$(
															this)
														.next(
															'.sort-btns')
														.find(
															'[data-path]:not(.jplist-selected):first')
														.trigger(
															'click');
													});


												$('#section2description')
												.show();
												$(
													'html,body')
												.animate(
												{
													scrollTop : $(
														'.jplist')
													.offset().top - 40
												},
												'slow');


											},
										},
										attrs : {
											fill : "#06425b"
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">United States</span><br />"
										},
										attrsHover : {
											fill : "#000000"
										}
									}
								},

								// Add some plots on the map
								plots : {
									// Image plot
									// Plot positioned by x and y instead of latitude, longitude

									'Chittorgarh' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 24.8887,
										longitude : 74.6269,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Chittorgarh</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 
									'Bharuch' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 21.7051,
										longitude : 72.9959,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Bharuch</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 
									'Ambarnath' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 19.1825,
										longitude : 73.1926,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Ambarnath</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 
									'banglore' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 12.9716,
										longitude : 77.5946,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Banglore</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 

									'noida' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 28.5355,
										longitude : 77.3910,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Noida</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 
									'Nira' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 18.1022,
										longitude : 74.2119,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Nira</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 
									'Mumbai' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 19.0760,
										longitude : 72.8777,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Mumbai</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 
									'Sahibabad' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 28.6654,
										longitude : 77.3493,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Sahibabad</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 
									'Roorkee' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 29.8543,
										longitude : 77.8880,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Roorkee</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 
									'Spokane' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 47.658779,
										longitude : -117.426048,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Spokane</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 
									'Georgia' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 33.247875,
										longitude : -83.441162,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Georgia</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 
									'Pennsylvania' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 41.203323,
										longitude : -77.194527,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Pennsylvania</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 
									
									'Yardley' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 40.245664,
										longitude : -74.8459472,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Yardley</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 
									'Montreal' : {
										type : "svg",
										path :'M7.5,0C2.48,0,0,3.5,0,7.81S7.5,22,7.5,22,15,12.13,15,7.81,12.52,0,7.5,0Zm0,10.32a4,4,0,1,1,4-4A4,4,0,0,1,7.5,10.32Z',
										width : 6,
										height : 10,
										latitude : 45.5016889,
										longitude : -73.5672559999999999,
										eventHandlers : {
											click : function() {
												//alert("hello");
											},
										},
										attrs : {
											fill : "#80bb2d",
											opacity : 1
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Montreal</span><br />"
										},
										attrsHover: {
											fill: "orange",
											stroke: '#f4f4e8',
											"stroke-width": 0.5,

										}
									}, 

								}
							});


});
/* Map Script End */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

$('#myBtn').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

//$('.carousel').carousel({ pause: "false" });

/*$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#section2');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar-default').css('background-color', '#ffffff');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
});*/

/*    $(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 100) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-default").css("background-color", "#ffffff"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".navbar-default").css("background-color", "transparent"); // if not, change it back to transparent
        }
      });
    });*/

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

  $(document).ready(function() {
    $('#referForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please write your full name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your friends email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            subject: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please enter your subject'
                    }
                }
            },
            message: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please write your message'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#referForm').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});