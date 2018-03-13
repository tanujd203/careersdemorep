// $('#myCarousel').carousel({ pause: "false" });

$(document).ready(function() {
	$("#testimonial-slider").owlCarousel({
		items : 3,
		itemsDesktop : [ 1000, 3 ],
		itemsDesktopSmall : [ 979, 2 ],
		itemsTablet : [ 768, 2 ],
		itemsMobile : [ 650, 1 ],
		pagination : true,
		autoPlay : true
	});

	// $('#myModal').modal('show');

	// Add scrollspy to <body>
	$('body').scrollspy({
		target : ".navbar"
	});

	// Add smooth scrolling on all links inside the navbar
	$("#bs-example-navbar-collapse-1 a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it
			// takes to scroll to the specified area
			$('html, body').animate({
				scrollTop : $(hash).offset().top
			}, 800, function() {

				// Add hash (#) to URL when done scrolling (default click
				// behavior)
				window.location.hash = hash;
			});
		} // End if
	});
	$(".testimonials").hide();
	$(".testimonials").fadeIn(6000);

	/*
	 * $('#goToHome').click(function() {
	 * 
	 * $('html,body').animate({ scrollTop : $('#section1').offset().top - 50 },
	 * 'slow'); })
	 * 
	 * 
	 * $('#goToJobMap').click(function() {
	 * 
	 * $('html,body').animate({ scrollTop : $('#section2').offset().top - 50 },
	 * 'slow'); })
	 * 
	 * $('#goToCoreValues').click(function() {
	 * 
	 * $('html,body').animate({ scrollTop : $('#section3').offset().top - 50 },
	 * 'slow'); })
	 * 
	 * $('#goToEmpSpeak').click(function() {
	 * 
	 * $('html,body').animate({ scrollTop : $('#section4').offset().top - 50 },
	 * 'slow'); })
	 */

	$('#scrollToJobMap').click(function() {

		$('html,body').animate({
			scrollTop : $('#section2').offset().top
		}, 'slow');

	});

	$('#scrollToJobMap1').click(function() {

		$('html,body').animate({
			scrollTop : $('#section2').offset().top
		}, 'slow');

	});

	$('#scrollToJobMap2').click(function() {

		$('html,body').animate({
			scrollTop : $('#section2').offset().top
		}, 'slow');

	});

	$('#scrollToJobMap3').click(function() {

		$('html,body').animate({
			scrollTop : $('#section2').offset().top
		}, 'slow');

	});

	$('#scrollToJobMap4').click(function() {

		$('html,body').animate({
			scrollTop : $('#section2').offset().top
		}, 'slow');

	});

	$('#scrollToJobMap5').click(function() {

		$('html,body').animate({
			scrollTop : $('#section2').offset().top
		}, 'slow');

	});

	$('#scrollToJobMap6').click(function() {

		$('html,body').animate({
			scrollTop : $('#section2').offset().top
		}, 'slow');

	});

	$('#section1-arrow').click(function() {

		$('html,body').animate({
			scrollTop : $('#section2').offset().top
		}, 'slow');

	});

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
								maxLevel : 10,

								mousewheel : false,
								buttons : {
									"reset" : {
										cssClass : "zoomButton zoomReset",
										content : "&#x2609;", // bullet sign
										title : "Reset zoom"
									},
									"in" : {
										cssClass : "zoomButton zoomIn",
										content : "+",
										title : "Zoom in"
									},
									"out" : {
										cssClass : "zoomButton zoomOut",
										content : "-", // minus sign
										title : "Zoom out"
									}
								},

							}
							// Set default plots and areas style
							,
							defaultPlot : {
								attrs : {
									fill : "#e2e2e2",
									opacity : 2
								},
								attrsHover : {
									opacity : 5,
									stroke : "#ffffff",
									animDuration : 0,
									"stroke-width" : 2
								},
								text : {
									attrs : {
										fill : "#505444"
									},
									attrsHover : {
										fill : "#000",
										stroke : "#ffffff",
										animDuration : 0,
										"stroke-width" : 2
									}
								}
							},
							defaultArea : {
								attrs : {
									fill : "#e2e2e2",
									stroke : "#4dc7f3"
								},
								attrsHover : {
									fill : "#000000",
									stroke : "#ffffff",
									animDuration : 0,
									"stroke-width" : 2
								},
								text : {
									attrs : {
										fill : "#505444"
									},
									attrsHover : {
										fill : "#000",
										stroke : "#ffffff",
										animDuration : 0,
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

										$("#locationUL")
												.html(
														'<li><span data-path="default">Filter by Location</span></li><li><span data-path=".Banglore">Banglore</span></li><li><span data-path=".Noida">Noida</span></li>');
										$("#functionUL")
												.html(
														'<li><span data-path="default">Filter by Function</span></li><li><span data-path=".Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</span></li>');
										$("#businessUL")
												.html(
														'<li><span data-path="default">Filter by Business</span></li><li><span data-path=".Dosage_Forms">Dosage Forms</span></li><li><span data-path=".Generics">Generics</span></li>');
										$("#jobpostingsBody")
												.html(
														'<tr class="tbl-item"><td class="title">DGM - Business Development & Sales</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Noida">Noida</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Manager - Sales & Marketing (Domestic)</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Banglore">Banglore</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">DGM - Business Development & Sales</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Noida">Noida</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Manager - Sales & Marketing (Domestic)</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Banglore">Banglore</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">DGM - Business Development & Sales</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Noida">Noida</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr>');

										$('#demo').jplist({
											itemsBox : '.demo-tbl',
											itemPath : '.tbl-item',
											panelPath : '.jplist-panel'
										// save plugin state
										// ,storage: 'localstorage' //'',
										// 'cookies', 'localstorage'
										// ,storageName:
										// 'jplist-table-sortable-cols'
										});

										$('.demo-tbl .header')
												.on(
														'click',
														function() {
															$(this)
																	.next(
																			'.sort-btns')
																	.find(
																			'[data-path]:not(.jplist-selected):first')
																	.trigger(
																			'click');
														});
										$('#section2description').show();
										$('html,body')
												.animate(
														{
															scrollTop : $(
																	'#section2description')
																	.offset().top
														}, 'slow');

									},
								},
								attrs : {
									fill : "#06425b"
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>India</span></center>"
								},
								attrsHover : {
									fill : "#000000"
								},

							},
							"CA" : {
								eventHandlers : {
									click : function() {

										$("#locationUL")
												.html(
														'<li><span data-path="default">Filter by Location</span></li><li><span data-path=".Montreal">Montreal</span></li>');
										$("#functionUL")
												.html(
														'<li><span data-path="default">Filter by Function</span></li><li><span data-path=".Quality">Quality</span></li><li><span data-path=".Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</span></li>');
										$("#businessUL")
												.html(
														'<li><span data-path="default">Filter by Business</span></li><li><span data-path=".DraxImage">DraxImage</span></li>');
										$("#jobpostingsBody")
												.html(
														'<tr class="tbl-item"><td class="title">Compliance Specialist</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Montreal">Montreal</td><td class="Quality">Quality</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Business Analyst</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Montreal">Montreal</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Compliance Specialist</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Montreal">Montreal</td><td class="Quality">Quality</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Business Analyst</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Montreal">Montreal</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Compliance Specialist</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Montreal">Montreal</td><td class="Quality">Quality</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr>');

										$('#demo').jplist({
											itemsBox : '.demo-tbl',
											itemPath : '.tbl-item',
											panelPath : '.jplist-panel'
										});

										$('.demo-tbl .header')
												.on(
														'click',
														function() {
															$(this)
																	.next(
																			'.sort-btns')
																	.find(
																			'[data-path]:not(.jplist-selected):first')
																	.trigger(
																			'click');
														});
										$('#section2description').show();
										$('html,body')
												.animate(
														{
															scrollTop : $(
																	'#section2description')
																	.offset().top
														}, 'slow');

									},
								},

								attrs : {
									fill : "#06425b"
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Canada</span></center>"
								},
								attrsHover : {
									fill : "#000000"
								}
							},
							"CN" : {
								eventHandlers : {
									click : function() {

									},
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>China</span></center>"
								},
								attrs : {
									fill : "#06425b"
								},
								attrsHover : {
									fill : "#000000"
								}
							},
							"MY" : {
								eventHandlers : {
									click : function() {

									},
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Malaysia</span></center>"
								},
								attrs : {
									fill : "#06425b"
								},
								attrsHover : {
									fill : "#000000"
								}
							},
							"BE" : {
								eventHandlers : {
									click : function() {

									},
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Belgium</span></center>"
								},
								attrs : {
									fill : "#06425b"
								},
								attrsHover : {
									fill : "#000000"
								}
							},
							"US" : {

								eventHandlers : {
									click : function() {

										$("#locationUL")
												.html(
														'<li><span data-path="default">Filter by Location</span></li><li><span data-path=".Spokane">Spokane</span></li><li><span data-path=".Yardley">Yardley</span></li>');
										$("#functionUL")
												.html(
														'<li><span data-path="default">Filter by Function</span></li><li><span data-path=".Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</span></li><li><span data-path=".Pharmacovigilance">Pharmacovigilance</span></li>');
										$("#businessUL")
												.html(
														'<li><span data-path="default">Filter by Business</span></li><li><span data-path=".Allergy">Allergy</span></li><li><span data-path=".Corporate">Corporate</span></li>');
										$("#jobpostingsBody")
												.html(
														'<tr class="tbl-item"><td class="title">Learning & Development Manager</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Yardley">Yardley</td><td class="Corporate">Corporate</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Inside Sales Representative</td><td class="desc">An arch is a structure that spans a space and supports a load.</td><td class="Spokane">Spokane</td><td class="Allergy">Allergy</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Learning & Development Manager</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Yardley">Yardley</td><td class="Corporate">Corporate</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Inside Sales Representative</td><td class="desc">An arch is a structure that spans a space and supports a load.</td><td class="Spokane">Spokane</td><td class="Allergy">Allergy</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Learning & Development Manager</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Yardley">Yardley</td><td class="Corporate">Corporate</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr>');

										$('#demo').jplist({
											itemsBox : '.demo-tbl',
											itemPath : '.tbl-item',
											panelPath : '.jplist-panel'
										});

										$('.demo-tbl .header')
												.on(
														'click',
														function() {
															$(this)
																	.next(
																			'.sort-btns')
																	.find(
																			'[data-path]:not(.jplist-selected):first')
																	.trigger(
																			'click');
														});

										$('#section2description').show();
										$('html,body')
												.animate(
														{
															scrollTop : $(
																	'#section2description')
																	.offset().top
														}, 'slow');

									},
								},
								attrs : {
									fill : "#06425b"
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>USA</span></center>"
								},
								attrsHover : {
									fill : "#000000"
								}
							}
						},

						// Add some plots on the map
						plots : {
							// Image plot
							// Plot positioned by x and y instead of latitude,
							// longitude

							'Chittorgarh' : {
								size : 5,
								latitude : 28.8887,
								longitude : 74.6269,
								eventHandlers : {
									click : function() {
										alert("");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,

								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Chittorgarh</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Bharuch' : {
								size : 5,
								latitude : 21.7051,
								longitude : 72.9959,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Bharuch</span><br /></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Ambarnath' : {
								size : 5,
								latitude : 19.1825,
								longitude : 73.1926,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Ambarnath</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'bengalore' : {
								size : 5,
								latitude : 12.9716,
								longitude : 77.5946,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Banglore</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},

							'noida' : {
								size : 5,
								latitude : 27.5355,
								longitude : 77.3910,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Noida</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Nira' : {
								size : 5,
								latitude : 18.1022,
								longitude : 74.2119,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Nira</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Mumbai' : {
								size : 5,
								latitude : 25.0760,
								longitude : 72.8777,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Mumbai</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},

							'Roorkee' : {
								size : 5,
								latitude : 30.8543,
								longitude : 77.8880,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Roorkee</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Spokane' : {
								size : 5,
								latitude : 47.658779,
								longitude : -117.426048,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Spokane</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Yardley' : {
								size : 5,
								latitude : 42.2457,
								longitude : -75.8459472,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Yardley</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Salisbury' : {
								size : 5,
								latitude : 38.3606700,
								longitude : -75.5993700,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Salisbury</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Malvern' : {
								size : 5,
								latitude : 40.036217,
								longitude : -75.513809,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Malvern</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Shanghai' : {
								size : 5,
								latitude : 31.2304,
								longitude : 121.4737,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Shanghai</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Merelbeke' : {
								size : 5,
								latitude : 50.9945,
								longitude : 3.7456,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Merelbeke</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Singapore' : {
								size : 5,
								latitude : 1.3521,
								longitude : 103.8198,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Singapore</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'orlando' : {
								size : 5,
								latitude : 28.538336,
								longitude : -81.379234,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>orlando</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Nanjangud' : {
								size : 5,
								latitude : 12.1200,
								longitude : 76.6801,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Nanjangud</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},

							'Gajraula' : {
								size : 5,
								latitude : 28.8448,
								longitude : 78.2393,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Gajraula</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Savli' : {
								size : 5,
								latitude : 22.5616,
								longitude : 73.2220,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Savli</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Hyderabad' : {
								size : 5,
								latitude : 17.3850,
								longitude : 78.4867,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Hyderabad</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},

							'Bengaluru' : {
								size : 5,
								latitude : 12.9716,
								longitude : 77.5946,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Bengaluru</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},
							'Montreal' : {
								size : 5,
								latitude : 45.5016889,
								longitude : -73.5672559999999999,
								eventHandlers : {
									click : function() {
										// alert("Jubilant");
									},
								},
								attrs : {
									fill : "orange",
									opacity : 1,
									stroke : '#f4f4e8',
									"stroke-width" : 1,
								},
								tooltip : {
									content : "<center><img src='images/ju.png'width='60%'height='60%'/><br><span>Montreal</span></center>"
								},
								attrsHover : {
									fill : "orange",
									stroke : '#f4f4e8',
									"stroke-width" : 2,

								}
							},

						}
					});

});
/* Map Script End */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

