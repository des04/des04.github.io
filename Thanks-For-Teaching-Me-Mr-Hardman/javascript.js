
/**
 * This function will take whatever item is being
 * selected to be shown and will get rid of the
 * dots after the title of the element and display
 * a paragraph, or will get rid of the paragraph
 * and display the three dots (depending on if
 * the dots are or aren't already displaying)
 */
function readMore(item) {
    /*
     * Each if statement is structured the same so
     * I will only go through this once.
     */
    /*
     * If the item has a value of one (if it represents
     * the first presented book on the webpage)
     */
    if (item == 1)
    {
        /*
         * Declare variables for the dots after the heading,
         * the text that is or is going to be hidden, and for
         * the button which was used to call this function.
         */
        var dots = document.getElementById("hungerGamesDots");
        var moreText = document.getElementById("hungerGamesMore");
        var btnText = document.getElementById("hungerGamesBtn");
        /*
         * If when the button wich calls this function is pressed
         * and the dots aren't currently being shown after the
         * heading (if the extra text is being shown)
         */
        if (dots.style.display == "none") {
            //Show the dots
            dots.style.display = "inline";
            /*
             * Change the button to say "Read More" instead of 
             * "Read Less"
             */
            btnText.innerHTML = "Read more";
            //Hide the extra text
            moreText.style.display = "none";
        }
        /*
         * If when the button wich calls this function is pressed
         * and the dots ARE currently being shown after the
         * heading (if the extra text isn't being shown)
         */
        else
        {
            //Hide the dots
            dots.style.display = "none";
            /*
             * Change the button to say "Read Less" instead of 
             * "Read More"
             */
            btnText.innerHTML = "Read less";
            //Show the extra text
            moreText.style.display = "inline";
        }
    }
    if (item == 2) {
        var dots = document.getElementById("catchingFireDots");
        var moreText = document.getElementById("catchingFireMore");
        var btnText = document.getElementById("catchingFireBtn");
        if (dots.style.display == "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        }
        else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    if (item == 3) {
        var dots = document.getElementById("mockingJayDots");
        var moreText = document.getElementById("mockingJayMore");
        var btnText = document.getElementById("mockingJayBtn");
        if (dots.style.display == "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        }
        else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    if (item == 4) {
        var dots = document.getElementById("underland1Dots");
        var moreText = document.getElementById("underland1More");
        var btnText = document.getElementById("underland1Btn");
        if (dots.style.display == "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        }
        else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    if (item == 5) {
        var dots = document.getElementById("underland2Dots");
        var moreText = document.getElementById("underland2More");
        var btnText = document.getElementById("underland2Btn");
        if (dots.style.display == "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        }
        else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    if (item == 6) {
        var dots = document.getElementById("underland3Dots");
        var moreText = document.getElementById("underland3More");
        var btnText = document.getElementById("underland3Btn");
        if (dots.style.display == "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        }
        else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    if (item == 7) {
        var dots = document.getElementById("underland4Dots");
        var moreText = document.getElementById("underland4More");
        var btnText = document.getElementById("underland4Btn");
        if (dots.style.display == "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        }
        else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    if (item == 8) {
        var dots = document.getElementById("underland5Dots");
        var moreText = document.getElementById("underland5More");
        var btnText = document.getElementById("underland5Btn");
        if (dots.style.display == "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        }
        else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }


   
}

/*
 * This function will filter in/out items on a
 * list depending on what is entered into a
 * searchbar. Then, if a user selects an item,
 * they will be taken to a link that corresponds
 * with it.
 */
function search() {
    // Declaration of variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("booksUL");
    li = ul.getElementsByTagName('li');

    /*
     * Here the code loops through all of the items 
     * and hides them if they don't match the user 
     * input
     */ 
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}