// ============================================
// ============================================  LOADER - ( "" )
// ============================================
const handleLoader = () => {
  window.addEventListener('load', function () {
    const loaderSpin = document.querySelector('.loader-spin')
    if (loaderSpin) {
      loaderSpin.style.transition = 'opacity 20s ease'
      loaderSpin.style.opacity = '0'
      setTimeout(function () {
        loaderSpin.style.display = 'none'
      }, 3000)
    }
  })
}

handleLoader()

// ============================================
// ============================================  SHADOW - SCROLL -- ( NAV-BAR ) | TOP
// ============================================
const shadowScroll = () => {
  window.onscroll = function () {
    let navbar = document.getElementById('shadow')
    if (window.scrollY > 0) {
      navbar.classList.add('shadow-scroll')
    } else {
      navbar.classList.remove('shadow-scroll')
    }
  }
}

shadowScroll()

// ============================================
// ============================================ MOVE ( IMAGE! )
// ============================================
const moveFunction = () => {
  let moverImage = $(window).width()
  $('.banner').mousemove(function (event) {
    const moveX = ($(window).width() / 2 - event.pageX) * 0.1
    $('.image-move').css('margin-left', moveX + 'px')
  })
  return moverImage
}
moveFunction()

// ============================================
// ============================================ COUNTDOWN ( DATE! )
// ============================================
const handleCountdown = () => {
  const STORAGE_KEY = 'STORAGE_KEY-(Countdow(Date))'

  function getEndDate() {
    const savedDate = localStorage.getItem(STORAGE_KEY)

    if (savedDate) {
      return new Date(savedDate)
    }

    const now = new Date()
    const endDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)

    localStorage.setItem(STORAGE_KEY, endDate.toISOString())
    return endDate
  }

  const endDate = getEndDate()

  function updateCountdown() {
    const now = new Date()
    const countdownTime = endDate - now

    if (countdownTime <= 0) {
      document.getElementById('count').innerHTML = ' ( VIRADA DE LOTE )'
      localStorage.removeItem(endDate)
      return
    }

    const days = Math.floor(countdownTime / (1000 * 60 * 60 * 24))
    const hours = Math.floor((countdownTime / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((countdownTime / (1000 * 60)) % 60)
    const seconds = Math.floor((countdownTime / 1000) % 60)

    document.querySelector('[data-days]').textContent = String(days).padStart(
      2,
      '0'
    )
    document.querySelector('[data-hours]').textContent = String(hours).padStart(
      2,
      '0'
    )
    document.querySelector('[data-minutes]').textContent = String(
      minutes
    ).padStart(2, '0')
    document.querySelector('[data-seconds]').textContent = String(
      seconds
    ).padStart(2, '0')
  }

  updateCountdown()
  setInterval(updateCountdown, 1000)
}
handleCountdown()

// ============================================
// ============================================ DARKMODE ( LIGTH AND DARK )
// ============================================
const darkModeColor = () => {
  let darkmode = localStorage.getItem('darkmode')
  const themeSwitch = document.getElementById('theme-switch')

  const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
  }

  const disabledDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
  }

  if (darkmode === 'active') enableDarkmode()

  themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== 'active' ? enableDarkmode() : disabledDarkmode()
  })
}

darkModeColor()

// ============================================
// ============================================ SCROOL SUAVE
// ============================================
const scrollSmoth = () => {
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}
scrollSmoth()

// ============================================
// ============================================ ACCORDION
// ============================================
const handlAccordion = () => {
  const acc_btn = document.querySelectorAll('.accordion_info')
  const acc_contents = document.querySelectorAll('.accordion_description')

  acc_btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      acc_contents.forEach((acc) => {
        if (
          e.target.nextElementSibling !== acc &&
          acc.classList.contains('power')
        ) {
          acc.classList.remove('power')
          acc_btn.forEach((btn) => btn.classList.remove('power'))
        }
      })
      const panel = btn.nextElementSibling
      panel.classList.toggle('power')
      btn.classList.toggle('power')
    })
  })

  window.onclick = (e) => {
    if (!e.target.matches('.accordion_info')) {
      acc_btn.forEach((btn) => btn.classList.remove('power'))
      acc_contents.forEach((acc) => acc.classList.remove('power'))
    }
  }
}

handlAccordion()

// ============================================
// ============================================ SCROLL SOFT
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
}, {})
const todoElements = document.querySelectorAll('.scrollBlur')
todoElements.forEach((el) => observer.observe(el))
