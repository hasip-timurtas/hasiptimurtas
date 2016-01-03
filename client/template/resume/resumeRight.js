Template.resumeRight.events({
	"click .resume-download":function(event) {
       	var html = '<h1>My Cool Pdf</h1>';

       	// HTML TO PDF 
       	/*
		 Normalda bu jsPDF ile yapılıyor javascript koduyla, meteordan baktım
		 bulamadım. jsPDF araştır kullan. kolaya benziyor.

       	*/

		Blaze.saveAsPDF(Template.resumeLeft, {
		    filename: "test.pdf", // optional, default is "document.pdf"
		    x: 0, // optional, left starting position on resulting PDF, default is 4 units
		    y: 0, // optional, top starting position on resulting PDF, default is 4 units
		    unit: "in" // optional, unit for coordinates, one of "pt", "mm" (default), "cm", or "in"
		   //format: "letter" // optional, see Page Formats, default is "a4",
		  //  elementHandlers: specialElementHandlers
	    });

	}
});
