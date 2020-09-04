import React from "react";
import "./tugas10.css";

export default function tugas10(props) {
  const inputData = () => {
    let jsx = props.data.map((el) => {
      return (
        <tr>
          <td>{el.nama} Kg</td>
          <td>{el.harga} Kg</td>
          <td>{el.berat / 1000} Kg</td>
        </tr>
      );
    });
    return jsx;
  };

  console.log(props.data);

  return (
    <div className="wrapper-tugas10">
      <h1>Tabel Harga Buah</h1>
      <table className="table-tugas10">
        <tr>
          <th>Nama</th>
          <th>Harga</th>
          <th>Berat</th>
        </tr>
        {inputData()}
      </table>
    </div>
  );
}
