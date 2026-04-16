import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import '../mac.scss';
import { ImCross } from "react-icons/im";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Macwindow = (props) => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/anand.txt")
      .then(res => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then(data => setText(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  // ❌ display/opacity hata diya → clean conditional render
  if (!props.isopen) return null;

  return (
 <Rnd
  default={{
    x: 100,
    y: 100,
    width: 600,
    height: 350,
  }}
  minWidth={300}
  minHeight={200}
  bounds="window"
  dragHandleClassName="top"
  enableResizing={{
    bottomRight: true,
    right: true,
    bottom: true,
    left: true,
    top: true,
    topLeft: true,
    topRight: true,
    bottomLeft: true
  }}
  // Ensure the Rnd container itself behaves well
  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
>
  <div className="box">
    <div className="top">
      <div className="circle red" onClick={() => props.setisopen(false)}></div>
      <div className="circle yellow"></div>
      <div className="circle green"></div>
      <h3>anandraj — zsh</h3>
    </div>

    <div className="content">
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers
        customStyle={{
          margin: 0,
          padding: '20px',
          background: "transparent",
          fontSize: '14px'
        }}
      >
        {text || "// Loading code..."}
      </SyntaxHighlighter>
    </div>
  </div>
</Rnd>
  );
}

export default Macwindow;