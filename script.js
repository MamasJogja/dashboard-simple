const menu = document.getElementById('menu-label')
const sidebar = document.getElementsByClassName('sidebar')[0]
const navbar = document.getElementsByClassName('navbar')[0]

menu.addEventListener('click', function() {
    sidebar.classList.toggle('hide');
    navbar.classList.toggle('cut')
})