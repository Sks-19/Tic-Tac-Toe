import Square from "../Square/square";
import "./board.css";

const Board = ({ board, setBoard, player, setPlayer }) => {
  const changeSquare = (val) => {
    setBoard(
      board.map((currSquare, idx) => {
        if (val === idx && currSquare === "") {
          return player;
        }
        return currSquare;
      })
    );
  };
  return (
    <>
      <div className="board">
        <div className="row">
          <Square val={board[0]} changeSquare={() => changeSquare(0)} />
          <Square val={board[1]} changeSquare={() => changeSquare(1)} />
          <Square val={board[2]} changeSquare={() => changeSquare(2)} />
        </div>
        <div className="row">
          <Square val={board[3]} changeSquare={() => changeSquare(3)} />
          <Square val={board[4]} changeSquare={() => changeSquare(4)} />
          <Square val={board[5]} changeSquare={() => changeSquare(5)} />
        </div>
        <div className="row">
          <Square val={board[6]} changeSquare={() => changeSquare(6)} />
          <Square val={board[7]} changeSquare={() => changeSquare(7)} />
          <Square val={board[8]} changeSquare={() => changeSquare(8)} />
        </div>
      </div>
    </>
  );
};

export default Board;
