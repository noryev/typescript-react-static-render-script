import * as fs from "fs";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";

render();

function render() {
  let html = ReactDOMServer.renderToStaticMarkup(<OpenLinksPage />);
  let htmlWDoc = "<!DOCTYPE html>" + html;
  let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
  let outputFile = "./output.html";
  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
}

function OpenLinksPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>OpenLink test website for Noryev</title>
      </head>
      <body>
        <h1>Whats up Logan</h1>
      </body>
    </html>
  );
}
