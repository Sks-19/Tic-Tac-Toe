import { useEffect, useState } from "react";
import swal from "sweetalert";
import "./App.css";
import Board from "./Components/Board/board";
import { Patterns } from "./Pattern/winPattern";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [winner, setWinner] = useState({ player: null, status: null });

  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (winner.player !== null && winner.player !== "") {
      swal({
        title: "Congratulatios!",
        text: `Player ${winner.player} ${winner.status} the match`,
        icon: "success",
        button: {
          text: "Play Again!",
          className: "swalBtn",
        },
        className: "swalBg",
      });
      reset();
    }
  }, [winner]);

  const checkWin = () => {
    Patterns.forEach((pattern) => {
      let currPlayer = board[pattern[0]];
      let win = true;
      pattern.forEach((pat) => {
        if (board[pat] !== currPlayer) {
          win = false;
        }
      });

      if (win) {
        setWinner({ player: currPlayer, status: "Win" });
      }
    });
  };

  const reset = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
    setWinner({ player: null, status: null });
  };

  const checkIfTie = () => {
    let condition = board.filter((square) => square !== "");
    if (condition.length === board.length) {
      swal({
        title: "Match Tie!",
        text: "No one won",
        icon: "warning",
        button: {
          text: "Play Again!",
          className: "swalBtn",
        },
        className: "swalBg",
      });
      reset();
    }
  };

  return (
    <>
      <h1 className="title">Tic Tac Toe</h1>
      <div className="App">
        <Board
          board={board}
          setBoard={setBoard}
          player={player}
          setPlayer={setPlayer}
        />
      </div>
    </>
  );
}

export default App;
