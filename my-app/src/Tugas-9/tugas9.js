import React from "react";
import "./tugas9.css";

export default function tugas9() {
  return (
    <div className="wrapper-tugas9">
      <h1>Form Pembelian Buah</h1>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td className="paddingbot">
              <b>nama Pelanggan</b>
            </td>
            <td className="paddingbot">
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td id="daft">
              <b>Daftar Item</b>
            </td>
            <td>
              <input type="checkbox" />
              <label htmlFor="vehicle1"> Semangka</label>
              <br />
              <input type="checkbox" />
              <label htmlFor="vehicle2"> Jeruk</label>
              <br />
              <input type="checkbox" />
              <label htmlFor="vehicle3"> Nanas</label>
              <br />
              <input type="checkbox" />
              <label htmlFor="vehicle3"> Salak</label>
              <br />
              <input type="checkbox" />
              <label htmlFor="vehicle3"> Anggur</label>
              <br />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <input id="button" type="submit" defaultValue="Submit" />
    </div>
  );
}
