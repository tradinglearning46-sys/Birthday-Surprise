const startButton = document.getElementById("startButton");

const nextButton = document.getElementById("nextButton");

const letterButton = document.getElementById("letterButton");

const scene1 = document.getElementById("scene1");

const scene2 = document.getElementById("scene2");

const scene3 = document.getElementById("scene3");

const scene4 = document.getElementById("scene4");

const scene5 = document.getElementById("scene5");

const birthdayMusic = document.getElementById("birthdayMusic");


/* ============================= */
/* SCENE 1 → SCENE 2 */
/* ============================= */

startButton.addEventListener("click", function() {

    /* Start music */

    birthdayMusic.volume = 0.25;

    birthdayMusic.play().catch(function() {

        console.log("Music could not start.");

    });


    scene1.classList.add("fade-out");


    setTimeout(function() {

        scene1.classList.add("hidden");

        scene2.classList.remove("hidden");

    }, 800);

});


/* ============================= */
/* SCENE 2 → SCENE 3 */
/* ============================= */

nextButton.addEventListener("click", function() {

    scene2.classList.add("fade-out");


    setTimeout(function() {

        scene2.classList.add("hidden");

        scene3.classList.remove("hidden");

    }, 800);

});


/* ============================= */
/* 🎈 BALLOON POPPING */
/* ============================= */

const balloons = document.querySelectorAll(".balloon");

let poppedCount = 0;


balloons.forEach(function(balloon) {

    balloon.addEventListener("click", function() {

        /* Don't pop the same balloon twice */

        if (balloon.classList.contains("popped")) {

            return;

        }


        /* Find the matching note */

        const noteNumber = balloon.dataset.note;

        const note = document.getElementById(
            "note" + noteNumber
        );


        /* Pop balloon */

        balloon.classList.add("popped");


        /* Count the popped balloon */

        poppedCount++;


        setTimeout(function() {

            balloon.style.display = "none";

            note.classList.add("show");


            /* ============================= */
            /* ALL 5 BALLOONS POPPED */
            /* ============================= */

            if (poppedCount === 5) {

                setTimeout(function() {

                    scene3.classList.add("fade-out");


                    setTimeout(function() {

                        scene3.classList.add("hidden");

                        scene4.classList.remove("hidden");

                    }, 800);

                }, 1200);

            }

        }, 250);

    });

});


/* ============================= */
/* SCENE 4 → SCENE 5 */
/* ============================= */

letterButton.addEventListener("click", function() {

    scene4.classList.add("fade-out");


    setTimeout(function() {

        scene4.classList.add("hidden");

        scene5.classList.remove("hidden");

    }, 800);

});
