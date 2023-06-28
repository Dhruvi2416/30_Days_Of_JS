let month = prompt("Enter month").toLowerCase();

switch (month) {
  case "january":
    document.getElementById("ageid").innerHTML = "Winter";
    break;
  case "february":
    document.getElementById("ageid").innerHTML = "Winter";
    break;
  case "march":
    document.getElementById("ageid").innerHTML = "Spring";
    break;
  case "april":
    document.getElementById("ageid").innerHTML = "Spring";
    break;
  case "may":
    document.getElementById("ageid").innerHTML = "Spring";
    break;
  case "june":
    document.getElementById("ageid").innerHTML = "Summer";
    break;
  case "july":
    document.getElementById("ageid").innerHTML = "Summer";
    break;
  case "august":
    document.getElementById("ageid").innerHTML = "Summer";
    break;
  case "september":
    document.getElementById("ageid").innerHTML = "Autumn";
    break;
  case "october":
    document.getElementById("ageid").innerHTML = "Autumn";
    break;
  case "november":
    document.getElementById("ageid").innerHTML = "Autumn";
    break;
  case "december":
    document.getElementById("ageid").innerHTML = "Winter";
    break;
  default:
    document.getElementById("ageid").innerHTML = "Bye";
}
