document.addEventListener('DOMContentLoaded', (event) => {
    const dropdowns = document.querySelectorAll('.custom-dropdown-toggle');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function () {
            const menu = this.nextElementSibling;
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                closeAllDropdowns();
                menu.style.display = "block";
            }
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.custom-dropdown')) {
            closeAllDropdowns();
        }
    });

    function closeAllDropdowns() {
        const menus = document.querySelectorAll('.custom-dropdown-menu');
        menus.forEach(menu => {
            menu.style.display = "none";
        });
    }

    window.filterFunction1 = function (event) {
        event.stopPropagation();
        filterFunctionGeneric('dropdownSearch1', 'languageDropdownMenu');
    };

    window.filterFunction2 = function (event) {
        event.stopPropagation();
        filterFunctionGeneric('dropdownSearch2', 'titleDropdownMenu');
    };

    window.filterFunction3 = function (event) {
        event.stopPropagation();
        filterFunctionGeneric('dropdownSearch3', 'genderDropdownMenu');
    };

    window.filterFunction4 = function (event) {
        event.stopPropagation();
        filterFunctionGeneric('dropdownSearch4', 'provinceDropdownMenu');
    };

    function filterFunctionGeneric(searchId, menuId) {
        var input, filter, a, i;
        input = document.getElementById(searchId);
        filter = input.value.toUpperCase();
        div = document.getElementById(menuId);
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }

    const normalDropdownItems = document.querySelectorAll('.custom-dropdown-menu a:not(.language-dropdown .dropdown-item)');
    normalDropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            if (!this.classList.contains('disabled')) {
                event.preventDefault();
                const dropdownButton = this.closest('.custom-dropdown').querySelector('.custom-dropdown-toggle');
                dropdownButton.innerHTML = this.innerHTML.trim() + `<span class="dropdown-arrow">&#9662;</span>`;
                closeAllDropdowns();
            }
        });
    });

    const languageDropdownItems = document.querySelectorAll('.language-dropdown .dropdown-item');
    languageDropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            if (!this.classList.contains('disabled')) {
                event.preventDefault();
                const dropdownButton = this.closest('.custom-dropdown').querySelector('.custom-dropdown-toggle');
                const flag = this.getAttribute('data-flag');
                const value = this.getAttribute('data-value');
                dropdownButton.innerHTML = `<img class="mr-2" src="${flag}" alt="${value} Flag" width="20" height="15"> ${value} <span class="dropdown-arrow">&#9662;</span>`;
                closeAllDropdowns();
            }
        });
    });
});
