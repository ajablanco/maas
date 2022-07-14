import React from "react";

function Button(props) {
  return (
    <div style={{ paddingLeft: 8 }}>
      <button
        className="flex flex-row justify-center items-center"
        style={{
          boxSizing: "border-box",
          backgroundColor: props.backgroundColor,
          border: "1px solid black",
          borderRadius: "30px",
          height: "35px",
          width: "157px",

          gap: 10,
        }}
      >
        <text style={{ fontWeight: 600, fontSize: 16 }}>{props.title}</text>
      </button>
    </div>
  );
}

export default Button;
