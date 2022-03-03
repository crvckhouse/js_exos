const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

for (let booksAttribute in books) {
  var booksRent = books[booksAttribute].rented;



  // Est ce que tout les livres ont été empruntés 1 fois
  if(booksRent > 0 )  {
    console.log("Tout les livres ont été empruntés 1 fois ");
  } else {
    console.log("Non , tout les livres n'ont pas été empruntés 1 fois ");
  };

}
// Quel est livre le plus emprunté ?
for (let booksAttribute in books) {
  var mostRented = Math.max(books[booksAttribute].rented);

};
  console.log(mostRented);
