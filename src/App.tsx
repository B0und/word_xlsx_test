import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DocViewer, {
  DocRenderer,
  PDFRenderer,
  MSDocRenderer,
} from "react-doc-viewer";
import PdfViewerComponent from "./PdfViewerComponent";

import { renderAsync } from "docx-preview";

import { read, writeFileXLSX, utils } from "xlsx";
import { set_cptable } from "xlsx";
// @ts-ignore
import * as cptable from "xlsx/dist/cpexcel.full.mjs";
import SheetJSReactHTML from "./excel";
import { SheetJSXSpread } from "./excel2";
set_cptable(cptable);

function App() {
  // const doc = [{ uri: "https://localhost/test.docx" }];

  useEffect(() => {
    (async function () {
      const elem = document.getElementById("container");
      console.log({ elem });

      const res = await fetch("/kurs.docx");
      const data = await res.blob();

      console.log("ERROR");

      renderAsync(data, elem).then((x) => console.log("docx: finished"));
    })();
  }, []);

  return (
    // <DocViewer pluginRenderers={[PDFRenderer, MSDocRenderer]} documents={doc} />
    // <div className="App">
    //   <div className="PDF-viewer" style={{ width: "100vw", height: "100vh" }}>
    //     <PdfViewerComponent document={"test.docx"} />
    //   </div>
    // </div>

    <div>
      {/* <button>load docx</button> */}
      <div id="container"></div>

      {/* <SheetJSReactHTML /> */}

      {/* <SheetJSXSpread /> */}
    </div>
  );
}

export default App;
