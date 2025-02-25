
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

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 18,
                "density": {
                    "enable": false,
                    "value_area": 900
                }
            },
            "color": {
                "value": ["#6c5ce7", "#F78C01", "#17a2b8", "#2e3d62"]
            },
            "shape": {
                "type": ["circle", "polygon"],
                "stroke": {
                    "width": 0,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "size_min": 1,
                    "sync": true
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 1,
                    "sync": true
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#fff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "top",
                "random": true,
                "straight": true,
                "out_mode": "bounce",
                "attract": {
                    "enable": false,
                    "rotateX": 800,
                    "rotateY": 1600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 99
                },
                "repulse": {
                    "distance": 200
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
    }

);