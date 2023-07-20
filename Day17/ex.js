localStorage.setItem("firstName", "Dhruvi");

localStorage.setItem("lastName", "Shah");

localStorage.setItem("age", 22);

localStorage.setItem("Country", "India");

localStorage.setItem("City", "Nadiad");

const student = {
  fName: "Dhruvi",
  lName: "Shah",
  age: 22,
  skills: ["HTML5", "CSS", "JavaScript", "React JS", "TypeScript", "ReDux"],
  country: "India",
  enrolled_keys: 123,
};

localStorage.setItem("info", JSON.stringify(student));
