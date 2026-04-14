import { UserForm } from "../UserForm";
import { useState } from "react";
import { Button } from "../common/button/Button";
import { UserList } from "../UserList";
import { useUsers } from "../hooks/useUsers";
import { FaUser } from "react-icons/fa";

export const Home = () => {
  const { users, addUser } = useUsers();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-3 px-5 bg-gray-100">
      <div className="flex items-center justify-center flex-col">
        <div className="  w-full flex justify-between  items-center  transition-all duration-300">
          <h2 className="text-2xl flex gap-2 items-center">
            User Management <FaUser />
          </h2>
          <Button onClick={() => setIsOpen(true)}>Add User</Button>
          {isOpen && (
            <UserForm onAddUser={addUser} onClose={() => setIsOpen(false)} />
          )}
        </div>

        <div className="border mt-5 w-full flex justify-center bg-gray-200 border-none h-200">
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
};
