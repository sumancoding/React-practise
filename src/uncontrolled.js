import React from "react";

const Uncontrolled = () => {
  return (
    <div>
      <form action="">
        <div>
          <label>
            {" "}
            Enter Your NickName: <input type="text" required />
          </label>
        </div>{" "}
        <br />
        <button> Submit </button>
      </form>
    </div>
  );
};

export default Uncontrolled;
