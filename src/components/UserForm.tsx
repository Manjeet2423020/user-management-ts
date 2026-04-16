import { useState } from "react";
import type { Role, User } from "./types/user";
import { Button } from "./common/button/Button";

import { IoIosArrowDown } from "react-icons/io";

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

  // validation function
  const validateForm = () => {
    if (!name.trim()) {
      alert("Please enter a name");
      return false;
    }
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      alert("Please enter an email");
      return false;
    } else if (!emailValidate.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
  };

  // submit button

  const handleSubmit = () => {
    if (!validateForm()) return;
    const newUser = {
      id: Date.now(),
      //   id: crypto.randomUUID(),
      name,
      email,
      role,
      isActive,
    };
    onAddUser(newUser);
    setName("");
    setEmail("");
    setRole("User");
    setIsActive(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 ">
      <div className="bg-white relative flex items-center flex-col  h-110 w-[350px] rounded-2xl">
        <div>
          <div className="  py-3 flex justify-center  pr-3 text-2xl font-semibold  w-[350px] border-t-2 rounded-2xl border-gray-200 ">
            User Form
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-5 flex-col w-full px-5">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 w-full ">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h2>Name -</h2>
                  <input
                    className="border-2 border-gray-200 p-1 outline-none rounded-xl h-10 "
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1 ">
                  <h2>Email -</h2>
                  <input
                    type="email"
                    className="border-2 border-gray-200 p-1 outline-none rounded-xl h-10"
                    placeholder="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* create a role option to chose role admin or user */}

              <div className="flex items-center justify-between mt-2 ">
                <div className="flex flex-col gap-1 relative">
                  <span>Select role</span>
                  <select
                    className=" p-1 px-3  appearance-none  w-35 border-2 border-gray-300 rounded-xl cursor-pointer outline-none"
                    value={role}
                    onChange={(e) => setRole(e.target.value as Role)}
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                  <div className="absolute right-3 top-9 pointer-events-none">
                    <IoIosArrowDown />
                  </div>
                </div>

                {/* create a checkbox for check active or not user */}

                <div className="flex flex-col gap-1">
                  <span>status</span>
                  <label className="flex items-center gap-2 w-35  p-1 pl-3 border-2 border-gray-300 rounded-xl cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isActive}
                      onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <span>isActive</span>
                  </label>
                </div>
              </div>
            </div>

            {/* final submit button to submit a form */}

            <div className="flex flex-col  gap-5 mt-6 justify-center ">
              <Button
                className="border-2 h-10 border-gray-400 font-semibold"
                onClick={handleSubmit}
              >
                submit
              </Button>
              <Button
                className="border-2 h-10 border-gray-400 font-semibold"
                onClick={onClose}
              >
                Close
              </Button>

              {/* <button  onClick={onClose}>Close</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
