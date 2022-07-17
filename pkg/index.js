import init from "./pkg/bitsim.js";
import { Library, Component } from "./pkg/bitsim.js";

function run() {
  console.log(Library.test())

  // TODO: Make this a get request from github repo.
  let json_library = String.raw`{
      "scripts": {
          "2nand": "input A\ninput B\ninput C\ninput D\ncomponent nand1 nand\n    pin A < wire A\n    pin B < wire B\ncomponent nand2 nand\n    pin A < wire C\n    pin B < wire D\nwire X < component nand1 pin Z\nwire Y < component nand2 pin Z\noutput X\noutput Y",
          "buffer": "input A\npin Z < wire A",
          "gnd": "pin Z < value 0",
          "nand": "input A\ninput B\npin Z nand\n    wire A\n    wire B",
          "nor": "input A\ninput B\npin Z nor\n    wire A\n    wire B",
          "not": "input A\npin Z < wire A not",
          "sr": "input R\ninput S\ncomponent qnor nor\n    pin A < wire R\n    pin B < wire Q*\nwire Q < component qnor pin Z\ncomponent q*nor nor\n    pin A < wire S\n    pin B < wire Q\nwire Q* < component q*nor pin Z\noutput Q 1\noutput Q* 0\ntwice",
          "test": "component nand nand\n    pin A < value 0\n    pin B < value 1\nwire Z < component nand output Z\noutput Z",
          "vcc": "pin Z < value 1"
      }
  }`;

  window.library = Library.from_json(json_library);
  window.board = Component.blank("main");

  const canvas = document.getElementById("board");
  const ctx = canvas.getContext('2d');
  const width = 10;
  const height = 10;
  canvas.height = width * 50 + 2;
  canvas.width = height * 50 + 2;

  const drawGrid = () => {
      ctx.beginPath();
      ctx.strokeStyle = "#000000";
    
      // Vertical lines.
      for (let i = 0; i <= width; i++) {
        ctx.moveTo(i * 50 + 1, 0);
        ctx.lineTo(i * 50 + 1, 50 * height + 1);
      }
    
      // Horizontal lines.
      for (let j = 0; j <= height; j++) {
        ctx.moveTo(0,              j * 50 + 1);
        ctx.lineTo(50 * width + 1, j * 50 + 1);
      }
    
      ctx.stroke();
  };

  drawGrid();
}

init().then(run)
