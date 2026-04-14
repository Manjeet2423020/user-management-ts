import { useState } from "react";
import type { Role, User } from "./types/user";
import { Button } from "./common/button/Button";
import { FaUserAlt } from "react-icons/fa";

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
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 ">
      <div className="bg-white relative flex items-center flex-col  h-120 w-[400px] rounded-2xl">
        <div>
          <div className="  py-3 flex justify-end pr-3 text-2xl font-semibold bg-gray-300 w-[400px] border-t-2 rounded-2xl border-gray-200 ">
            User Form
          </div>
          <div className="absolute left-5 top-[60px] transform -translate-y-1/2">
            <div className="h-20 w-20 text-4xl bg-gray-200 flex items-center justify-center ml-3 rounded-full border-white border-2 ">
              <FaUserAlt />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-15 flex-col w-full px-5">
          <div className="flex flex-col">
            <div className="flex flex-col gap-3 w-full ">
              <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <h2>Name -</h2>
                  <input
                    className="border-2 border-gray-200 p-1 outline-none rounded-xl "
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
                    className="border-2 border-gray-200 p-1 outline-none rounded-xl"
                    placeholder="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* create a role option to chose role admin or user */}

              <div className="flex flex-col gap-3 justify-center mt-2 w-[30%]">
                <div className="flex flex-col gap-1">
                  <span>Select role</span>
                  <select
                    className=" p-1 border-2 border-gray-300 rounded-xl cursor-pointer outline-none"
                    value={role}
                    onChange={(e) => setRole(e.target.value as Role)}
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>

                {/* create a checkbox for check active or not user */}

                <div className="flex flex-col gap-1">
                  <span>status</span>
                  <label className="flex items-center gap-2  p-1 border-2 border-gray-300 rounded-xl cursor-pointer">
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

            <div className="flex gap-5 mt-5 justify-center ">
              <Button onClick={handleSubmit}>submit</Button>
              <Button onClick={onClose}>Close</Button>
              {/* <button  onClick={onClose}>Close</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
