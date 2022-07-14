import React from "react";
import { Typography } from "antd";
import Bananas from "./icons/bananas.svg";
import Button from "./Button";

const { Title } = Typography;

// displays a page header

export default function Header(props) {
  return (
    <div className="flex justify-between items-center p-2  shadow-sm ">
      <div className=" flex flex-1 items-center">
        {/* <Title level={4} style={{ margin: "0 0.5rem 0 0" }}>
          🍌 multisig.lol
        </Title> */}
        <img src={Bananas} alt="logo" width="200" height="56" />
        {/* <a href="https://github.com/austintgriffith/maas" target="_blank">
          please fork this
        </a> */}
      </div>

      <Button title={"Distribute Funds"} backgroundColor="#FFDD64" />
      <Button title={"Distribute SLX"} backgroundColor="#95B9FF" />

      {props.children}
    </div>
  );
}
