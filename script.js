$("#btn-search").on('click', function() {
	$("#search-span").hide();
		$("#loading-span").removeClass('d-none');
	setTimeout(function() {
		$("#search-span").show();
		$("#loading-span").addClass('d-none');
	}, 2000);
	
});