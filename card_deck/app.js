// //1
// // let url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
// // axios
// //   .get(url)
// //   .then((response) =>
// //     console.log(
// //       `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
// //     )
// //   )
// //   .catch((err) => console.log(err));
// //1 with async await
async function drawCard() {
  let url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
  let { data } = await axios.get(url);
  console.log(`${data.cards[0].value} of ${data.cards[0].suit}`);
}
// //2
// // let cards = [];
// // axios
// //   .get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
// //   .then((response) => {
// //     cards.push(
// //       `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
// //     );
// //     let deck_id = response.data.deck_id;
// //     return axios.get(
// //       `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
// //     );
// //   })
// //   .then((response) => {
// //     cards.push(
// //       `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
// //     );
// //     for (card of cards) {
// //       console.log(card);
// //     }
// //   })
// //   .catch((err) => console.log(err));

// //2 with async await
async function drawCards() {
  let { data } = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  console.log(data);
  let deckId = data.deck_id;
  let url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
  let cards = await Promise.all([axios.get(url), axios.get(url)]);
  for (card of cards) {
    console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`);
  }
}

//   .then((response) => {
//     cards.push(
//       `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
//     );
//     let deck_id = response.data.deck_id;
//     return axios.get(
//       `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
//     );
//   })
//   .then((response) => {
//     cards.push(
//       `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
//     );
//     for (card of cards) {
//       console.log(card);
//     }
//   })
//   .catch((err) => console.log(err));

// let deckId = null;
// let $btn = $("#cardBtn");
// let $cardArea = $("#card-area");

// //on load retrieve new deck
// axios
//   .get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
//   .then((data) => {
//     deckId = data.deck_id;
//     console.log(data);
//     console.log(`deckId var is ${deckId}`);
//   })
//   .catch((err) => console.log(err));

// $btn.on("click", function (e) {
//   e.preventDefault();
//   console.log(deckId);
//   axios
//     .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
//     .then((data) => {
//       console.log(data);
//       //   let cardSrc = data.cards[0].image;
//       //   let angle = Math.random() * 90 - 45;
//       //   let randomX = Math.random() * 40 - 20;
//       //   let randomY = Math.random() * 40 - 20;
//       //   $cardArea.append(
//       //     $("<img>", {
//       //       src: cardSrc,
//       //       css: {
//       //         transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`,
//       //       },
//       //     })
//       //   );
//       //   if (data.remaining === 0) $btn.remove();
//     })
//     .catch((err) => console.log(err));
// });
