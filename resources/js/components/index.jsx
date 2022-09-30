import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ProductTable from "./ProductTable";
import AddProduct from "./addProduct";
import "../../css/app.css";

const App = (props) => {
    const columnsTR = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },

            {
                Header: "İsim",
                accessor: "name",
            },
            {
                Header: "Marka",
                accessor: "brand",
            },
            {
                Header: "Fiyat",
                accessor: "price",
                aggregate: "sum",
                Aggregated: ({ value }) => `${value} (sum)`,
            },
            {
                Header: "Toptan Satış Fiyatı",
                accessor: "wholesale_price",
                aggregate: "sum",
                Aggregated: ({ value }) => `${value} (sum)`,
            },

            {
                Header: "Miktar",
                accessor: "quantity",
                aggregate: "sum",
                Aggregated: ({ value }) => `${value} (sum)`,
            },
        ],
        []
    );

    const columnsENG = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },

            {
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "Brand",
                accessor: "brand",
            },
            {
                Header: "Price",
                accessor: "price",
                aggregate: "sum",
                Aggregated: ({ value }) => `${value} (sum)`,
            },
            {
                Header: "Wholesale Price",
                accessor: "wholesale_price",
                aggregate: "sum",
                Aggregated: ({ value }) => `${value} (sum)`,
            },

            {
                Header: "Quantity",
                accessor: "quantity",
                aggregate: "sum",
                Aggregated: ({ value }) => `${value} (sum)`,
            },
        ],
        []
    );

    const [productstr, setProductstr] = useState([]);
    const [lang, setLang] = useState("tr");
    const [columns, setColumns] = useState(columnsTR);
    const [productsen, setProductsen] = useState([]);
    const [TRY, setTRY] = useState("true");
    const [data, setData] = useState([]);
    const [usd, setUsd] = useState(18);

    const getData = () => {
        setProductstr(JSON.parse(props.products));
        setProductsen(JSON.parse(props.products));
        productsen.map((product) => {
            product.price = (product.price / usd).toFixed(2);
            product.wholesale_price = (product.wholesale_price / usd).toFixed(
                2
            );
        });
    };

    const langChange = (value) => {
        value === "tr" ? setColumns(columnsTR) : setColumns(columnsENG);
    };

    const getCurrency = () => {
        const options = {
            method: "GET",
            url: "https://currencyscoop.p.rapidapi.com/latest",
            headers: {
                "X-RapidAPI-Key":
                    "4ac44842a0msh6cca32579977d63p1cf944jsn8c78bb15199c",
                "X-RapidAPI-Host": "currencyscoop.p.rapidapi.com",
            },
        };

        axios
            .request(options)
            .then(function (response) {
                setUsd(response.data.response.rates.TRY);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    useEffect(() => {
        getData();
        TRY === "true" ? setData(productstr) : setData(productsen);
    }, [TRY]);

    useEffect(() => {
        langChange(lang);
    }, [lang]);

    useEffect(() => {
        getCurrency();
    }, [TRY]);

    useEffect(() => {
        setData(JSON.parse(props.products));
    }, []);

    return (
        <>
            <nav>
                <div className="container">
                    <div>
                        <h1>
                            <a href="/">Products</a>
                        </h1>
                    </div>
                    <div>
                        <h1>
                            <a href="/add">Add Product</a>
                        </h1>
                    </div>
                </div>
            </nav>
            <header>
                <div className="container">
                    <div className="lorem">
                        <h1>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </h1>
                    </div>
                </div>
            </header>
            <div className="table-container">
                <select name="lang" onChange={(e) => setLang(e.target.value)}>
                    <option value="tr">Türkçe</option>
                    <option value="eng">English</option>
                </select>
                <ProductTable columns={columns} data={data} tr={TRY} />
                <select name="lang" onChange={(e) => setTRY(e.target.value)}>
                    <option value={true}>Türk Lirası</option>
                    <option value={false}>USD</option>
                </select>
            </div>
        </>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(
        <App products={document.getElementById("app").getAttribute("name")} />,
        document.getElementById("app")
    );
}

if (document.getElementById("addProduct")) {
    ReactDOM.render(<AddProduct />, document.getElementById("addProduct"));
}
