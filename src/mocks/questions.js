const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `pop`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`
      },
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `http://dl2.mp3party.net/online/9116246.mp3`,
    },
    answers: [
      {
        src: `https://placehold.it/134x134`,
        artist: `Jim Beam`
      },
      {
        src: `https://placehold.it/134x134`,
        artist: `Jack Daniels`
      },
      {
        src: `https://placehold.it/134x134`,
        artist: `Johnny Cash`
      },
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Johnny Cash`,
      src: `http://dl2.mp3party.net/online/9116246.mp3`,
    },
    answers: [
      {
        src: `https://placehold.it/134x134`,
        artist: `Johnny Cash`
      },
      {
        src: `https://placehold.it/134x134`,
        artist: `Bob Marley`
      },
      {
        src: `https://placehold.it/134x134`,
        artist: `Jim Beam`
      },
    ]
  }
];

export default questions;
