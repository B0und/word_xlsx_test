import React from "react";
import Spreadsheet from "x-data-spreadsheet";
import { read, utils, writeFileXLSX } from "xlsx";
import { stox } from "./stox";
export function SheetJSXSpread() {
  const [url, setUrl] = React.useState("https://docs.sheetjs.com/pres.numbers");
  const [done, setDone] = React.useState(false);
  const ref = React.useRef(); // ref to DIV container

  return (
    <>
      <div height={300} width={300} ref={ref} />
      {!done && (
        <>
          <br />
          <button
            onClick={async () => {
              /* fetch and parse workbook */
              //   const wb = XLSX.read(await (await fetch(url)).arrayBuffer());
              const f = await (await fetch("/irts.xlsx")).arrayBuffer();
              const wb = read(f); // parse the array buffer
              /* set up grid and load data */
              new Spreadsheet(ref.current).loadData(stox(wb));
              setDone(true);
            }}
          >
            <b>Fetch!</b>
          </button>
        </>
      )}
    </>
  );
}
