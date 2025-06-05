import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const techStack = ['React', 'Minimax', 'Tailwind'];

const getTechIcon = (techName) => {
  const techMap = {
    React: 'react',
    Tailwind: 'tailwindcss',
    Minimax: 'brain', // fallback to emoji or static icon for algorithm
  };
  const iconName = techMap[techName] || techName.toLowerCase();
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-original.svg`;
};


const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const winner = calculateWinner(board);

  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      const bestMove = findBestMove(board);
      if (bestMove !== -1) {
        const newBoard = board.slice();
        newBoard[bestMove] = 'O';
        setTimeout(() => {
          setBoard(newBoard);
          setIsPlayerTurn(true);
        }, 300);
      }
    }
  }, [isPlayerTurn, board, winner]);

  const handleClick = (i) => {
    if (board[i] || winner || !isPlayerTurn) return;
    const newBoard = board.slice();
    newBoard[i] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
  };

  const status = winner
    ? winner === 'X'
      ? '🎉 Player Won!'
      : '🤖 Bot Won!'
    : board.every(Boolean)
    ? "🤝 It's a draw!"
    : '🧠 Your Turn (X)';

  return (
    <motion.div
      className="bg-secondary-bg rounded-lg shadow-xl overflow-hidden flex flex-col p-6 group transform hover:-translate-y-2 transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-accent-1 font-mono mb-2">Tic Tac Toe VS Bot</h3>
      <div className="flex flex-wrap gap-2 mb-4">
  {techStack.map((tech, i) => (
    <span
      key={i}
      className="flex items-center gap-1 text-xs bg-primary-bg text-accent-1 px-2 py-1 rounded-full font-mono"
    >
      {tech !== 'Minimax' ? (
        <img
          src={getTechIcon(tech)}
          alt={tech}
          className="w-4 h-4"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      ) : (
        <span className="text-sm">🧠</span>
      )}
      {tech}
    </span>
  ))}
</div>
      <div className="grid grid-cols-3 gap-2 w-48 mx-auto">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-bg text-accent-1 text-xl sm:text-2xl font-bold rounded flex items-center justify-center border border-text-secondary hover:bg-secondary-bg transition"
          >
            {cell}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-center text-text-primary font-mono">{status}</p>

      {(winner || board.every(Boolean)) && (<button
        onClick={handleReset}
        className="mt-4 px-4 py-1 bg-accent-1 text-primary-bg rounded hover:bg-opacity-80 text-sm font-mono mx-auto transition"
      >
        🔄 Reset Game
      </button>)}
    </motion.div>
  );
};

// Winner checker
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6],            // diagonals
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
  }
  return null;
}

// AI Move
function findBestMove(board) {
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = 'O';
      let score = minimax(board, 0, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

// Minimax algorithm
function minimax(board, depth, isMaximizing) {
  const winner = calculateWinner(board);
  if (winner === 'O') return 10 - depth;
  if (winner === 'X') return depth - 10;
  if (board.every(Boolean)) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = 'O';
        best = Math.max(best, minimax(board, depth + 1, false));
        board[i] = null;
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = 'X';
        best = Math.min(best, minimax(board, depth + 1, true));
        board[i] = null;
      }
    }
    return best;
  }
}

export default TicTacToe;
