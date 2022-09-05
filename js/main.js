document.querySelector("#enter").addEventListener("click", run);

function run() {
  const name = document.querySelector("#name").value;
  const gender = document.querySelector("#sex").value.toLowerCase();
  let year = document.querySelector("#year").value;
  let titles;
  age = 2022 - year;

  if (gender === "female") {
    titles = "Mrs";
    document.body.style.backgroundColor = "pink";
  } else if (gender === "male") {
    titles = "Mr";
    document.body.style.backgroundColor = "blue";
  } else {
    titles = "";
    document.body.style.backgroundColor = "orange";
    document.querySelector("#color").innerText = "Hi " + "Rainbow-Nation "; // + "ran-out " + "of " + "colors";
  }
  if (year > 1999) {
    alert("ama 2000 take a chill pill you still young");
  } else {
    alert("l hope you are HUSTLING my guy");
  }
  /*if (name !== null || year !== null || gender !== null) {
   alert(fill in all, the, blanks);
  }*/
  document.querySelector("#showoff").innerText =
    titles +
    " " +
    name +
    " " +
    "you're " +
    age +
    " or you're about to turn " +
    age +
    " years old.";
}
