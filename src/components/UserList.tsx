import type { User } from "./types/user";
import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

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
      <div className="flex justify-between flex-wrap mt-2 rounded-2xl px-5 pt-2 ">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl flex justify-center my-1 font-bold">
            User List
          </h2>
          <span className="text-xs border p-1 bg-gray-200 border-gray-300 rounded-lg">
            1240 users
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <input
            className="bg-gray-200  mt-1 rounded-2xl px-2 outline-none"
            type="text"
            placeholder="Search user.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex items-center justify-center rounded-xl gap-1 border-2 border-gray-200 w-25">
            <IoFilter />
            <span>Filtres</span>
          </div>
          <div className="flex items-center justify-center rounded-xl gap-1 border-2 border-gray-200 w-35">
            <span>Last 30 days</span>
            <FaAngleDown />
          </div>
        </div>
      </div>

      <div className="border-t-3 border-gray-200 mt-5 flex flex-warp flex-col flex-wrap overflow-x-auto">
        <div className="grid grid-cols-[1fr_1fr_2fr_1fr_1fr] gap-4 border-b-3  border-gray-200  pb-2 font-semibold mt-2  mb-5 px-2 place-items-center">
          <div>ID</div>
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>Status</div>
        </div>
        <div>
          {filteredUsers.map((user) => (
            <div
              className="grid grid-cols-[1fr_1fr_2fr_1fr_1fr] gap-4 my-3 p-2 border-b-3 border-gray-200 place-items-center "
              key={user.id}
            >
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.role}</div>
              <div
                className={`px-2 py-1 rounded text-sm font-semibold ${
                  user.isActive
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {user.isActive ? "Active" : "Inactive"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
