const buttonLoad = document.getElementById("buttonLoad");


const cercacose = function (ricerca) {
  fetch(`https://api.pexels.com/v1/search?query=${ricerca}&per_page=9`, {
    headers: {
      authorization:
        "CLAQ4dhVQGFkVWNbuioZlHGles3kNqWgzQ9C37mTnwPZyW1BL6NAzQNd ",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((arrayOfpig) => {
      const arrayPhoto = arrayOfpig.photos;
      arrayPhoto.forEach((objectphoto, index) => {
        document.querySelectorAll("img")[index].setAttribute("src", objectphoto.src.medium);
        document.getElementsByClassName("card-title")[index].innerText= objectphoto.alt
        
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const loadFirstButton = function () {
  cercacose("giraff");
};

document.getElementById("buttonSecondary").addEventListener("click", () => {
  cercacose("pig");
});

document.getElementById("formRicerca").addEventListener("submit", (e) => {
  e.preventDefault();
  cercacose(document.getElementById("ricerca").value);
});
