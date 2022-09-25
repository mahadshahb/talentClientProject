        var i = 0; //first slide

        var slides = document.getElementsByClassName('slide');
        var slideCount = slides.length;

        //Position last slide on left of first slide
        slides[slideCount - 1].style.left = "-100%";

        function moveLeft(e) {
            e.preventDefault();
            i++; // i standing for the index of the current slide i = i + 1
            if (i < slideCount) { // for all slides
                slides[i].style.visibility = "visible"; // Set current slide to visible
                slides[i - 1].style.left = "-100%"; // move previous slide
                slides[i].style.left = "0"; // move current slide to center

                console.log("advance, i = " + i);

            } else { // if i exceeds slidecount, then set back to 0
                i = 0; // SET CURRENT SLIDE BACK TO 0
                slides[i].style.visibility = "visible"; // set current slide visible
                slides[slideCount - 1].style.left = "-100%"; //move last slide to left
                slides[i].style.left = "0"; //move first slide to center

                console.log("back to start, i = " + i);

                // RESET ALL OTHER SLIDES
                for (var x = 1; x < slides.length - 1; x++) {
                    slides[x].style.visibility = "hidden"; // hide during reset
                    slides[x].style.left = "100%"; //move all slides back to start position
                }
            }
            if (i === slideCount - 1) { // reset slide 0 on last slide
                slides[0].style.visibility = "hidden";
                slides[0].style.left = "100%";
            }
            if (i === slideCount - 2) { // reset last slide just before it's turn
                slides[slideCount - 1].style.visibility = "hidden";
                slides[slideCount - 1].style.left = "100%";
            }
        }

        function moveRight(e) {
            e.preventDefault();
            if (i > 0) { // THIS CHANGES FROM i < slideCount // run code for slides 1 and higher
                i--; // decrease value of i by one 
                slides[i].style.visibility = "visible"; // current slide visible
                slides[i + 1].style.left = "100%"; //THIS CHANGES FROM i -1 // move previous slide to the right
                slides[i].style.left = "0"; // move current slide to center

            } else { // if current slide is 0, last slide becomes current slide

                // SET CURRENT SLIDE to LAST SLIDE
                i = slideCount - 1; // CHANGES FROM i = 0 // set current slide to last slide
                slides[i].style.visibility = "visible"; // current slide visible
                slides[0].style.left = "100%"; // move first slide right
                slides[i].style.left = "0"; // move last slide center

                console.log("end, i = " + i);

                // RESET ALL OTHER SLIDES
                for (var x = 1; x < slides.length - 1; x++) {
                    slides[x].style.visibility = "hidden"; // set to invisible while reseting
                    slides[x].style.left = "-100%"; // all other slides go to left
                }
            }
            if (i === 1) { //move first slide back to left
                slides[0].style.visibility = "hidden";
                slides[0].style.left = "-100%";
            }
            if (i === 0) { //move last slide back to left
                slides[slideCount - 1].style.visibility = "hidden";
                slides[slideCount - 1].style.left = "-100%";
            }
        }

        document.getElementById('prev').onclick = moveRight;

        var nextBut = document.getElementById('next');
        nextBut.onclick = moveLeft;