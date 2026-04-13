import { useState } from "react";
import type { User } from "../types/user";
export const useUsers = () => {
  const initialUsers: User[] = [
    {
      id: 1234567821503,
      name: "Rahul",
      email: "rahul@example.com",
      role: "Admin",
      isActive: true,
    },
    {
      id: 2134567821503,
      name: "Aman",
      email: "aman@example.com",
      role: "User",
      isActive: false,
    },
  ];
  const [users, setUsers] = useState<User[]>(initialUsers);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return { users, addUser };
};
