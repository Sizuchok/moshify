const collapsibles = document.querySelectorAll('.collapsible__header')

collapsibles.forEach(el => {
    el.addEventListener('click', e => {
        e.target.closest('.collapsible').classList.toggle('collapsible--expanded')
    })
})

// const collapsibles = document.querySelectorAll('.collapsible')

// collapsibles.forEach(el => {
//     el.addEventListener('click', function (){
//         this.classList.toggle('collapsible--expanded')
//     })
// })