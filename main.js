function validate() {
        var source = document.flight.source;
        var destination = document.flight.destination;
        var going = document.flight.going;
        var coming = document.flight.coming;
        var passenger = document.flight.passenger;
        var patt = /[a-zA-Z]{2,}/;
        var patt_date =/[0-9]{2}[-][0-9]{2}[-][0-9]{4}/; 
        if (source.value=="" & destination.value=="" & going.value=="" & passenger.value=="" & coming.value=="") {
          alert("Fill the required fields");
          source.style.border="3px solid red";
          destination.style.border="3px solid red";
          going.style.border="3px solid red";
          coming.style.border="3px solid red";
          passenger.style.border="3px solid red";
          return false;
        }
        if(source.value=="" || !patt.test(source)){
          if (source.value=="") {
            alert("Flying from is required");
            source.style.border="3px solid red";
            return false;
          } else {
            alert("invalid Flying From format \n Sample format NewDelhi");
            source.style.border="3px solid red";
            return false;
          }
        } 
        if(destination.value=="" || !patt.test(destination)){
          if (destination.value=="") {
            alert("Flying To is required");
            destination.style.border="3px solid red";
            return false;
          } else {
            alert("invalid Flyinf To format \n Sample format NewDelhi");
            destination.style.border="3px solid red";
            return false;
          }
        } 
        if (going.value=="" || !patt_date.test(going.value)) {
          if (going.value=="") {
            alert("Check In date required");
            going.style.border = "3px solid red";
            return false;
          } else {
            alert("Invalid check-In format \n Sample date format - ddmmyyyy");
            going.style.border = "3px solid red";
            return false;
          }
        }
        if (coming.value=="" || !patt_date.test(coming.value)) {
          if (coming.value=="") {
            alert("return date required");
            coming.style.border = "3px solid red";
            return false;
          } else {
            alert("Invalidreturn date format \n Sample date format - ddmmyyyy");
            coming.style.border = "3px solid red";
            return false;
          }
        }
        if (passenger.value==0 || passenger.value>2) {
          if (passenger.value==0) {
            alert("Passenger cannot be 0");
            passenger.style.border="3px solid red";
            return false;
          } else {
            alert("passenger value cannot be greater than 2");
            passenger.style.border="3px solid red";
            return false;
          }
        }
        if (source.value == destination.value) {
          alert("Flying From and Flying To cannot be same");
          source.style.border = "3px solid red";
          destination.style.border = "3px solid red";
          return false;
        }
        if (coming.value == going.value) {
          alert("Boarding and returning date cannot be same");
          coming.style.border = "3px solid red";
          going.style.border = "3px solid red";
          return false;
        }
        
        else {
          alert("Details submitted successfully")
          return true;
        }
      }
      function checkhotel() {
        var city = document.hotel.city;
        var checkindate = document.hotel.checkindate;
        var checkoutdate = document.hotel.checkoutdate;
        var checkintime = document.hotel.checkintime;
        var checkouttime = document.hotel.checkouttime;
        var guest = document.hotel.guest;
        var patt = /[a-zA-Z]{2,}/;
        var patt_date =/[0-9]{2}[-][0-9]{2}[-][0-9]{4}/; 
        if (city.value=="" && checkindate.value=="" && checkoutdate.value=="" && checkintime.value=="" && checkouttime.value=="" && guest.value=="") {
          city.style.border = "3px solid red";
          checkindate.style.border = "3px solid red";
          checkoutdate.style.border = "3px solid red";
          checkintime.style.border = "3px solid red";
          checkouttime.style.border = "3px solid red";
          guest.style.border = "3px solid red";
          return false;
        } 
        if (city.value=="" || !patt.test(city.value)) {
          if (city.value=="") {
            alert("city name required.")
            city.style.border = "3px solid red";
            return false;
          } else {
            alert("Wrong city format\n Sample city - NewDelhi");
            city.style.border = "3px solid red";
            return false;
          }
        }

        if (checkindate.value=="" || !patt_date.test(checkindate.value)) {
          if (checkindate.value=="") {
            alert("Check In date required");
            checkindate.style.border = "3px solid red";
            return false;
          } else {
            alert("Invalid check-In format \n Sample date format - dd-mm-yyyy");
            checkindate.style.border = "3px solid red";
            return false;
          }
        }
        if (checkoutdate.value=="" || !patt_date.test(checkoutdate.value)) {
          if (checkoutdate.value=="") {
            alert("checkout  date required");
            checkoutdate.style.border = "3px solid red";
            return false;
          } else {
            alert("Invalid checkoutdate date format \n Sample date format - dd-mm-yyyy");
            checkoutdate.style.border = "3px solid red";
            return false;
          }
        }
        if (checkindate.value == checkoutdate.value) {
          alert("check-in and check-out date date cannot be same");
          checkoutdate.style.border = "3px solid red";
          checkindate.style.border = "3px solid red";
          return false;
        }

        if (guest.value==0 || guest.value>2) {
          if (guest.value==0) {
            alert("guest cannot be 0");
            guest.style.border="3px solid red";
            return false;
          } else {
            alert("guest value cannot be greater than 2");
            guest.style.border="3px solid red";
            return false;
          }
        }
        else {
          alert("Details submitted successfully")
          return true;
        }
        
      }
      function checkcar() {
        var city = document.carrent.city;
        var startdate = document.carrent.startdate;
        var starttime = document.carrent.starttime;
        var endtime = document.carrent.checkintime;
        // var checkouttime = document.hotel.checkouttime;
        var guest = document.carrent.guest;
        var patt = /[a-zA-Z]{2,}/;
        var patt_date =/[0-9]{2}[-][0-9]{2}[-][0-9]{4}/; 
        var patt_time = /[0-9]{2}[:][0-9]{2}/;
  
        if (city.value=="" || !patt.test(city.value)) {
          if (city.value=="") {
            alert("City name required");
            city.style.border = "3px solid red";
            return false;
          } else {
            alert("wrong city format \n sample format - NewDelhi");
            city.style.border = "3px solid red";
            return false;
          }
        } 
        if (startdate.value=="" || !patt_date.test(startdate.value)) {
          if (startdate.value=="") {
            alert("Start date required");
            startdate.style.border = "3px solid red";
            return false;
          } else {
            alert("Wrong Start date format \n Sample format dd-mm-yyyy");
            startdate.style.border = "3px solid red";
            return false;
          }
        }
        if (starttime.value=="" || endtime.value=="") {
          if (starttime.value=="") {
            starttime.style.border = "3px solid red";
            alert("start time required");
            return false;
         
          } else {
            alert("end time required")
            endtime.style.border = "3px solid red";
            return false;
          }
        }
        if (!patt_time.test(starttime.value) || !patt_time.test(endtime.value)) {
          if (!patt_time.test(starttime.value)) {
            starttime.style.border = "3px solid red";
            alert("wrong time format \n Sample format XX:XX");
            return false;
          } else {
            endtime.style.border = "3px solid red";
            alert("wrong time format\n Sample format XX:XX");
            return false;
          }
        }
        else {
          alert("Details submitted successfully")
          return true;
        }
      }
    