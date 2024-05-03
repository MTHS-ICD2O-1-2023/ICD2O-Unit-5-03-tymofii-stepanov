function findMovieType() {

  var age = parseInt(document.getElementById('ageInput').value);


  var ageRating;
  if (age >= 18) {
    ageRating = "You can watch R-rated movies";
  } else if (age >= 13) {
    ageRating = "You can watch PG-13 rated movies";
  } else if (age >= 6) {
    ageRating = "You can watch PG rated movies";
  } else {
    ageRating = "You can only watch G-rated movies";
  }


  document.getElementById("ageRating").innerHTML = "<p>" + ageRating + "</p>";
}
