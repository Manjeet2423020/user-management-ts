import { useState } from "react";
import type { Role, User } from "./types/user";
import { Button } from "./common/button/Button";

// props define for user form
type UserFormProps = {
  onAddUser: (user: User) => void;
  onClose: () => void;
};

export const UserForm = ({ onAddUser, onClose }: UserFormProps) => {
  //   const [id, setId] = useState<number>(Date.now());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("User");
  const [isActive, setIsActive] = useState(false);

  // submit button

  const handleSubmit = () => {
    const newUser = {
      id: Date.now(),
      //   id: crypto.randomUUID(),
      name,
      email,
      role,
      isActive,
    };
    onAddUser(newUser);
  };

  return (
    <div className="m-5 border p-5 bg-gray-200/50 border-gray-200/50 rounded-xl">
      <h2 className="flex items-center justify-center text-xl mb-3 ">
        User Form
      </h2>

      <div className="flex flex-col">
        <div className="flex gap-3">
          <input
            className="border p-1"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="border p-1"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* create a role option to chose role admin or user */}

          <select
            className="border p-1"
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>

          {/* create a checkbox for check active or not user */}

          <label className="flex items-center gap-2 border p-1 cursor-pointer">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />
            <span>isActive</span>
          </label>
        </div>

        {/* final submit button to submit a form */}

        <div className="flex gap-5 mt-5 justify-center ">
          <Button onClick={handleSubmit}>submit</Button>
          <Button onClick={onClose}>Close</Button>
          {/* <button  onClick={onClose}>Close</button> */}
        </div>
      </div>
    </div>
  );
};
