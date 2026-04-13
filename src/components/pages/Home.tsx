import { UserForm } from "../UserForm";
import { useState } from "react";

import { UserList } from "../UserList";
import { useUsers } from "../hooks/useUsers";

export const Home = () => {
  const { users, addUser } = useUsers();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-5">
      <div className="flex items-center justify-center flex-col">
        <div className="border-b  border-gray-300 w-full flex flex-col items-center bg-gray-400 transition-all duration-300">
          <button
            className="border-2 h-9 w-30 text-xl my-5 cursor-pointer bg-gray-200/50 border-gray-200/50 rounded-2xl border-none"
            onClick={() => setIsOpen(true)}
          >
            Add User
          </button>
          {isOpen && (
            <UserForm onAddUser={addUser} onClose={() => setIsOpen(false)} />
          )}
        </div>

        <div className="border mt-5 w-full flex justify-center bg-gray-200 border-none h-145">
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
};
