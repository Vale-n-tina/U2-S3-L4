const buttonLoad = document.getElementById("buttonLoad");
const imgs = document.querySelectorAll("img");





const loadFirstButton = function () {
  fetch("https://api.pexels.com/v1/search?query=giraff&per_page=9", {
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
    .then((arrayOfGiraf) => {
      const contphoto = arrayOfGiraf.photos;

      contphoto.forEach((objectphoto, index) => {
        
        imgs[index].setAttribute("src", objectphoto.src.medium);
       
      });
    })

    .catch((error) => {
      console.log(error);
    });
};


const buttonSecondary=document.getElementById("buttonSecondary")
buttonSecondary.addEventListener("click",()=>{
    fetch("https://api.pexels.com/v1/search?query=pig&per_page=9", {headers: {
        authorization:
          "CLAQ4dhVQGFkVWNbuioZlHGles3kNqWgzQ9C37mTnwPZyW1BL6NAzQNd ",
      },
     })
     .then((response)=>{
         if(response.ok){
             return response.json()
            }else{
                throw new Error ("errore")
            }
        })
        .then((arrayOfpig)=>{
         
        const arrayPhoto=arrayOfpig.photos
        arrayPhoto.forEach((objectphoto,index)=>{
            imgs[index].setAttribute("src", objectphoto.src.medium)
        })
     })
     .catch((error)=>{
        console.log(error)
     })
})