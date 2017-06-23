import './vendor.js';
import './index.css';

/* eslint-disable no-undef */

// Setup Particles Configuration and initialize it
const particlesConfig = {
  "particles": {
    "number": {
      "value": 101,
      "density": {
        "enable": true,
        "value_area": 561.1807242438086
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
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.5,
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
      "opacity": 0.55,
      "width": 1.8
    },
    "move": {
      "enable": true,
      "speed": 4,
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
particlesJS('particles-js', particlesConfig);

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
document.getElementById("nav-toggle").addEventListener ("click", toggleNav);

// var button = document.querySelector('.is-dropdown');
// var dropdown = document.querySelector('.dropdown');
//
// button.addEventListener('click', function(){
//   dropdown.classList.toggle('is-open');
//   button.classList.toggle('is-active');
// });

   // The following code is based off a toggle menu by @Bradcomp
   // source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
// (function() {
//   var burger = document.querySelector('.nav-toggle');
//   var menu = document.querySelector('.nav-menu');
//   burger.addEventListener('click', function() {
//     burger.classList.toggle('is-active');
//     menu.classList.toggle('is-active');
//   });
//  })();

// import {getUsers, deleteUser} from './api/userApi';

// Populate table of users via API call.
// getUsers().then(result => {
//   let usersBody = "";
//
//   result.forEach(user => {
//     usersBody+= `<tr>
//       <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
//       <td>${user.id}</td>
//       <td>${user.firstName}</td>
//       <td>${user.lastName}</td>
//       <td>${user.email}</td>
//       </tr>`
//   });
//
//   global.document.getElementById('users').innerHTML = usersBody;
//
//   const deleteLinks = global.document.getElementsByClassName('deleteUser');
//
//   // Must use array.from to create a real array from a DOM collection
//   // getElementsByClassname only returns an "array like" object
//   Array.from(deleteLinks, link => {
//     link.onclick = function(event) {
//       const element = event.target;
//       event.preventDefault();
//       deleteUser(element.attributes["data-id"].value);
//       const row = element.parentNode.parentNode;
//       row.parentNode.removeChild(row);
//     };
//   });
// });
