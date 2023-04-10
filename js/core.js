const collapsibles = document.querySelectorAll('.collapsible__launcher')

collapsibles.forEach(el => {
    el.addEventListener('click', e => {
        e.target.closest('.collapsible').classList.toggle('collapsible--expanded')
    })
})