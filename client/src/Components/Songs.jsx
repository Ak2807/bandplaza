const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Aamne Saamne",
      bandName: "Euphoria",
      song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Feuphoria%2FAamne%20Saamne%20-%20(Raag.Fm).mp3?alt=media&token=78191ca4-63b8-4abd-94d7-2475e712aab9",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Feuphoria%2FImages%2FEuphorea%201.jpg?alt=media&token=9a610513-cfdd-4351-8a35-ee2759538d24",
    },
    {
      id: 2,
      favourite: false,
      songName: "Kyon Judaa",
      bandName: "Euphoria",
      song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Feuphoria%2FKyon%20Judaa%20-%20(Raag.Fm).mp3?alt=media&token=2a9460f4-72af-454e-89d9-d1345394a537",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Feuphoria%2FImages%2Feuphoria%202.jpg?alt=media&token=fe818417-c709-4a3c-aea5-2ca529e19bfc",
    },
    {
      id: 3,
      favourite: false,
      songName: "Joker - Rock and Roll",
      bandName: "Euphoria",
      song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Feuphoria%2FSha%20Na%20Na%20Na%20-%20(Raag.Fm).mp3?alt=media&token=183f8c61-dac2-4cf8-9653-fef54c085f70",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Feuphoria%2FImages%2Feuphoria%203.jpg?alt=media&token=1c08c92c-da40-469e-8bc4-54e4c74375b5",
    },
    {
      id: 4,
      favourite: false,
      songName: "Sha Na Na Na",
      bandName: "Euphoria",
      song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Feuphoria%2FTum%20-%20(Raag.Fm).mp3?alt=media&token=5427f199-26b7-4dad-a527-63b13aa937f8",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Feuphoria%2FImages%2Feuphoria%204.jpg?alt=media&token=ea766a7f-bdfe-4707-bab7-10262a497507",
    },
    {
      id: 5,
      favourite: false,
      songName: "Des Mera",
      bandName: "Indian Icean",
      song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Findian%20Ocean%2FDes%20Mera%20-%20(Raag.Fm).mp3?alt=media&token=a65723e8-e48c-4af1-a19c-cab9b439e1af",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Findian%20Ocean%2Fimages%2Findian%20ocean%201.jpg?alt=media&token=2c0de140-400b-46f8-a8a7-b4025ee7df61",
    },
    {
      id: 6,
      songName: "Bandeh (Black Friday)",
      bandName: "Indian Icean",
      song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Findian%20Ocean%2FBandeh%20(Black%20Friday)%20-%20(Raag.Fm).mp3?alt=media&token=83e11192-1fc9-4eb1-9a78-34146ac95005",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Findian%20Ocean%2Fimages%2Findian%20ocean%203.jpg?alt=media&token=1831e860-603e-4845-a23f-f30432b3c84a",
    },
    {
      id: 7,
      favourite: false,
      songName: "Des Mera Rangreji Ae Babu",
      bandName: "Indian Icean",
      song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Findian%20Ocean%2FDes%20Mera%20Rangreji%20Ae%20Babu%20-%20(Raag.Fm).mp3?alt=media&token=ea76b683-bb15-40f3-98c0-9d39b4f6b25c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Findian%20Ocean%2Fimages%2Findian%20ocean%204.jpg?alt=media&token=ef531091-62da-4ef7-9024-10bda1b30f8e",
    },
    {
      id: 8,
      favourite: false,
      songName: "Zindagi Se Darte Ho",
      bandName: "Indian Icean",
      song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Findian%20Ocean%2FZindagi%20Se%20Darte%20Ho%20-%20(Raag.Fm).mp3?alt=media&token=32020aa6-d853-478f-b048-8240bbcd3992",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Findian%20Ocean%2Fimages%2Findian%20ocean%203.jpg?alt=media&token=1831e860-603e-4845-a23f-f30432b3c84a",
    },
    {
      id: 9,
      favourite: false,
      songName: "queen song 2",
      bandName: "Queen",
      song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2FQueen%2Fqueen%20song%20(1).mp3?alt=media&token=2bdc1dfc-8c79-41f2-aee8-877da85049aa",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Findian%20Ocean%2Fimages%2Findian%20ocean2.jpg?alt=media&token=2f2fd694-3436-4c34-9f49-7800b7d50a9f",
    },
    {
      id: 10,
      favourite: false,
      songName: "queen song 2",
      bandName: "Queen",
      song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2FQueen%2Fqueen%20song%20(2).mp3?alt=media&token=0a872c2b-c459-406f-a268-d57e8e8429b7",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2FQueen%2FImages%2FQueen%201.jpg?alt=media&token=696b4bfe-c3fd-478c-985d-815752f460f4",
    },
    {
        id: 11,
        favourite: false,
        songName: "queen song 3",
        bandName: "Queen",
        song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2FQueen%2Fqueen%20song%20(3).mp3?alt=media&token=759b972b-9a1f-44bd-9f22-2a27e5d04760",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2FQueen%2FImages%2FQueen%204.jpg?alt=media&token=0a4450ba-1b0f-4979-9e8c-2fcc923e0beb",
      },
      {
        id: 12,
        favourite: false,
        songName: "queen song 4",
        bandName: "Queen",
        song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2FQueen%2Fqueen%20song%20(4).mp3?alt=media&token=95826058-b524-4a85-8819-8ae7ff81050a",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2FQueen%2FImages%2FQueen%202.jpg?alt=media&token=119e52c4-49c6-4429-b7bd-454139921be2",
      },
      {
        id: 13,
        favourite: false,
        songName: "Dilnawaz",
        bandName: "The Local Train",
        song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Fthe%20local%20train%2FDilnawaz.mp3?alt=media&token=3abe624d-ec21-4696-b8ea-1a295ed2e017",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Fthe%20local%20train%2Fimages%2Fthe%20local%20train%204.jpg?alt=media&token=f8be7702-17fd-446a-90f6-69120470765f",
      },
      {
        id: 14,
        favourite: false,
        songName: "Gustaakh - (Raag.Fm)",
        bandName: "The Local Train",
        song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Fthe%20local%20train%2FGustaakh%20-%20(Raag.Fm).mp3?alt=media&token=f656e3ba-0afd-40dd-8cea-6b7618661f22",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Fthe%20local%20train%2Fimages%2Fthe%20local%20train.jpg?alt=media&token=ad5ca52f-215d-4147-86d3-9b75e5547dfc",
      },
      {
        id: 15,
        favourite: false,
        songName: "Khudi",
        bandName: "The Local Train",
        song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Fthe%20local%20train%2FKhudi.mp3?alt=media&token=61354f60-beea-4f7f-a6eb-cf003f56fbe4",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Fthe%20local%20train%2Fimages%2Fthe%20local%20train%202.jpg?alt=media&token=e77de594-41e8-4574-8f87-006170588936",
      },
      {
        id: 16,
        favourite: false,
        songName: "Vaaqif - (Raag.Fm)",
        bandName: "The Local Train",
        song: "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Fthe%20local%20train%2FVaaqif%20-%20(Raag.Fm).mp3?alt=media&token=9beb1bbe-3508-43de-97ab-bed2c8ef8586",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/band-plaza.appspot.com/o/Songs%2Fthe%20local%20train%2Fimages%2FThe%20local%20train%203.jpg?alt=media&token=2b7f3d6a-fee8-4c5d-8df6-3bed90a0e1c1",
      },
     
  ];
  
  export { Songs };