import React, { useState } from 'react';

function AdminDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Fashion Jacket', price: 50, stock: 20 },
    { id: 2, name: 'Denim Jeans', price: 30, stock: 50 },
    { id: 3, name: 'Stylish Sneakers', price: 70, stock: 15 },
  ]);

  const [orders, setOrders] = useState([
    { id: 1, product: 'Fashion Jacket', customer: 'John Doe', status: 'Shipped' },
    { id: 2, product: 'Denim Jeans', customer: 'Jane Smith', status: 'Pending' },
    { id: 3, product: 'Stylish Sneakers', customer: 'Sam Wilson', status: 'Shipped' },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
    { id: 3, name: 'Sam Wilson', email: 'samwilson@example.com' },
  ]);

  const handleAddProduct = () => {
    const newProduct = { id: products.length + 1, name: 'New Product', price: 60, stock: 10 };
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, name: 'Updated Product' } : product
    );
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  return (
    <>
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>

      <div className="section">
        <h3>Product Management</h3>
        <button onClick={handleAddProduct}>Add New Product</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <button onClick={() => handleEditProduct(product.id)}>Edit</button>
                  <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h3>Order Management</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.customer}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h3>User Management</h3>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default AdminDashboard;
