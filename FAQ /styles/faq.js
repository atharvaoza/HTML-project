var faq = document.getElementsByClassName("faq-page");
var faqText = document.getElementsByClassName("text");

var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");

    if (faqText && faqText[i]) {
      if ((faqText[i].style.display = "block")) {
        faqText[i].style.display = "none";
      } else {
        faqText[i].style.display = "block";
      }
    }
  });
}