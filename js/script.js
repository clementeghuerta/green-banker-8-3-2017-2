/*
console.log('working');


$(function(){	
var direction = "",
    oldx = 0,
    mousemovemethod = function (e) {
    
        if (e.pageX < oldx) {
            $('.animation').addClass('.animation-2');
        } else if (e.pageX > oldx) {
            $('.animation').addClass('.animation-1');
        }
        
        document.body.innerHTML = direction;
        
        oldx = e.pageX;
        
        console.log('working');
}
});



console.log('working');


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}


*/
$(function () { $(".carousel").carousel({ interval: 3000 }); });

// Navbar and dropdowns
var toggle = document.getElementsByClassName('navbar-toggle')[0],
    collapse = document.getElementsByClassName('navbar-collapse')[0],
    dropdowns = document.getElementsByClassName('dropdown');;

// Toggle if navbar menu is open or closed
function toggleMenu() {
    collapse.classList.toggle('collapse');
    collapse.classList.toggle('in');
}

// Close all dropdown menus
function closeMenus() {
    for (var j = 0; j < dropdowns.length; j++) {
        dropdowns[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open');
        dropdowns[j].classList.remove('open');
    }
}

// Add click handling to dropdowns
for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function() {
        if (document.body.clientWidth < 768) {
            var open = this.classList.contains('open');
            closeMenus();
            if (!open) {
                this.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open');
                this.classList.toggle('open');
            }
        }
    });
}

// Close dropdowns when screen becomes big enough to switch to open by hover
function closeMenusOnResize() {
    if (document.body.clientWidth >= 768) {
        closeMenus();
        collapse.classList.add('collapse');
        collapse.classList.remove('in');
    }
}

// Event listeners
window.addEventListener('resize', closeMenusOnResize, false);
toggle.addEventListener('click', toggleMenu, false);