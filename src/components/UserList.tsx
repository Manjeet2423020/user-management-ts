import type { User } from "./types/user";
import { useState } from "react";
type UserListProps = {
  users: User[];
};

export const UserList = ({ users }: UserListProps) => {
  const [search, setSearch] = useState("");

  // search user
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="flex justify-between bg-white mt-2 rounded-2xl px-2">
        <h2 className="text-2xl flex justify-center my-1 font-bold">
          User List
        </h2>
        <input
          className="bg-gray-100 h-8 mt-1 rounded-2xl px-2 outline-none"
          type="text"
          placeholder="Search user.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="border-2 border-white mt-5 p-2">
        <div className="grid grid-cols-[1fr_1fr_2fr_1fr_1fr] gap-4 border-b-2 border-white  pb-2 font-semibold mt-2  mb-5">
          <div>ID</div>
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>Status</div>
        </div>
        <div>
          {filteredUsers.map((user) => (
            <div
              className="grid grid-cols-[1fr_1fr_2fr_1fr_1fr] gap-4 my-3 p-2 bg-gray-100 rounded-xl "
              key={user.id}
            >
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.role}</div>
              <div>{user.isActive ? "Active" : "Inactive"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
