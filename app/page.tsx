import MemoryGame from "@/components/MemoryGame";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MemoryGame />
    </main>
  );
}

// "use client"
// import { useEffect, useState } from 'react';

// type User = {
//   id: string;
//   name: string;
//   email: string;
//   attempts: number;
// };


// function Users() {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     async function fetchUsers() {
//       const res = await fetch('/api/users');
//       const data: User[] = await res.json();
//       setUsers(data);
//       console.log(data);
//     }

//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users?.map(user => (
//           <li key={user.id}>{user.name} ({user.email})</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Users;

