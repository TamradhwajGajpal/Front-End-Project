function connect() {
    var name=  document.contactform.name;
    var contact=  document.contactform.contact;
    var country=  document.contactform.country;
    var email=  document.contactform.email;
    var message=  document.contactform.message;
    var Messagetype=  document.contactform.Messagetype;
    if (name.value=="" && country.value=="" &&  email.value=="" &&  message.value=="" &&  Messagetype.value=="" &&  contact.value=="") {
        alert("fields are required");
        name.style.border = "3px solid red";
        country.style.border = "3px solid red";
        email.style.border = "3px solid red";
        message.style.border = "3px solid red";
        Messagetype.style.border = "3px solid red";
        contact.style.border = "3px solid red";
        return false;
    }
    if (name.value=="") {
        alert("name is reuired");
        name.style.border = "3px solid red";
        return false;
    }
    if (contact.value=="" || contact.value.length!=10) {
        if (contact.value=="") {
            alert("name is reuired");
        } else {
            alert("Contact number is of 10 digits");
        }
        contact.style.border = "3px solid red";
        return false;
    }
    if (country.value=="") {
        alert("country is reuired");
        country.style.border = "3px solid red";
        return false;
    }
    if (email.value=="") {
        alert("E-mail is reuired");
        email.style.border = "3px solid red";
        return false;
    }
    if (Messagetype.value=="") {
        alert("Messagetype is reuired");
        Messagetype.style.border = "3px solid red";
        return false;
    }
    
     else {
        alert("Message is recoreded");
        alert("Confirmation mail will be sent to you");
        return true;
    }
}
