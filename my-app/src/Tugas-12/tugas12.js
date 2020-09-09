import React, { Component } from "react";
import ListBuah from "./ListBuah";

import "./tugas12.css";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

class tugas12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: dataHargaBuah,
      nama: "",
      harga: "",
      berat: "",
    };
  }

  // Handle add items
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = [{ ...this.state }];
    const { items } = this.state;
    // console.log(newItem[0].nama);
    if (newItem[0].name !== "") {
      this.setState({
        items: [...items, newItem[0]],
      });
    }
  };

  // Handle remove items
  handleRemove = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
  };

  // Handle edit items
  handleEdit = (index) => {
    // const value = e.target.value;
    let items = this.state.items[index];
    console.log(items);
  };

  // Handle fields change
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  };

  render() {
    const { nama, harga, berat } = this.state;

    return (
      <div className="wrapper-tugas12">
        <h1>Tabel Harga Buah</h1>
        <table className="table-tugas12">
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
          </tr>
          <ListBuah
            handleEdit={this.handleEdit}
            handleRemove={this.handleRemove}
            data={this.state.items}
          />
        </table>
        <form onSubmit={this.handleSubmit}>
          <strong>Nama</strong>
          <input
            type="text"
            onChange={this.handleChange}
            value={nama}
            name="nama"
          />
          <strong>Harga</strong>
          <input
            type="text"
            onChange={this.handleChange}
            value={harga}
            name="harga"
          />
          <strong>Berat</strong>
          <input
            type="text"
            onChange={this.handleChange}
            value={berat}
            name="berat"
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default tugas12;
