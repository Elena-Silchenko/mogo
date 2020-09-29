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
