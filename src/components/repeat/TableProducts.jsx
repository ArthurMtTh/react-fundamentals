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
        <table style={{width:'100%'}}>
            <tr>
                <th>id</th>
                <th>fruit</th>
                <th>price US$</th>
            </tr>
            {table}
        </table>
    )
}

export default tableProducts;