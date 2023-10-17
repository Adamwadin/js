let movieList;

fetch("http://medieinstitutet-wie-products.azurewebsites.net/api/products")
  .then((data) => {
    return data.json();
  })

  .then((response) => {
    //console.log(response);
    movieList = response;
    createHtml(response);
  });

function createHtml(response) {
  document.getElementById("cards").innerHTML = "";
  let data1 = "";

  response.forEach((movie) => {
    console.log(movie);

    data1 += `<div class="card">
                                <h1 class="Title">${movie.name}</h1>
                                <img src="${movie.imageUrl}" alt="img" class="images">
                                <p> ${movie.description}</p>
                                <p class="Year">${movie.year}</p>
                                <p class="Type">d${movie.price}</p>
                              </div>`;
  });
  document.getElementById("cards").innerHTML = data1;
  return data1;
}

function sortList() {
  const selectBox = document.getElementById("sortOrder");
  if (selectBox.value === "nameAsc") {
    movieList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }
  if (selectBox.value === "nameDesc") {
    movieList.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  }
  if (selectBox.value === "priceAsc") {
    movieList.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
  }
  if (selectBox.value === "priceDesc") {
    movieList.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
      return 0;
    });
  }
  if (selectBox.value === "yearDesc") {
    movieList.sort((a, b) => {
      if (a.year > b.year) {
        return -1;
      }
      if (a.year < b.year) {
        return 1;
      }
      return 0;
    });
  }
  if (selectBox.value === "yearAsc") {
    movieList.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      }
      if (a.year < b.year) {
        return -1;
      }
      return 0;
    });
  }

  createHtml(movieList);
}
