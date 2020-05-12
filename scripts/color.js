(function() {
const controlls = document.querySelectorAll('.color__switch');
const activeClass = 'color__switch--active';

    controlls.forEach(function(control) {

        control.addEventListener('click', function(e) {

            e.preventDefault();

            controlls.forEach(function(link) {
                link.closest('.color__filter').classList.remove(activeClass);
            });


            control.closest('.color__filter').classList.add(activeClass);
        });
    });

}());