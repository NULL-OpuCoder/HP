window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-items-button');
    var $items = document.querySelector('.header-site-items');
    $button.addEventListener('click', function () {
        if ($items.classList.contains('is-show')) {
            $items.classList.remove('is-show');
        }
        else {
            $items.classList.add('is-show');
        }
    });
});



