import "./Productlist.scss" 
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Productlist= () => {
   
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
       const response = await fetch(`https://localhost:7058/api/Products`);
       const data = await response.json();
       setProducts(data);
    }
    
    const deleteProduct = async(id) => {
        await fetch(`https://localhost:7058/api/Products/${id}`,{
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        fetchData();
    }
   
    return (
        <div>
            <Link to="/add" className="button is-primary mt-5">Add New</Link>
           <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {product.map((product,index) => (
                    <tr key= {product.id}>
                        <td>{index + 1}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>
                            <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                            <button onClick={() => deleteProduct(product.id)}
                            className="button is-small is-danger">Delete</button> 
                        </td>
                    </tr>
                ))}
                
            </tbody>
           </table>
        </div>
    )
}
export default Productlist;
