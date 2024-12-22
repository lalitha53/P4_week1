import React, { useState } from 'react';

function UserDashboard() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St, City, Country',
  });

  const [orders, setOrders] = useState([
    { id: 1, product: 'Fashion Jacket', date: '2024-12-15', status: 'Shipped' },
    { id: 2, product: 'Denim Jeans', date: '2024-12-10', status: 'Delivered' },
    { id: 3, product: 'Stylish Sneakers', date: '2024-12-05', status: 'Pending' },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [newAddress, setNewAddress] = useState(user.address);

  const handleAddressChange = (e) => {
    setNewAddress(e.target.value);
  };

  const handleSaveAddress = () => {
    setUser({ ...user, address: newAddress });
    setEditMode(false);
  };

  return (
    <>
    <div className="user-dashboard-container">
      <h2>User Dashboard</h2>

      <div className="profile-section">
        <h3>Profile Information</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <div>
          <strong>Address:</strong>
          {editMode ? (
            <div>
              <input
                type="text"
                value={newAddress}
                onChange={handleAddressChange}
              />
              <button onClick={handleSaveAddress}>Save Address</button>
            </div>
          ) : (
            <p>{user.address}</p>
          )}
        </div>
        <button onClick={() => setEditMode(!editMode)}>
          {editMode ? 'Cancel' : 'Edit Address'}
        </button>
      </div>

      <div className="orders-section">
        <h3>Your Orders</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="wishlist-section">
        <h3>Your Wishlist</h3>
        {/* Wishlist items can be added here */}
        <p>No items in wishlist yet.</p>
      </div>
    </div>
    </>
  );
}

export default UserDashboard;
