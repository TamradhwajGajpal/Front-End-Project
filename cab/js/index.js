
	function book() {
		var name = document.bookcab.name;
		var contact = document.bookcab.contact;
		var source = document.bookcab.source;
		var destination = document.bookcab.destination;
		var datepicker = document.bookcab.datepicker;
		var timepicker = document.bookcab.timepicker;
		
		if (name.value=="") {
			alert("Name is required");
			name.style.border = "4px solid red"; 
			return false;
		}
		if (contact.value=="") {
			alert("Contact is required");
			contact.style.border = "3px solid red";
			return false;
		}
		if (contact.value.length!=10) {
			alert("Contact is required");
			contact.style.border = "3px solid red";
			return false;
		}
		
		if (source.value=="") {
			alert("source point is required");
			source.style.border = "4px solid red"; 
			return false;
		}
		if (destination.value=="") {
			alert("destination point is required");
			destination.style.border = "4px solid red"; 
			return false;
		}
		if (datepicker.value=="") {
			alert("Date is required");
			datepicker.style.border="4px solid red";
			return false;
		}
		if ( timepicker.value=="" ) {
			alert("Time is required");
			timepicker.style.border = "4px solid red";
			return false;
		}
		 else {
			alert("Details saved successfully");
			alert("Looking for available cabs");
			return true;
		}
	}