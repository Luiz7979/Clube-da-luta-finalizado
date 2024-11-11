const $html = document.querySelector('html');
const $element = document.querySelector('#btnmode');
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

$element.addEventListener('click', () => {
    $html.classList.toggle('darkMode');
    
    if ($html.classList.contains('darkMode')) {
        title.textContent = "Tyler";
        subtitle.textContent = "Absurdista";
    } else {
        title.textContent = "Narrador";
        subtitle.textContent = "Nihilista";
    }
});

