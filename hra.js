import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const selectButton = async (event) => {
  const btn = event.target;
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    btn.classList.add('game__board--circle');
    document.querySelector('.game__menu--icon').src = 'ikony/cross.svg';
    currentPlayer = 'cross';
  } else {
    btn.classList.add('game__board--cross');
    document.querySelector('.game__menu--icon').src = 'ikony/circle.svg';
    currentPlayer = 'circle';
  }

  const gameBoardElm = Array.from(gameButtons);
  const gameBoard = gameBoardElm.map((button) => {
    if (button.classList.contains('game__board--circle')) {
      return 'o';
    } else if (button.classList.contains('game__board--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  const findingWinner = () => {
    const winner = findWinner(gameBoard);
    if (winner === 'o') {
      alert(`Vyhrálo kolečko!`);
      location.reload();
    } else if (winner === 'x') {
      alert('Vyhrál křížek!');
      location.reload();
    } else if (winner === 'tie') {
      alert('Je to remíza!');
      location.reload();
    }
  };
  setTimeout(findingWinner, 400);

  //volání API
  const response = await fetch(
    'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        board: gameBoard,
        player: 'x',
      }),
    },
  );

  //zpracování dat z API
  const data = await response.json();
  const { x, y } = data.position;
  const field = gameButtons[x + y * 10];
  if (currentPlayer === "cross") {
    field.click();
  }
};

const gameButtons = document.querySelectorAll('.game__board--square');
gameButtons.forEach((button) => {
  button.addEventListener('click', selectButton);
});

document
  .querySelector('.button__restart')
  .addEventListener('click', (event) => {
    if (!confirm('Opravdu chcete začít znovu?')) {
      event.preventDefault();
    }
  });
