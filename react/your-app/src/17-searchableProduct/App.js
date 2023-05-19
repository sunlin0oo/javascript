import React, { useEffect, useState } from 'react';
import './css/serachProduct.css';

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;
    return (
        <tr>
            <td className='ProductRow'>{name}</td>
            <td className='ProductRow'>{product.price}</td>
        </tr>
    )
}

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th className='productCategory' colSpan="2">
                {category}
            </th>
        </tr>
    )
}

function ProductTable({ products, filterText, inStockOnly }) {
    // 状态是用于交互部分，尽量不要使用状态构建静态部分
    // const [row, setRow] = useState([])
    // useEffect(() => {
    //     const array = [];
    //     let lastCategory = null;
    //     products.forEach((item) => {
    //         if (lastCategory !== item.category) {
    //             array.push(<ProductCategoryRow category={item.category} key={item.category} />)
    //         }
    //         array.push(<ProductRow product={item} key={item.name} />);
    //         lastCategory = item.category;
    //     })
    //     setRow(array);
    // }, [products])

    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(
            filterText.toLowerCase()
        ) === -1) return;
        
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });
    return (
        <table>
            <thead>
                <tr className='trClass'>
                    <th className='productTable'>Name</th>
                    <th className='productTable'>Price</th>
                </tr>
            </thead>
            <tbody className='tbodyCategoryRow'>{rows}</tbody>
        </table>
    )
}

function SearchBar({ filterText, inStockOnly, onChangeFilterText,onChangeInStockOnly}) {
    return (
        <form className='Form'>
            <input className="search" type="text" placeholder="搜索.." name="search" value={filterText} onChange={(e) => onChangeFilterText(e.target.value)}></input>
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={(e) => onChangeInStockOnly(e.target.checked)}></input>
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}

function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div className='content'>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onChangeFilterText={setFilterText} onChangeInStockOnly={setInStockOnly}></SearchBar>
            <ProductTable filterText={filterText} inStockOnly={inStockOnly} products={products}></ProductTable>
        </div>
    )
}

export default function App() {
    return <FilterableProductTable products={PRODUCTS} />;
}
