
Template.resumeLeft.events({
	"click .certificate":function(event) {
        ShowBootstrapModel(event.currentTarget);
	}
});


function ShowBootstrapModel (image) {
	$(image).attr('data-toggle', 'modal');
	$(image).attr('data-target', '#myModal');
	var imageSrc = '/img/certificates/' + $(image).attr('data-src');
	$(".modal-body img").attr('src',imageSrc);
}
