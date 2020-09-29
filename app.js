(function () {
  function countNumbers() {
    document.querySelectorAll(".numbers").forEach(function (item) {
      let limit = +item.dataset.target
      let number = 0
      let increment = Math.floor(limit / 10)
      let timer = setInterval(function () {
        number += increment
        item.textContent = number
      
        if (number > limit) {
          increment = -1
        }

        if (number == limit) {
          item.textContent = number
          clearInterval(timer)
        }
      }, 100)
    })
  }

  const facts = document.querySelector("#facts")
  let numbersStarted = false
  window.addEventListener("scroll", function () {
    if (window.scrollY + window.innerHeight > facts.offsetTop + facts.offsetHeight && !numbersStarted) {
      countNumbers()
      numbersStarted = true
    }
  })
})();

(function () {
  function accordionUpdateStatusClasses(e) {
    let el = e.target
    if (!el.classList.contains("show")) {
      el.closest(".card").classList.add("open")
    } else {
      el.closest(".card").classList.remove("open")
    }
  }

  $(".accordion").on("hide.bs.collapse", accordionUpdateStatusClasses)
  $(".accordion").on("show.bs.collapse", accordionUpdateStatusClasses)
})();

(function () {
})();
