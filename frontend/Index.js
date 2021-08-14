var el = (e) => document.getElementById(e);
el('_1').onclick = function() {
    el('file1').click()
}
el('_2').onclick = function() {
    el('file2').click()
}
el('_3').onclick = function() {
    el('file3').click()

}
var open = false
el('open').onclick = () => {
    if (!open) {
        el('nav').style.display = 'block'

        el('open').innerHTML = 'x'
        open = !open
    } else {
        el('nav').style.display = 'none'

        el('open').innerHTML = '&#x2630;'
        open = !open
    }
}
el('apply').onclick = function() {
    el('about').style.display = 'none'
    el('testimony').style.display = 'none'
    el('application').style.display = 'flex'
}
el('contact').onclick = function() {
    el('about').style.display = 'flex'
    el('testimony').style.display = 'block'
    el('application').style.display = 'none'
}
el('about-btn').onclick = function() {
    el('about').style.display = 'flex'
    el('testimony').style.display = 'block'
    el('application').style.display = 'none'
}