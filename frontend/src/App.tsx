import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/api/users`)
      .then(r => r.json())
      .then(data => setUsers(data.data || []))
      .catch(() => setStatus('API not connected — running in demo mode'));
  }, []);

  const addUser = async () => {
    if (!name || !email) { setStatus('Name and email required'); return; }
    const res = await fetch(`${API_URL}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    const data = await res.json();
    if (data.success) {
      setUsers([...users, data.data]);
      setName(''); setEmail(''); setStatus('User added!');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: 600, margin: '40px auto', padding: 20 }}>
      <h1>Full-Stack 3-Tier App</h1>
      <p>TypeScript · React · Node.js · PostgreSQL · Docker · CI/CD</p>
      {status && <p style={{ color: 'orange' }}>{status}</p>}
      <div style={{ marginBottom: 20 }}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)}
          style={{ marginRight: 8, padding: 8 }} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          style={{ marginRight: 8, padding: 8 }} />
        <button onClick={addUser} style={{ padding: '8px 16px' }}>Add User</button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ padding: 8, border: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: 8, border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: 8, border: '1px solid #ddd' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td style={{ padding: 8, border: '1px solid #ddd' }}>{u.id}</td>
              <td style={{ padding: 8, border: '1px solid #ddd' }}>{u.name}</td>
              <td style={{ padding: 8, border: '1px solid #ddd' }}>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
