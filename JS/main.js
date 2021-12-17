// start header section

// get element container called logo 
let logo = document.getElementsByClassName("logo")[0];

// create button
let myButton = document.createElement("button");

// add id and class 
myButton.id = "id-toggle";
myButton.classList.add("class-toggle");

// create four span in button
let mySpanOne = document.createElement("span");
let mySpanTwo = document.createElement("span");
let mySpanThree = document.createElement("span");
let mySpanFour = document.createElement("span");

// add span in button
myButton.appendChild(mySpanOne);
myButton.appendChild(mySpanTwo);
myButton.appendChild(mySpanThree);
myButton.appendChild(mySpanFour);

// add button into container logo   
logo.appendChild(myButton)




// ==============================================================

// get element that called nav
let myNav = document.getElementsByTagName("nav")[0];


myButton.onclick = function () {
    if (myNav.style.getPropertyValue("display") === "" || myNav.style.getPropertyValue("display") === "none") {
        myNav.style.display = "block";
    }else {
        myNav.style.display = "none";
    }
}


// end header section

// start slide bullets section

let myBullet = document.querySelectorAll("#bullets li");
let myimages = document.getElementById("i-slide");

for (let i = 0; i < myBullet.length; i++) {
    myBullet[i].addEventListener("click", function (e) {
        for (let j = 0; j < myBullet.length; j++) {
            myBullet[j].classList.remove("active");
        }

        e.target.classList.add("active");

        if (myBullet[i] === myBullet[0]) {
            myimages.src = "Images/For_Slide/1.jpg";
        }else if (myBullet[i] === myBullet[1]) {
            myimages.src = "Images/For_Slide/2.jpg";
        }else if (myBullet[i] === myBullet[2]) {
            myimages.src = "Images/For_Slide/3.jpg";
        }else if (myBullet[i] === myBullet[3]) {
            myimages.src = "Images/For_Slide/4.jpg";
        }else if (myBullet[i] === myBullet[4]) {
            myimages.src = "Images/For_Slide/5.jpg";
        }
    })
}

// end slide bullets section


// use interval for slide
let count = 1;

let interval = window.setInterval(function () {
    
    for (let n = 0; n < myBullet.length; n++) {
        for (let m = 0; m < myBullet.length; m++){
            myBullet[m].classList.remove("active");
        }
        myBullet[count - 1].classList.add("active");
    }

    myimages.src = `Images/For_Slide/${count++}.jpg`;
    
    if (count === 6) {
        count = 1;
    }


},5000);

// use interval for slide