$('#myBtn').click(function() {
	$("html, body").animate({
		scrollTop : 0
	}, 600);
	return false;
});

// $('.carousel').carousel({ pause: "false" });

/*
 * $(document).ready(function(){ var scroll_start = 0; var startchange =
 * $('#section2'); var offset = startchange.offset();
 * $(document).scroll(function() { scroll_start = $(this).scrollTop();
 * if(scroll_start > offset.top) { $('.navbar-default').css('background-color',
 * '#ffffff'); } else { $('.navbar-default').css('background-color',
 * 'transparent'); } }); });
 */

/*
 * $(document).ready(function(){ $(window).scroll(function() { // check if
 * scroll event happened if ($(document).scrollTop() > 100) { // check if user
 * scrolled more than 50 from top of the browser window
 * $(".navbar-default").css("background-color", "#ffffff"); // if yes, then
 * change the color of class "navbar-fixed-top" to white (#f8f8f8) } else {
 * $(".navbar-default").css("background-color", "transparent"); // if not,
 * change it back to transparent } }); });
 */

$(window).scroll(function() {
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

$(document)
		.ready(
				function() {

					$('.col-is-1').hover(function() {
						$('.banner').css("background-color", "#2957A4");
						$('.banner_h2').css("color", "#ffffff");
					}, function() {
						$('.banner').css("background-color", "#ffffff");
						$('.banner_h2').css("color", "#000000");
					});

					$('.col-is-2').hover(function() {
						$('.banner').css("background-color", "#8EC858");
						$('.banner_h2').css("color", "#ffffff");
					}, function() {
						$('.banner').css("background-color", "#ffffff");
						$('.banner_h2').css("color", "#000000");
					});

					$('.col-is-3').hover(function() {
						$('.banner').css("background-color", "#FFDE1F");
						$('.banner_h2').css("color", "#ffffff");
					}, function() {
						$('.banner').css("background-color", "#ffffff");
						$('.banner_h2').css("color", "#000000");
					});

					$('.col-is-4').hover(function() {
						$('.banner').css("background-color", "#364086");
						$('.banner_h2').css("color", "#ffffff");
					}, function() {
						$('.banner').css("background-color", "#ffffff");
						$('.banner_h2').css("color", "#000000");
					});

					$('#referForm')
							.bootstrapValidator(
									{
										// To use feedback icons, ensure that
										// you use Bootstrap v3.1.0 or later
										feedbackIcons : {
											valid : 'glyphicon glyphicon-ok',
											invalid : 'glyphicon glyphicon-remove',
											validating : 'glyphicon glyphicon-refresh'
										},
										fields : {
											name : {
												validators : {
													stringLength : {
														min : 2,
													},
													notEmpty : {
														message : 'Please write your full name'
													}
												}
											},
											email : {
												validators : {
													notEmpty : {
														message : 'Please enter your friends email address'
													},
													emailAddress : {
														message : 'Please supply a valid email address'
													}
												}
											},
											subject : {
												validators : {
													stringLength : {
														min : 8,
													},
													notEmpty : {
														message : 'Please enter your subject'
													}
												}
											},
											message : {
												validators : {
													stringLength : {
														min : 10,
														max : 200,
														message : 'Please enter at least 10 characters and no more than 200'
													},
													notEmpty : {
														message : 'Please write your message'
													}
												}
											}
										}
									}).on(
									'success.form.bv',
									function(e) {
										$('#success_message').slideDown({
											opacity : "show"
										}, "slow") // Do something ...
										$('#referForm').data(
												'bootstrapValidator')
												.resetForm();

										// Prevent form submission
										e.preventDefault();

										// Get the form instance
										var $form = $(e.target);

										// Get the BootstrapValidator instance
										var bv = $form
												.data('bootstrapValidator');

										// Use Ajax to submit form data
										$.post($form.attr('action'), $form
												.serialize(), function(result) {
											console.log(result);
										}, 'json');
									});
				});