function hbook() {
    var name = document.booking.name;
    var email = document.booking.email;
    var datebooking = document.booking.datebooking;
    var timebooking = document.booking.timebooking;
    if (name.value=="") {
        alert("name is required");
        name.style.border = "3px solid red";
        return false;
    }
    if (email.value=="") {
        alert("email is required");
        email.style.border = "3px solid red";
        return false;
    }
    if (datebooking.value=="") {
        alert("Date of booking is required");
        datebooking.style.border = "3px solid red";
        return false;
    }
    if (timebooking.value=="") {
        alert("Time of booking is required");
        timebooking.style.border = "3px solid red";
        return false;
    }
     else {
        alert("Details submitted successfully");
        return true;
    }
}