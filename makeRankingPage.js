module.exports = { loadPage };
// module.exports = { loadPage };
// module.exports = { loadPage };
function loadPage(callback) {
  setTimeout(() => {
    const Ranking = require("./mainData");
    Ranking.loadRanking((movieRanking) => {
      console.log(movieRanking);
      console.log("Load Ranking Done!");
      const first = movieRanking.shift();
      const second = movieRanking.shift();
      const third = movieRanking.shift();
      const forth = movieRanking.shift();
      const fifth = movieRanking.shift();
      const sixth = movieRanking.shift();
      const seventh = movieRanking.shift();
      const header = `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--<script data-main="scripts/app" src="scripts/require.js"></script>-->
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    <!-- Link CSS file -->
    <link rel="stylesheet" href="style3.css" />

    <title>MovieSelector</title>
  </head>
  <body>`;
      const footer = `<!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`;
      const body3 = `

    <h1>1 ${first.title},2 ${second.title},3 ${third.title}</h1>
    <hr />
    <p>이런 영화도 있어요</p>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <strong>4위</strong>
            <div class="accordion-item">
              <img src="${forth.img}" width="200px" height="auto" alt="4" />
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <p>${forth.title}</p>
              </button>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <ul>
                    <li>개봉일: ${forth.date}</li>
                    <li>장르: ${forth.genre}</li>
                    <li>평균평점: ${forth.avg}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <strong>5위</strong>
            <div class="accordion-item">
              <img src="${fifth.img}" width="200px" height="auto" alt="5" />
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <p>${fifth.title}</p>
              </button>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <ul>
                    <li>개봉일: ${fifth.date}</li>
                    <li>장르: ${fifth.genre}</li>
                    <li>평균평점: ${fifth.avg}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <strong>6위</strong>
            <div class="accordion-item">
              <img src="${sixth.img}" width="200px" height="auto" alt="6" />

              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <p>${sixth.title}</p>
              </button>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <ul>
                    <li>개봉일: ${sixth.date}</li>
                    <li>장르: ${sixth.genre}</li>
                    <li>평균평점: ${sixth.avg}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <strong>7위</strong>
            <div class="accordion-item">
              <img src="${seventh.img}" width="200px" height="auto" alt="7" />
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <p>${seventh.title}</p>
              </button>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <ul>
                    <li>개봉일: ${seventh.date}</li>
                    <li>장르: ${seventh.genre}</li>
                    <li>평균평점: ${seventh.avg}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  `;
      const page = header + body3 + footer;
      callback(page);
    });
  }, 0);
}

/* check makeRankingPage
loadPage((page) => {
  console.log(page);
  console.log("Done!");
});
*/
