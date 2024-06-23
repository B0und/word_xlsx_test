import React, { useCallback, useEffect, useRef, useState } from "react";
import { read, utils, writeFileXLSX } from "xlsx";

export default function SheetJSReactHTML() {
  /* the component state is an HTML string */
  const [__html, setHtml] = useState("");
  /* the ref is used in export */
  const tbl = useRef(null);

  /* Fetch and update the state once */
  useEffect(() => {
    (async () => {
      const f = await (await fetch("/excel.xlsx")).arrayBuffer();
      const wb = read(f); // parse the array buffer
      const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
      const data = utils.sheet_to_html(ws); // generate HTML
      setHtml(data); // update state
    })();
  }, []);

  return (
    <>
      <div ref={tbl} dangerouslySetInnerHTML={{ __html }} />
    </>
  );
}
