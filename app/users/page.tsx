//'use client';
//import { useEffect, useState } from 'react';
import users from "../../data/users.json";
//import axios from 'axios';
//import type { User } from '../../types/user';

export default function UsersPage() {
  //const [users, setUsers] = useState<User[]>([]);

  /*useEffect(() => {
    axios.get<User[]>('/api/users').then((res) => setUsers(res.data));
  }, []);*/

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Users</h1>
      <div className="bg-white rounded shadow p-4">
        <ul>
          {users.map((u) => (
            <li key={u.id} className="border-b py-2">
              {u.name} — {u.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
