let selectedRating = "";
const selectRating = (rating) => {
  numbers = Array.from(document.getElementsByClassName("number"));
  numbers.forEach((e) => {
    e.classList.remove("selected-number");
  });
  selectedRating = rating;
  numbers[parseInt(rating) - 1].classList.add("selected-number");
};
const submit = () => {
  document.getElementById("rating-component").classList.add("hidden");
  document.getElementById("thank-you-component").classList.remove("hidden");
  document.getElementById("selected-rating").innerHTML = selectedRating;
};
