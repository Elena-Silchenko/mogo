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
  const progressBars = document.querySelectorAll(".progress-bar")
  const blocks = [
    document.querySelector("#about-us"),
    document.querySelector("#facts"),
    document.querySelector("#who-we-are"),
    document.querySelector("#what-people-say")
  ]
  window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      blocks.forEach((block, index) => {
        let progress = progressBars[index]
        let blockNext = blocks[index + 1]
        let height = document.body.clientHeight - block.offsetTop - window.innerHeight
        if (blockNext) height = blockNext.offsetTop - block.offsetTop

        if (window.scrollY > block.offsetTop + height) {
          progress.style.setProperty("--progress", 100 + "%")
        } else if (window.scrollY > block.offsetTop) {
          progress.style.setProperty("--progress", (100 * (window.scrollY - block.offsetTop) / height) + "%")
        } else {
          progress.style.setProperty("--progress", 0 + "%")
        }
      })
    })
  })
})();
