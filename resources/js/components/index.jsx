import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import ProductTable from "./ProductTable";
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

    const [products, setProducts] = useState([]);
    const [lang, setLang] = useState("tr");
    const [columns, setColumns] = useState(columnsTR);

    const getData = () => {
        setProducts(JSON.parse(props.products));
    };

    const langChange = (value) => {
        value === "tr" ? setColumns(columnsTR) : setColumns(columnsENG);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        langChange(lang);
    }, [lang]);

    return (
        <>
            <nav>
                <div className="container">
                    <div>
                        <h1>Products</h1>
                    </div>
                    <div>
                        <h1>LOREM</h1>
                    </div>
                </div>
            </nav>

            <div className="table-container">
                <select name="lang" onChange={(e) => setLang(e.target.value)}>
                    <option value="tr">Türkçe</option>
                    <option value="eng">English</option>
                </select>
                <ProductTable columns={columns} data={products} />
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
