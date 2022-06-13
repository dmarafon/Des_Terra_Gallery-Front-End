export const artworkMock = [
  {
    title: "concreto",
    medium: "drawing on paper",
    height: "20 inches",
    width: "17.5 inches",
    style: "drawing",
    description:
      "When I was in Brazil I was inspired but a cultural movement called 'Concretismo'. With its angular and blocked shapes, sorrounded by Neymaier architecture, and a retro-futuristic aesthetic, I tried achieve this piece about a nostalgi future.",
    author: [
      {
        surname: "perea",
        firstname: "jesus",
        id: "6295020ad1504446d0c04ce8",
      },
    ],
    purchaseprice: "120",
    monthlyrateprice: "10",
    image: "https://ibb.co/mht27wM",
    imagebackup: "https://ibb.co/mht27wM",
    id: "6294aa4bc78dbede94290071",
  },
  {
    title: "bolet",
    medium: "saboya",
    height: "20 inches",
    width: "17.5 inches",
    style: "painting",
    description: "",
    author: [
      {
        surname: "marcos",
        firstname: "paiva",
        id: "6295020ad1504446d0c04ce7",
      },
    ],
    purchaseprice: "11",
    monthlyrateprice: "12",
    image: "https://ibb.co/mht27wM",
    imagebackup: "https://ibb.co/mht27wM",
    id: "6294aa4bc78dbede94290073",
  },
  {
    title: "maria",
    medium: "toledo",
    height: "11 inches",
    width: "3.5 inches",
    style: "painting",
    description: "",
    author: [
      {
        surname: "lorena",
        firstname: "matias",
        id: "6295020ad1504446d0c04ce5",
      },
    ],
    purchaseprice: "11",
    monthlyrateprice: "12",
    image: "https://ibb.co/mht27wM",
    imagebackup: "https://ibb.co/mht27wM",
    id: "6294aa4bc78dbede94290077",
  },
];

