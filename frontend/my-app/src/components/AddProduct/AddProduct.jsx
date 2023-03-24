import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProduct.scss"

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await setTitle(title);
    await setDescription(description);
    await setPrice(price);
    const product = { title, description, price };
    await fetch(`https://localhost:7058/api/Products`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">title</label>
          <div className="control">
            <input
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">description</label>
          <div className="control">
            <input
              className="input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Description"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              className="input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder="Price"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default AddProduct;