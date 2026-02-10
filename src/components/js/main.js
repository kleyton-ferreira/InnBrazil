// ============================================
// ============================================  SHADOW - SCROLL -- ( SCROLL ) | TOP
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
      document.getElementById('count').innerHTML = ' ( Vendas Encerradas! )'
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
function scrollSmoth() {
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

// ============================================
// ============================================  ANIMATION / AND -- (SCROLL) | COMPONENTS
// ============================================

// const sr = ScrollReveal({
//     origin: 'top',
//     delay: 90,
//     distance: '24px',
//     duration: 1360,
//     easing: 'ease-in-out',
//     reset: true

// })

// // ============= HEADER
// sr.reveal('.header', { origin: 'left' })
// sr.reveal('.header_icons', { origin: 'top' })
// sr.reveal('.logo', { origin: 'bottom' })
// sr.reveal('#hamburguer', { origin: 'top' })
// sr.reveal('.banner_content', { origin: 'top' })
// sr.reveal('.header_institutional', { origin: 'left' })
// sr.reveal('.institutional_description', { origin: 'bottom' })

// // // ============= MAIN
// sr.reveal('.enterprise', { origin: 'left' })
// sr.reveal('.enterprise_content', { origin: 'left' })
// sr.reveal('.carousel ', { origin: 'left' })
// sr.reveal('.accordion', { origin: 'top' })
// sr.reveal('.doubts_whats ', { origin: 'top' })

// // // ============= FOOTER
// sr.reveal('.footer', { origin: 'left', reset: true })
