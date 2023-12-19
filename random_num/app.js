// function randomFact(n) {
//   let url = `http://numbersapi.com/${n}?json`;
//   axios
//     .get(url)
//     .then((response) => showRanFact(response.data))
//     .catch((err) => alert(err));
// }

// function showRanFact(response) {
//   $("#luckyNum").text(response.number);
//   $("#fact").text(response.text);
//   $("#usrNum").val("");
// }

// $("#singleBtnFact").on("click", function (e) {
//   e.preventDefault();
//   let n = $("#usrNum").val();
//   randomFact(n);
// });

//using async functions and await promise using error handling with try/catch
async function randomFact(n) {
  let url = `http://numbersapi.com/${n}?json`;
  try {
    let { data } = await axios.get(url);
    showRanFact(data);
  } catch (e) {
    alert("Enter a valid number");
  }
}

function showRanFact(data) {
  $("#luckyNum").text(data.number);
  $("#fact").text(data.text);
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

//multiple nums with async and await
async function getMultFacts(...nums) {
  let { data } = await axios.get(`http://numbersapi.com/${nums}?json`);
  console.log(data);
}

//return 4 facts
// function getFourFacts(n) {
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
// function getMultFacts(n) {
//   let facts = [];
//   let url = `http://numbersapi.com/${n}?json`;
//   for (let i = 1; i < 5; i++) {
//     facts.push(axios.get(url));
//   }

//   Promise.all(facts)
//     .then((factsArr) => {
//       $.each(factsArr, function (i) {
//         $("#fact").append(`<p>${i + 1}. ${this.data.text}</p>`);
//       });
//       $("#usrNum").val("");
//     })
//     .catch((err) => console.log(err));
// }
// $("#multBtnFact").on("click", function (e) {
//   e.preventDefault();
//   let n = $("#usrNum").val();
//   getMultFacts(n);
// });

// //get four facts using async and await
// // async function getFourFacts(n) {
// //   $("#fact").empty();
// //   let facts = [];
// //   let url = `http://numbersapi.com/${n}?json`;
// //   for (let i = 1; i < 5; i++) {
// //     facts.push(await axios.get(url));
// //   }

//   $.each(facts, function (i) {
//     $("#fact").append(`<p>${i + 1}. ${this.data.text}</p>`);
//   });
//   $("#usrNum").val("");
// }
$("#multBtnFact").on("click", function (e) {
  e.preventDefault();
  let n = $("#usrNum").val();
  getFourFacts(n);
});
// get four facts using async and await
async function getFourFacts(n) {
  $("#fact").empty();
  let url = `http://numbersapi.com/${n}?json`;
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => axios.get(url))
  );

  $.each(facts, (i, fact) => {
    $("#fact").append(`<p>${i + 1}. ${fact.data.text}</p>`);
  });
  $("#usrNum").val("");
}
