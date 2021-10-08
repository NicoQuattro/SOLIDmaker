const { counterUp } = window.counterUp

const el = document.querySelector( '.counter' )

counterUp( el, {
    duration: 5000,
    delay: 16,
} )
