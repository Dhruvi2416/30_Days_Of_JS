let month = prompt("Enter month").toLowerCase();

switch (month) {
  case "january":
    document.getElementById("ageid").innerHTML = "31";
    break;
  case "february":
    let leapyear = prompt(
      "Leap year? Enter in true or false answer only "
    ).toLowerCase();
    leapyear == "true"
      ? (document.getElementById("ageid").innerHTML = "29")
      : (document.getElementById("ageid").innerHTML = "28");
    break;
  case "march":
    document.getElementById("ageid").innerHTML = "31";
    break;
  case "april":
    document.getElementById("ageid").innerHTML = "30";
    break;
  case "may":
    document.getElementById("ageid").innerHTML = "31";
    break;
  case "june":
    document.getElementById("ageid").innerHTML = "30";
    break;
  case "july":
    document.getElementById("ageid").innerHTML = "31";
    break;
  case "august":
    document.getElementById("ageid").innerHTML = "31";
    break;
  case "september":
    document.getElementById("ageid").innerHTML = "30";
    break;
  case "october":
    document.getElementById("ageid").innerHTML = "31";
    break;
  case "november":
    document.getElementById("ageid").innerHTML = "30";
    break;
  case "december":
    document.getElementById("ageid").innerHTML = "31";
    break;
  default:
    document.getElementById("ageid").innerHTML = "Bye";
}
