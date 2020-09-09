import React from "react";

export default function ListBuah(props) {
  const { data } = props;
  const inputData = () => {
    let jsx = data.map((el, index) => {
      return (
        <tr key={index}>
          <td>{el.nama}</td>
          <td>{el.harga}</td>
          <td>{el.berat / 1000} Kg</td>
          <td className="btn">
            <button onClick={() => props.handleEdit(index)}>Edit</button>
            <button onClick={() => props.handleRemove(index)}>Delete</button>
          </td>
        </tr>
      );
    });
    return jsx;
  };

  return <>{inputData()}</>;
}
