# Next.js Frontend Integration Guide

This guide explains how to connect your Next.js application to the newly built Express backend.

## 1. Environment Setup

In your Next.js project (`ai-doctor`), create or update the `.env.local` file with the URL of your backend.

```env
# ai-doctor/.env.local
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 2. Authentication (Login) Example

When a user logs in, the backend returns a JSON Web Token (JWT). You should store this token (e.g., in `localStorage` or a secure cookie) to authenticate subsequent requests.

Here is an example login function you can use in a React component:

```javascript
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the JWT token for future requests
        localStorage.setItem('token', data.token);
        console.log('Login successful:', data);
        // Redirect user or update state
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
```

## 3. Fetching Protected Data

To access protected endpoints (like `GET /api/data`), you must include the JWT token in the `Authorization` header.

```javascript
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        console.log('No token found, user must log in');
        return;
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data`, {
          method: 'GET',
          headers: {
            // Attach the JWT token here
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setRecords(data);
        } else {
          console.error('Failed to fetch records:', data.message);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div>
      <h1>Your Records</h1>
      <ul>
        {records.map(record => (
          <li key={record._id}>{record.title} - {record.description}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Running the Backend

Open a new terminal, navigate to the `backend` folder, and run:

```bash
cd backend
npm run dev
```

Remember to also have your MongoDB server running locally if you haven't specified a cloud URL (like MongoDB Atlas) in your backend `.env` file.
