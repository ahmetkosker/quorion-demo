import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

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
    };

    return (
        <div>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        id="name"
                        name="name"
                        value={name}
                        type={"text"}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="brand">Brand: </label>
                    <input
                        id="brand"
                        name="brand"
                        value={brand}
                        type={"text"}
                        onChange={(e) => setBrand(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input
                        id="price"
                        name="price"
                        value={price}
                        type={"number"}
                        onChange={(e) => setPrice(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="wholeprice">Wholesale Price: </label>
                    <input
                        id="wholeprice"
                        name="wholeprice_price"
                        value={wholesale_price}
                        type={"number"}
                        onChange={(e) => setWholePrice(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="quantity">Quantity: </label>
                    <input
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        type={"number"}
                        onChange={(e) => setQuantity(e.target.value)}
                    ></input>
                </div>
                <div>
                    <button type={"submit"}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;

if (document.getElementById("addProduct")) {
    ReactDOM.render(<AddProduct />, document.getElementById("addProduct"));
}
