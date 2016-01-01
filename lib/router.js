Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'mainLayout',

  // the appNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'appNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present
 /* waitOn: function() {
  	return true;
    return [
      Meteor.subscribe('publicLists'),
      Meteor.subscribe('privateLists')
    ];
  }*/
});


Router.map(function(){

	this.route('index',{
		path: '/',
		template: 'index',
	});

	this.route('resume');

});
