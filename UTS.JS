//home punya js

kotak1.addEventListener("mouseenter", function () {
  kotak1.style.backgroundColor = "olive";
  kotak1.style.fontFamily = "Snap ITC";
  kotak1.style.color = "white";
  kotak1.style.fontSize = "2 rem";

  const movieTitle = document.querySelector("#kotak1");
  const movieSynopsis = document.querySelector(".sinopsis1");

  movieTitle.addEventListener("click", function () {
    if (movieSynopsis.style.display === "none") {
      movieSynopsis.style.display = "block";
    } else {
      movieSynopsis.style.display = "none";
    }
  });
});

kotak1.addEventListener("mouseleave", function () {
  kotak1.style.backgroundColor = "white";
  kotak1.style.fontFamily = "calibri ";
  kotak1.style.color = "black";
});
kotak1.addEventListener("clik", function () {});

kotak2.addEventListener("mouseenter", function () {
  kotak2.style.backgroundColor = "olive";
  kotak2.style.fontFamily = "Snap ITC";
  kotak2.style.color = "white";
  kotak2.style.fontSize = "2 rem";
  const movieTitle2 = document.querySelector("#kotak2");
  const movieSynopsis2 = document.querySelector(".sinopsis2");

  movieTitle2.addEventListener("click", function () {
    if (movieSynopsis2.style.display === "none") {
      movieSynopsis2.style.display = "block";
    } else {
      movieSynopsis2.style.display = "none";
    }
  });
});
kotak2.addEventListener("mouseleave", function () {
  kotak2.style.backgroundColor = "white";
  kotak2.style.fontFamily = "calibri ";
  kotak2.style.color = "black";
});
kotak3.addEventListener("mouseenter", function () {
  kotak3.style.backgroundColor = "olive";
  kotak3.style.fontFamily = "Snap ITC";
  kotak3.style.color = "white";
  kotak3.style.fontSize = "2 rem";
  const movieTitle3 = document.querySelector("#kotak3");
  const movieSynopsis3 = document.querySelector(".sinopsis3");

  movieTitle3.addEventListener("click", function () {
    if (movieSynopsis3.style.display === "none") {
      movieSynopsis3.style.display = "block";
    } else {
      movieSynopsis3.style.display = "none";
    }
  });
});
kotak3.addEventListener("mouseleave", function () {
  kotak3.style.backgroundColor = "white";
  kotak3.style.fontFamily = "calibri ";
  kotak3.style.color = "black";
});
kotak4.addEventListener("mouseenter", function () {
  kotak4.style.backgroundColor = "olive";
  kotak4.style.fontFamily = "Snap ITC";
  kotak4.style.color = "white";
  kotak4.style.fontSize = "2 rem";
  const movieTitle4 = document.querySelector("#kotak4");
  const movieSynopsis4 = document.querySelector(".sinopsis4");

  movieTitle4.addEventListener("click", function () {
    if (movieSynopsis4.style.display === "none") {
      movieSynopsis4.style.display = "block";
    } else {
      movieSynopsis4.style.display = "none";
    }
  });
});
kotak4.addEventListener("mouseleave", function () {
  kotak4.style.backgroundColor = "white";
  kotak4.style.fontFamily = "cablibri ";
  kotak4.style.color = "black";
});
kotak5.addEventListener("mouseenter", function () {
  kotak5.style.backgroundColor = "olive";
  kotak5.style.fontFamily = "Snap ITC";
  kotak5.style.color = "white";
  kotak5.style.fontSize = "2 rem";
  const movieTitle5 = document.querySelector("#kotak5");
  const movieSynopsis5 = document.querySelector(".sinopsis5");

  movieTitle5.addEventListener("click", function () {
    if (movieSynopsis5.style.display === "none") {
      movieSynopsis5.style.display = "block";
    } else {
      movieSynopsis5.style.display = "none";
    }
  });
});
kotak5.addEventListener("mouseleave", function () {
  kotak5.style.backgroundColor = "white";
  kotak5.style.fontFamily = " calibri";
  kotak5.style.color = "black";
});

// toggle class active
const navbar = document.querySelector("#navbar2");
document.querySelector("#Hamburger-menu").onclick = () => {
  navbar.classList.toggle("active");
};

//ini intuk menghilangkan navbar ekstra dan dapat di klik dimanapun
const hamburger = document.querySelector("#Hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
