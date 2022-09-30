import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../../css/ag.css";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState(0);
    const [wholesale_price, setWholePrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleForm = (e) => {
        e.preventDefault();

        const data = {
            name: name,
            brand: brand,
            price: price,
            wholesale_price: wholesale_price,
            quantity: quantity,
        };

        axios
            .post("/save", data)
            .then((response) => console.log(JSON.stringify(response.data)))
            .catch((error) => {
                console.log("ERROR:: ", error.response.data);
            });
        window.location = "/";
    };

    return (
        <div className="container">
            <div className="form">
                <form onSubmit={handleForm} className="add-form">
                    <label htmlFor="quantity">Name</label>
                    <input
                        id="name"
                        name="name"
                        value={name}
                        type={"text"}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    ></input>
                    <label htmlFor="quantity">Brand</label>
                    <input
                        id="brand"
                        name="brand"
                        value={brand}
                        type={"text"}
                        onChange={(e) => setBrand(e.target.value)}
                        placeholder="Brand"
                    ></input>
                    <label htmlFor="quantity">Price</label>
                    <input
                        id="price"
                        name="price"
                        value={price}
                        type={"number"}
                        onChange={(e) => setPrice(e.target.value)}
                    ></input>
                    <label htmlFor="quantity">Wholesale price </label>
                    <input
                        id="wholeprice"
                        name="wholeprice_price"
                        value={wholesale_price}
                        type={"number"}
                        onChange={(e) => setWholePrice(e.target.value)}
                    ></input>
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        type={"number"}
                        onChange={(e) => setQuantity(e.target.value)}
                    ></input>
                    <button type="submit" className="btn">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;

if (document.getElementById("addProduct")) {
    ReactDOM.render(<AddProduct />, document.getElementById("addProduct"));
}
