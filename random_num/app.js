function randomFact(n) {
  let url = `http://numbersapi.com/${n}?json`;
  axios
    .get(url)
    .then((response) => showRanFact(response.data))
    .catch((err) => alert(err));
}

function showRanFact(response) {
  $("#luckyNum").text(response.number);
  $("#fact").text(response.text);
  $("#usrNum").val("");
}

$("#singleBtnFact").on("click", function (e) {
  e.preventDefault();
  let n = $("#usrNum").val();
  randomFact(n);
});

//multiple nums
// let lucky_nums = [1, 45, 7];
// axios
//   .get(`http://numbersapi.com/${lucky_nums}?json`)
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

//return 4 facts
// function getMultFacts(n) {
//   let facts = [];
//   let url = `http://numbersapi.com/${n}?json`;
//   axios
//     .get(url)
//     .then((response) => {
//       facts.push(response.data.text);
//       return axios.get(url);
//     })
//     .then((response) => {
//       facts.push(response.data.text);
//       return axios.get(url);
//     })
//     .then((response) => {
//       facts.push(response.data.text);
//       return axios.get(url);
//     })
//     .then((response) => {
//       facts.push(response.data.text);
//       return axios.get(url);
//     })
//     .then((response) => showMultFacts(response.data.number, facts))
//     .catch((err) => alert(err));
// }

// function showMultFacts(num, responses) {
//   $("#luckyNum").text(num);
//   $.each(responses, function (i) {
//     $("#fact").append(`<p>${i + 1}. ${this}</p>`);
//   });
//   $("#usrNum").val("");
// }

//return 4 facts with pomise.all
function getMultFacts(n) {
  let facts = [];
  let url = `http://numbersapi.com/${n}?json`;
  for (let i = 1; i < 5; i++) {
    facts.push(axios.get(url));
  }

  Promise.all(facts)
    .then((factsArr) => {
      $.each(factsArr, function (i) {
        $("#fact").append(`<p>${i + 1}. ${this.data.text}</p>`);
      });
      $("#usrNum").val("");
    })
    .catch((err) => console.log(err));
}
$("#multBtnFact").on("click", function (e) {
  e.preventDefault();
  let n = $("#usrNum").val();
  getMultFacts(n);
});
