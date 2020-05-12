(function() {
const controlls = document.querySelectorAll('.size__link');
const activeClass = "size-switch--active";

    controlls.forEach(function(control) {
        control.addEventListener('click', function(e) {
            e.preventDefault();

            controlls.forEach(function(link) {
                link.closest('.size-switch').classList.remove(activeClass);
            });


            control.closest('.size-switch').classList.add(activeClass);
        });
    });

}());
