import React from "react";

export default function MessageBox(props) {
  return (
    <div className={`alart alart-${props.variant || "info"}`}>
      {props.children}
    </div>
  );
}
