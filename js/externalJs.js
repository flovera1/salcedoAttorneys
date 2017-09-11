$(document).ready(function() {

	$('.fa-angle-down').on('click', function() {

  	$(this).parent().siblings('.secondary').toggle();
    	if($(this).hasClass('fa-angle-down')) {
      		$(this).removeClass('fa-angle-down').addClass('fa-angle-up');
      } else {
      		$(this).addClass('fa-angle-down').removeClass('fa-angle-up');
      }
  });

	$('.change').on({
		"mouseover": hovered,
		"mouseout": mouseout
	});

	var flag=0;

	function hovered(){
	  $(this).css("color", "black");
	}

	function mouseout(){
	  if (flag == 0){
	  $(this).css("color", "white");
	} else {
	  flag=0;
	}
	}
	//$('.change').bind('mouseenter', function(){
	//	 $(this).css("background", "#380606");
	//		});
});