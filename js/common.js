$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()<60){
			$('#navbar-wrapper').css("background",'transparent');
			$("#logo").css('color','white');
			$("#nav-list ul li a").css('color','white');
		}
	else{
		$('#navbar-wrapper').css("background",'white');
		$("#logo").css('color','black');
		$("#nav-list ul li a").css('color','black');
	}
});
});