//1
// let url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
// axios
//   .get(url)
//   .then((response) =>
//     console.log(
//       `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
//     )
//   )
//   .catch((err) => console.log(err));

//2
let cards = [];
axios
  .get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
  .then((response) => {
    cards.push(
      `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
    );
    let deck_id = response.data.deck_id;
    return axios.get(
      `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    );
  })
  .then((response) => {
    cards.push(
      `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
    );
    for (card of cards) {
      console.log(card);
    }
  })
  .catch((err) => console.log(err));
