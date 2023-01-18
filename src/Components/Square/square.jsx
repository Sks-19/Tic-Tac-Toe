import "./square.css";

const Square = ({ val, changeSquare }) => {
  return (
    <>
      <div className="square" onClick={changeSquare}>
        {val}
      </div>
    </>
  );
};

export default Square;