export const loadArtworksActionMock = {
  type: "artworks/loadArtworks",
  payload: [
    {
      title: "a girl called barbaba",
      medium: "oil on canvas and charcoal",
      height: "40",
      width: "30",
      style: "figurative",
      image: "uploads\\artimages\\1654820927053A Girl Called Barbara.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654820927053A%20Girl%20Called%20Barbara.jpeg?alt=media&token=0a180515-9af1-4ea5-bb2d-500a21e897ee",
      description:
        "This work was done in rush, in a very cold night of December. Barbara was a girl that I met back in 2012, while she was visiting Barcelona. Her presence affected me in so many ways, that I can say that she changed my life.",
      purchaseprice: "2000",
      monthlyrateprice: "260",
      author: [
        {
          firstname: "julio",
          surname: "reyes",
          id: "62a28f41e2cb25089001eaee",
        },
      ],
      id: "62a2903fe2cb25089001eb10",
    },
    {
      title: "concreto",
      medium: "drawing on paper",
      height: "20",
      width: "17.5",
      style: "geometric",
      image: "uploads\\artimages\\1654817416162Concreto.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654817416162Concreto.jpeg?alt=media&token=86ef8e9c-6541-4848-a0a5-1b80f97ec3a8",
      description:
        "When I was in Brazil I was inspired by a cultural movement called 'Concretismo'. With its angular and blocked shapes, sorrounded by Neymaier architecture, and a retro-futuristic aesthetic, I tried achieve this piece about the past future.",
      purchaseprice: "120",
      monthlyrateprice: "10",
      author: [
        {
          surname: "perea",
          firstname: "jesus",
          id: "6295020ad1504446d0c04ce8",
        },
      ],
      id: "62a2828ae2cb25089001ea13",
    },
    {
      title: "constructor  ii",
      medium: "drawing on paper",
      height: "22",
      width: "18",
      style: "geometric",
      image: "uploads\\artimages\\165481790216512.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/165481790216512.jpeg?alt=media&token=cddd417e-fa56-4228-b624-02d763b0d49c",
      description:
        "This work is based on the urban landscapes of São Paulo, Brasil. A harsh city where everything happens at the same time, and the buildings eviscerates people. Suffocating, but beautiful as well.",
      purchaseprice: "150",
      monthlyrateprice: "10",
      author: [
        {
          surname: "perea",
          firstname: "jesus",
          id: "6295020ad1504446d0c04ce8",
        },
      ],
      id: "62a2846fe2cb25089001ea2b",
    },
    {
      title: "constructor i",
      medium: "drawing on paper",
      height: "23",
      width: "19",
      style: "geometric",
      image: "uploads\\artimages\\1654817472636Constructor.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654817472636Constructor.jpeg?alt=media&token=250623b6-aa76-4233-8f1a-b5c4148fc30c",
      description:
        "Moving through Barcelona, sometimes I feel asfixiated by the buildings and the city smoke, but at the same time, the beautiful golden sun that bathes us warms me. Trying to mix those elements I created this piece.",
      purchaseprice: "150",
      monthlyrateprice: "10",
      author: [
        {
          surname: "perea",
          firstname: "jesus",
          id: "6295020ad1504446d0c04ce8",
        },
      ],
      id: "62a282c1e2cb25089001ea19",
    },
    {
      title: "desestructuring",
      medium: "drawing on paper",
      height: "20",
      width: "15",
      style: "geometric",
      image: "uploads\\artimages\\16549442731645.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/16549442731645.jpeg?alt=media&token=3762bb76-c73a-4c90-9374-bf600f3bc278",
      description:
        "This work is about the desestructured architecture of the big cities. Here we can see how the lines collapses with the black background, in a place where the city landscape transform itself in a blur of darkness and isolation. ",
      purchaseprice: "500",
      monthlyrateprice: "35",
      author: [
        {
          surname: "perea",
          firstname: "jesus",
          id: "6295020ad1504446d0c04ce8",
        },
      ],
      id: "62a472129cdb1d00b8681b2a",
    },
    {
      title: "expansion",
      medium: "charcoal and oil",
      height: "90",
      width: "70",
      style: "people",
      image: "uploads\\artimages\\1654991606826Expansion.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654991606826Expansion.jpeg?alt=media&token=d8d1236f-5baf-458f-b551-97b065587a38",
      description:
        "Expansion is a work about meeting yourself in the other. Here our subjects rest with their heads, exchanging their projections through a mimesis of their movements. After all, we are all mirrors of each other.",
      purchaseprice: "800",
      monthlyrateprice: "80",
      author: [
        {
          firstname: "johan",
          surname: "barrios",
          id: "62a5299b89eefe1b8f161648",
        },
      ],
      id: "62a52a0d89eefe1b8f16164f",
    },
    {
      title: "forgotten",
      medium: "drawing with mixed media",
      height: "19",
      width: "12",
      style: "people",
      image: "uploads\\artimages\\1654987894565Daniel Segrove (6).jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654987894565Daniel%20Segrove%20(6).jpeg?alt=media&token=03e4233a-6232-4218-9da4-d02dbe8368d5",
      description:
        "What I like the most about this work is how Julia, the subject of this drawing, exhales an aura of silence. Her calm figure makes me remember about those days, where the grass was greener and friends surrounded us.",
      purchaseprice: "600",
      monthlyrateprice: "80",
      author: [
        {
          surname: "segrove",
          firstname: "daniel",
          id: "629d1dce77d93a10ce003a2b",
        },
      ],
      id: "62a51c7789eefe1b8f16156a",
    },
    {
      title: "formidable totem i",
      medium: "drawing on paper",
      height: "22",
      width: "17",
      style: "expressionist",
      image: "uploads\\artimages\\1654818396291Formidable Totem.jpg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654818396291Formidable%20Totem.jpg?alt=media&token=961eaefd-4b37-4a6c-b870-36261d8b1416",
      description:
        "This is the first work of a series about the ugliness of our personalities. The schizophrenic image that builds and top itself with the mesmerizing power of all bottled angriness.  A formidable totem of hate.",
      purchaseprice: "300",
      monthlyrateprice: "30",
      author: [
        {
          firstname: "marina",
          surname: "gonzalez eme",
          id: "62a285d5e2cb25089001ea4a",
        },
      ],
      id: "62a2865de2cb25089001ea4f",
    },
    {
      title: "formidable totem ii",
      medium: "drawing on paper ",
      height: "20",
      width: "19",
      style: "expressionist",
      image: "uploads\\artimages\\1654818512307Formidable Totem 2.jpg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654818512307Formidable%20Totem%202.jpg?alt=media&token=8274831c-73af-4c29-b19d-3aeb700a0946",
      description:
        "The second work of this series about the ugliness of hate and of being a human being. The scope of my work here is to focus on the angriness that is contained and never release, specially in our neurotic society.",
      purchaseprice: "370",
      monthlyrateprice: "23",
      author: [
        {
          firstname: "marina",
          surname: "gonzalez eme",
          id: "62a285d5e2cb25089001ea4a",
        },
      ],
      id: "62a286d1e2cb25089001ea58",
    },
    {
      title: "gravitation",
      medium: "charcoal and oil",
      height: "90",
      width: "110",
      style: "people",
      image: "uploads\\artimages\\1654992023246Gravitation.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654992023246Gravitation.jpeg?alt=media&token=9e16c672-9611-4127-9f11-5fcf2963be40",
      description:
        "Gravitations is about how human beings circle each other in a movement that resemble celestial bodies, that first are attracted and them refutes the other, like they were never close to begin with.",
      purchaseprice: "6000",
      monthlyrateprice: "630",
      author: [
        {
          firstname: "johan",
          surname: "barrios",
          id: "62a5299b89eefe1b8f161648",
        },
      ],
      id: "62a52c9889eefe1b8f16169d",
    },
    {
      title: "GUAPISIMOOOO",
      medium: "drawing on paper",
      height: "20",
      width: "17",
      style: "people",
      description:
        "Beautiful programmer, a machinazo, what else we could say about this elegant boy?",
      author: [
        {
          firstname: "alejandro",
          surname: "machin",
          id: "629de568909b104d1afa7933",
        },
      ],
      purchaseprice: "120",
      monthlyrateprice: "10",
      image:
        "https://pbs.twimg.com/profile_images/1019541777378889728/FAm32RDn_400x400.jpg",
      imagebackup:
        "https://pbs.twimg.com/profile_images/1019541777378889728/FAm32RDn_400x400.jpg",
      id: "629f2996952239d5b07b23a3",
    },
    {
      title: "happy birthday elena",
      medium: "oil on canvas",
      height: "60",
      width: "100",
      style: "figurative",
      image: "uploads\\artimages\\1654820806317Happy Birthday Elena.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654820806317Happy%20Birthday%20Elena.jpeg?alt=media&token=12a77f96-1cf4-41ad-9b71-e7e64585b5c6",
      description:
        "This work is a homage to my dear friend Elena. I did a picture of her with my camera, and I used it as a basis to compose this image of her celebrating her 30th birthday. Such a joy to paint her and have this as a memory of such nice day.",
      purchaseprice: "8000",
      monthlyrateprice: "1000",
      author: [
        {
          firstname: "julio",
          surname: "reyes",
          id: "62a28f41e2cb25089001eaee",
        },
      ],
      id: "62a28fc7e2cb25089001eafb",
    },
  ],
};
