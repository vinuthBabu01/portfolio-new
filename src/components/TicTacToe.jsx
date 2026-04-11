import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

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
    <section className="relative py-16 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Playground">A Small Fun Build</SectionTitle>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_360px]">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.32em] text-accent-1/80">
              Just for personality
            </p>
            <h3 className="text-3xl font-semibold leading-tight text-text-primary">
              Not everything has to be serious. This tiny Tic Tac Toe bot shows a bit of frontend interaction and algorithmic logic.
            </h3>
            <p className="mt-5 text-base leading-8 text-text-secondary">
              I kept this as a lightweight playground section rather than mixing it into the main project showcase. It adds some character without distracting from the work that matters most.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span key={i} className="ui-tech-badge-accent px-3 py-1.5">
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
          </div>

          <Motion.div
            className="ui-panel flex flex-col bg-primary-bg p-6 shadow-xl shadow-black/20"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h4 className="mb-4 text-center text-xl font-semibold text-accent-1">Tic Tac Toe vs Bot</h4>
            <div className="grid grid-cols-3 gap-2 w-48 mx-auto">
              {board.map((cell, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(i)}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border border-white/10 bg-secondary-bg text-xl font-bold text-accent-1 transition hover:border-accent-1/40 hover:bg-primary-bg"
                >
                  {cell}
                </button>
              ))}
            </div>

            <p className="mt-4 text-center text-sm font-mono text-text-primary">{status}</p>

            {(winner || board.every(Boolean)) && (
              <button
                onClick={handleReset}
                className="mx-auto mt-4 rounded-md bg-accent-1 px-4 py-2 text-sm font-medium text-primary-bg transition hover:bg-accent-hover"
              >
                Reset Game
              </button>
            )}
          </Motion.div>
        </div>
      </div>
      <div className="ui-bottom-fade-secondary" />
    </section>
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
      const next = board.slice();
      next[i] = 'O';
      const score = minimax(next, 0, false);
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
        const next = board.slice();
        next[i] = 'O';
        best = Math.max(best, minimax(next, depth + 1, false));
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        const next = board.slice();
        next[i] = 'X';
        best = Math.min(best, minimax(next, depth + 1, true));
      }
    }
    return best;
  }
}

export default TicTacToe;
