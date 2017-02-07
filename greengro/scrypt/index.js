$(document).ready(function() {
    
 
  $("#owl-example").owlCarousel({
		navigation : true,
        slideSpeed : 400,
        paginationSpeed : 500,
        singleItem: true,
        pagination: true,
        rewindSpeed: 700
      
	});
 
});


$("#myModal").on('hidden.bs.modal', function (e) {
    $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
});

$("#myModal1").on('hidden.bs.modal', function (e) {
    $("#myModal1 iframe").attr("src", $("#myModal1 iframe").attr("src"));
});

$("#myModal2").on('hidden.bs.modal', function (e) {
    $("#myModal2 iframe").attr("src", $("#myModal2 iframe").attr("src"));
});

$("#myModal3").on('hidden.bs.modal', function (e) {
    $("#myModal3 iframe").attr("src", $("#myModal3 iframe").attr("src"));
});

