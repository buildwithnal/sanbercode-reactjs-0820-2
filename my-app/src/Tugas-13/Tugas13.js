import React, { useState, useEffect } from "react";
import axios from "axios";

import "./tugas13.css";

const Tugas13 = () => {
  const [dataBuah, setDataBuah] = useState(null);
  const [input, setInput] = useState({
    id: null,
    name: "",
    price: "",
    weight: 0,
  });

  useEffect(() => {
    const api = `http://backendexample.sanbercloud.com/api/fruits`;
    if (dataBuah === null) {
      axios.get(api).then((res) => {
        console.log(res.data);
        setDataBuah(res.data);
      });
    }
  }, [dataBuah]);

  const submitForm = (e) => {
    e.preventDefault();

    const api = `http://backendexample.sanbercloud.com/api/fruits`;

    if (input.id === null) {
      // const api = `http://backendexample.sanbercloud.com/api/fruits`;
      // console.log(input, "masuk");
      axios.post(api, input).then((res) => {
        console.log(res.data);
        setDataBuah([...dataBuah, input]);
        setInput({ id: null, name: "", price: "", weight: 0 });
      });
    } else {
      axios.put(`${api}/${input.id}`, input).then((res) => {
        let buahUpdate = dataBuah.map((x) => {
          if (x.id === input.id) {
            x.name = input.name;
            x.price = input.price;
            x.weight = input.weight;
          }
          return x;
        });
        setDataBuah(buahUpdate);
      });
    }
  };

  const deleteData = (id) => {
    const api = `http://backendexample.sanbercloud.com/api/fruits/${id}`;
    axios.delete(api).then((res) => {
      let newDataBuah = dataBuah.filter((x) => x.id !== id);
      setDataBuah(newDataBuah);
    });
  };

  const editForm = (id) => {
    let buah = dataBuah.find((x) => x.id === id);
    console.log(buah);
    setInput({
      id: buah.id,
      name: buah.name,
      price: buah.price,
      weight: buah.weight,
    });
  };

  const handleChangeName = (e) => {
    let value = e.target.value;
    setInput({
      ...input,
      name: value,
    });
  };

  const handleChangePrice = (e) => {
    let value = e.target.value;
    setInput({
      ...input,
      price: value,
    });
  };

  const handleChangeWeight = (e) => {
    let value = e.target.value;
    setInput({
      ...input,
      weight: value,
    });
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}> Daftar Harga Buah</h1>
        <table>
          <thead style={{ background: "#aaa" }}>
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataBuah !== null &&
              dataBuah.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.weight / 1000} kg</td>
                    <td>
                      <button onClick={() => editForm(item.id)}>Edit</button>
                      &nbsp;
                      <button onClick={() => deleteData(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* Form */}
      <div>
        <h1>Form Daftar Harga Buah</h1>
        <div style={{ width: "50%", margin: "0 auto", display: "block" }}>
          <div style={{ border: "1px solid #aaa", padding: "20px" }}>
            <form onSubmit={submitForm}>
              <label style={{ float: "left" }}>Nama:</label>
              <input
                style={{ float: "right" }}
                type="text"
                name="name"
                value={input.name}
                onChange={handleChangeName}
              />
              <br />
              <br />
              <label style={{ float: "left" }}>Harga:</label>
              <input
                style={{ float: "right" }}
                type="text"
                name="harga"
                value={input.price}
                onChange={handleChangePrice}
              />
              <br />
              <br />
              <label style={{ float: "left" }}>Berat (dalam gram):</label>
              <input
                style={{ float: "right" }}
                type="number"
                name="berat"
                value={input.weight}
                onChange={handleChangeWeight}
              />
              <br />
              <br />
              <div style={{ width: "100%", paddingBottom: "20px" }}>
                <button style={{ float: "right" }}>submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tugas13;
