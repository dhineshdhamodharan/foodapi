//It will fetch the food images from the API.
function getFoodImages(food) {
  document.body.innerHTML=""
  elementCreation();
  for(i=0;i<20;i++){
  fetch(`https://foodish-api.herokuapp.com/api/images/${food}`, {
    method: "GET",
  })
  .then((data) => {
    console.log(data.json)
    return data.json();
  })
  .then((foodimage) => {  
  const foodList = document.createElement("div");
  foodList.className="food-images";
  foodList.innerHTML="";
  foodList.innerHTML = `
   <img class="food"  src=${foodimage.image}> </img>`;
   document.body.append(foodList);
  })
  .catch((msg)=>{
    console.log("Error Occured while calling the Food API..")
  })
}
}

//The elementCreation() is used to create the HTML elements.
function elementCreation() {
  const foodTitle = document.createElement("div");
foodTitle.className="food-container";
foodTitle.innerHTML = `<h1> Click on the below buttons to explore.... </h1>
<button class="button" onclick="getFoodImages('dosa')"> Dosa <Images </button>
<button class="button" onclick="getFoodImages('dessert')"> Dessert <Images </button>
<button class="button" onclick="getFoodImages('biryani')"> Biryani <Images </button>
<button class="button" onclick="getFoodImages('butter-chicken')"> Butter chicken <Images </button>
<button class="button" onclick="getFoodImages('burger')">Burgers<images></button>
<button class="button" onclick="getFoodImages('pasta')">Pasta<images></button>
<button class="button" onclick="getFoodImages('idly')">Idly<images></button>
<button class="button" onclick="getFoodImages('rice')">Rice<images></button>
<button class="button" onclick="getFoodImages('samosa')">Samosa<images></button>`;

document.body.append(foodTitle)
}

elementCreation();
