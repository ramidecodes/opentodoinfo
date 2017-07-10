import './vendor.js';
import './index.css';
import './images/Favicon64.png';

/* eslint-disable no-undef, no-console*/
// Setup Particles Configuration and initialize it
const particlesConfig = {
  "particles": {
    "number": {
      "value": 64,
      "density": {
        "enable": true,
        "value_area": 692
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.7,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 144.30361480555078,
      "color": "#ffffff",
      "opacity": 0.75,
      "width": 1.8
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

// Toggle behaviour for mobile navigation
function toggleNav() {
  var nav = document.getElementById("nav-menu");
  var className = nav.getAttribute("class");
  if(className == "nav-right nav-menu") {
    nav.className = "nav-right nav-menu is-active";
  } else {
    nav.className = "nav-right nav-menu";
  }
}

// Toggle behaviour for dropdowns
var dropdownList = document.body.querySelectorAll('.dropdown-toggle');

function toggleDropdown() {
  var target = this.parentNode.parentNode.querySelector(this.getAttribute('data-target'));
  target.classList.toggle('is-hidden');
}

// Toggle behaviour for Modals
var modalTriggerList = document.body.querySelectorAll('.modal-trigger');
var modalCloseList = document.body.querySelectorAll('button.delete, .modal-background');

function toggleModal() {
  var target = document.querySelector(this.getAttribute('data-target'));
  target.classList.toggle('is-active');
}

// Do everything after when document is loaded
document.addEventListener("DOMContentLoaded", function(){

    particlesJS('particles-js', particlesConfig);

    document.getElementById("nav-toggle").addEventListener ("click", toggleNav);

    // Add Event Listeners to every instance of a dropList
    for (var dropElement of dropdownList){
      dropElement.addEventListener('click', toggleDropdown );
    }

    // Add Event Listeners to every instance of a modal trigger
    for (var modalTrigger of modalTriggerList){
      modalTrigger.addEventListener('click', toggleModal );
    }

    // Add Event Listeners to close Modals
    for (var modalClose of modalCloseList){
      modalClose.addEventListener('click', toggleModal );
    }

    // Handle From Submition with AJAX
    document.getElementById("enviar").addEventListener("click", function(event){
      event.preventDefault();

      var spinner = document.querySelector("#enviar i");
      spinner.classList.toggle('is-hidden');

      var http = new XMLHttpRequest();

      http.open("POST", "/contact", true);
      http.setRequestHeader("Content-type","application/x-www-form-urlencoded");


      var parName = document.querySelector("input[name='name']").value;
      var parEmail = document.querySelector("input[name='email']").value;
      var parSubject = document.querySelector("input[name='subject']").value;
      var parMessage = document.querySelector("textarea[name='message']").value;
      var params = `name=${parName}&email=${parEmail}&subject=${parSubject}&message=${parMessage}`;

      http.onreadystatechange = function() {
        if (http.readyState == http.DONE && http.responseText == "Enviado")  {

          spinner.classList.add('is-hidden');

          let target = document.getElementById("confirmation");
          target.classList.remove('is-hidden');
        }
      };

      http.send(params);

    }); // End of From Submition with AJAX

}); // End of OnDOMLoad
