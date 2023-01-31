/*********************************************************************************
 *  WEB422 – Assignment 2
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Xiaoyue Zhao          Student ID: 124899212      Date: Jan 30
 *
 ********************************************************************************/

// Set default value
let page = 1;
let perPage = 10;

// Loading The Data
function loadMovieData(title = null) {
  let url = title
    ? `https://long-plum-dalmatian-gear.cyclic.app/api/movies?page=${page}&perPage=${perPage}&title=${title}`
    : `https://long-plum-dalmatian-gear.cyclic.app/api/movies?page=${page}&perPage=${perPage}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // Creating the <tr> Elements
      let moviesRows = `
      ${data
        .map(
          (movie) =>
            `<tr data-id=${movie._id}>
                  <td>${movie.year}</td>
                  <td>${movie.title}</td>
                  <td>${movie.plot || "N/A"}</td>
                  <td>${movie.rated || "N/A"}</td>
                  <td>${
                    Math.floor(movie.runtime / 60) +
                    ":" +
                    (movie.runtime % 60).toString().padStart(2, "0")
                  }</td>  
              </tr>`
        )
        .join("")}
      `;

      // Adding <tr> Elements to the Table
      document.querySelector("#moviesTable tbody").innerHTML = moviesRows;

      // Updating the "Current Page"
      document.querySelector("#current-page").innerHTML = page;

      // Adding Click Events & Loading / Displaying Movie Data
      document.querySelectorAll("#moviesTable tbody tr").forEach((row) => {
        row.addEventListener("click", (event) => {
          let clickedId = row.getAttribute("data-id");

          fetch(
            `https://long-plum-dalmatian-gear.cyclic.app/api/movies/${clickedId}`
          )
            .then((res) => res.json())
            .then((data) => {
              let movieTitle = `${data.title}`;

              movieDetails = `
                ${`    
                <img class="img-fluid w-100" src=${
                  data.poster ||
                  "https://live.staticflickr.com/6088/6058198288_20f973463e_b.jpg"
                }></img><br><br>
                <strong>Directed By:</strong> ${data.directors.join(
                  ", "
                )}<br><br>
                <p>${data.fullplot}</p>
                <strong>Cast:</strong> ${data.cast.join(", ") || "N/A"}<br><br>
                <strong>Awards:</strong> ${data.awards.text}<br> 
                <strong>IMDB Rating:</strong> ${
                  data.imdb.rating + " (" + data.imdb.votes + " votes)"
                }`}
                `;

              document.querySelector("#detailsModal .modal-title").innerHTML =
                movieTitle;

              document.querySelector("#detailsModal .modal-body").innerHTML =
                movieDetails;

              let modal = new bootstrap.Modal(
                document.getElementById("detailsModal"),
                {
                  backdrop: "static",
                  keyboard: false,
                }
              );

              modal.show();
            })
            .catch((error) => {
              console.log("Request failed", error);
            });
        });
      });
    });
}

// Execute when the DOM is 'ready'
document.addEventListener("DOMContentLoaded", function () {
  loadMovieData();

  // Click event for the "previous page" pagination button
  document.querySelector("#previous-page").addEventListener("click", (e) => {
    if (page > 1) page--;
    loadMovieData();
  });

  // Click event for the "next page" pagination button
  document.querySelector("#next-page").addEventListener("click", (e) => {
    page++;
    loadMovieData();
  });

  // Submit event for the "searchForm" form
  document.querySelector("#searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    loadMovieData(document.querySelector("#searchForm #title").value);
  });

  // Click event for the "clearForm" form
  document.querySelector("#clearForm").addEventListener("click", (event) => {
    document.querySelector("#searchForm #title").innerHTML = "";
    loadMovieData();
  });
});
