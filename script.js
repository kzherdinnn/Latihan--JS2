function register() {
  var first_name = document.getElementById("first_name");
  var last_name = document.getElementById("last_name");
  var company = document.getElementById("company");
  var email = document.getElementById("email");
  var area_code = document.getElementById("area_code");
  var phone_number = document.getElementById("phone_number");
  var subject = document.getElementById("subject");

  if (first_name.value == "") {
    alert("First name is required.");
    first_name.focus();
  } else if (last_name.value == "") {
    alert("Last name is required.");
    last_name.focus();
  } else if (company.value == "") {
    alert("Company is required.");
    company.focus();
  } else if (email.value == "") {
    alert("Email is required.");
    email.focus();
  } else if (area_code.value == "") {
    alert("Area code is required.");
    area_code.focus();
  } else if (phone_number.value == "") {
    alert("Phone number is required.");
    phone_number.focus();
  } else if (subject.value == "") {
    alert("Subject is required.");
    subject.focus();
  } else {
    document.getElementById("form1").submit();
  }
}
