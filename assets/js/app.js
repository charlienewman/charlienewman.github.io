/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('top',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
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
        "value": 0.2,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
          "enable_auto": true,
          "distance": 100,
          "color": '#fff',
          "opacity": 0.2,
          "width": 1,
          "condensed_mode": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
          }
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
        enable: true,
        mouse: {
            distance: 300
        },
        detect_on: 'canvas',
        mode: 'grab',
        line_linked: {
            opacity: .4
        },
        events: {
            onclick: {
                enable: false,
                mode: 'push',
                nb: 4
            },
            onresize: {
                enable: true,
                mode: 'bounce',
                density_auto: false,
                density_area: 800
            }
        }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "pink",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);




