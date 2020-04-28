const want = document.getElementById("want");

let previouslyShown = [document.getElementById("info-nothing")];
want.addEventListener("change", (e) => {
  if (previouslyShown.length > 0) {
    previouslyShown.forEach((elem) => {
      elem.classList.remove("show");
    });
    previouslyShown = [];
  }
  const want_values = want.value.split("-");
  want_values.forEach((elem) => {
    const option = document.getElementById(`info-${elem}`);
    option.classList.add("show");
    previouslyShown.push(option);
  });
});

// Includes used:
// Prism highlighting: https://codepen.io/2kool2/pen/MEbeEg