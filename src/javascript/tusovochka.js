document.addEventListener('DOMContentLoaded', function () {
  function setupTusovochkaButtons() {
    const totalItems = 7

    for (let i = 1; i <= totalItems; i++) {
      const buttonId = `tusovochkaBtn${i.toString().padStart(2, '0')}`
      const button = document.getElementById(buttonId)

      if (button) {
        button.addEventListener('click', function () {
          for (let j = 1; j <= totalItems; j++) {
            const contentId = `tusovochka${j.toString().padStart(2, '0')}`
            const content = document.getElementById(contentId)

            if (content) {
              if (j === i) {
                content.style.display = 'flex'

                content.scrollTop = 0

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })

                const scrollContainers =
                  document.querySelectorAll('.scroll-container')
                scrollContainers.forEach((container) => {
                  container.scrollTop = 0
                })
              } else {
                content.style.display = 'none'
              }
            }
          }

          for (let k = 1; k <= totalItems; k++) {
            const btnId = `tusovochkaBtn${k.toString().padStart(2, '0')}`
            const btn = document.getElementById(btnId)

            if (btn) {
              if (k === i) {
                btn.classList.add('active')
              } else {
                btn.classList.remove('active')
              }
            }
          }
        })
      }
    }

    const firstContent = document.getElementById('tusovochka01')
    const firstButton = document.getElementById('tusovochkaBtn01')
    if (firstContent) firstContent.style.display = 'flex'
    if (firstButton) firstButton.classList.add('active')

    for (let i = 2; i <= totalItems; i++) {
      const contentId = `tusovochka${i.toString().padStart(2, '0')}`
      const content = document.getElementById(contentId)
      if (content) {
        content.style.display = 'none'
      }
    }
  }

  setupTusovochkaButtons()
})
