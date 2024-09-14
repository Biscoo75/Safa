var input1 = document.querySelector("#mobile");
var iti1 = window.intlTelInput(input1, {
  initialCountry: "auto",
  geoIpLookup: callback => {
    fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("us"));
  },
});

var input2 = document.querySelector("#mobile2");
var iti2 = window.intlTelInput(input2, {
  initialCountry: "auto",
  geoIpLookup: callback => {
    fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("us"));
  },
});

// Handle form submission
document.getElementById("phoneForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the full phone number with country code
  var phoneNumber1 = iti1.getNumber();
  var phoneNumber2 = iti2.getNumber();

  // Log the phone numbers
  console.log("Primary Phone Number:", phoneNumber1);
  console.log("Secondary Phone Number:", phoneNumber2);

  // You can now send this data to your server or perform other actions
});
$(document).ready(function () {
  $('#mySelect').select2({
    width: '100%', // Adjust the width as needed
    placeholder: "Select an option", // Placeholder text
    allowClear: true // Allows clearing of selection
  });
});