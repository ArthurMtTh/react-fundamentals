import React from "react";
import products from "../../data/products";
import './Repeat.css';

const tableProducts = (props) => {

    const table = products.map((fruit) => {
        return (
            <tr key={fruit.id}>
                <td>{fruit.id}</td>
                <td>{fruit.product}</td>
                <td>{fruit.price}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fruit</th>
                    <th>Price US$</th>
                </tr>
            </thead>
            <tbody>
                {table}
            </tbody>
        </table>
    )
}

export default tableProducts;