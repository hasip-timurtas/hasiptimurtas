
Template.resumeLeft.events({
	"click .certificate":function(event) {
        ShowBootstrapModel(event.currentTarget);
	},

	"click .resume-pic": function(event) {
	    $(event.currentTarget).attr('data-toggle', 'modal');
		$(event.currentTarget).attr('data-target', '#myModal');
		var imageSrc = '/img/' + $(event.currentTarget).attr('data-src');
		$(".modal-body img").attr('src',imageSrc);

	}
});


function ShowBootstrapModel (image) {
	$(image).attr('data-toggle', 'modal');
	$(image).attr('data-target', '#myModal');
	var imageSrc = '/img/certificates/' + $(image).attr('data-src');
	$(".modal-body img").attr('src',imageSrc);
}
