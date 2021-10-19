import "./header.js";
// Plan.html

let questions = document.querySelectorAll(".question_text");
let panels = document.querySelectorAll(".panel");
let categories = document.querySelectorAll(".cat");

questions.forEach((Q) => {
  Q.addEventListener("click", function (e) {
    this.closest("article").childNodes[3].classList.toggle("hidden");
  });
});

// categories

categories.forEach(function (cat, index) {
  cat.addEventListener("click", function () {
    questions[index]
      .closest("article")
      .childNodes[3].classList.toggle("hidden");
  });
});

let summary = document.querySelector(".summary_text").innerText;
let answers = {};
panels.forEach(function (panel, index) {
  console.log(index); // 1
  panel.addEventListener("click", function (e) {
    let ans = e.target.closest("div").childNodes[1].innerText;
    answers[index] = ans;
    e.target.closest("div").classList.toggle("active");
  });
  let htmll = `I drink coffee ${answers[0]}, with a  ${answers[1]} type of bean.  ${answers[2]} ground ala  ${answers[3]},
sent to me  ${answers[4]}.`;
});
