
Template.header.events({
	"click .images img":function(event) {
		 console.log(event);
        ShowBootstrapModel(event.currentTarget);
	}
});


function ShowBootstrapModel (image) {
	$(image).attr('data-toggle', 'modal');
	$(image).attr('data-target', '#myModal');
	$(".modal-title").html(image.alt);
	$(".modal-body img").attr('src',image.currentSrc);
}
