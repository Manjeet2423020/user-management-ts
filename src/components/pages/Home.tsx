import { UserForm } from "../UserForm";
import { useState } from "react";
import { Button } from "../common/button/Button";
import { UserList } from "../UserList";
import { useUsers } from "../hooks/useUsers";
import { FaUser } from "react-icons/fa";
import img from "../../assets/img.png";
import { FiUsers } from "react-icons/fi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

export const Home = () => {
  const { users, addUser } = useUsers();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5  px-5  flex">
      <div className="hidden sm:block">
        <div className="border-r-2 border-gray-300 w-[160px] min-h-screen flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <img className="w-[80%] mb-5" src={img} alt="photo" />
            <h2 className="flex items-center justify-start pl-2 gap-2 text-base bg-gray-200 rounded-xl w-[100px] h-[40px]">
              <FiUsers /> Users
            </h2>
            <h2 className="flex items-center justify-start pl-2 gap-2 text-base w-[100px] h-[40px]">
              <BsGraphUpArrow />
              sales
            </h2>
            <h2 className="flex items-center justify-start pl-2 gap-2 text-base w-[100px] h-[40px]">
              <FaRegCreditCard />
              Finances
            </h2>
            <h2 className="flex items-center justify-start pl-2 gap-2 text-base w-[100px] h-[40px]">
              <MdContentCopy />
              Content
            </h2>
            <h2 className="flex items-center justify-start pl-2 gap-2 text-base w-[100px] h-[40px]">
              <GoReport />
              Disputes
            </h2>
            <h2 className="flex items-center justify-start pl-2 gap-2 text-base w-[100px] h-[40px]">
              <MdOutlineForwardToInbox />
              Inbox
            </h2>
            <h2 className="flex items-center justify-start pl-2 gap-2 text-base w-[100px] h-[40px]">
              <IoSettingsOutline />
              Settings
            </h2>
          </div>
          <div className="flex justify-end flex-col">
            <h2 className="flex items-center justify-start pl-2 mb-8 gap-2 text-base w-[100px] h-[40px]">
              <MdLogout />
              Log out
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center  flex-col  w-full mx-5">
        <div className="  w-full flex justify-between pl-2  items-center pr-10 sm:pr-0 ">
          <h2 className="text-2xl flex gap-2 items-center">
            User Management <FaUser />
          </h2>
          <Button onClick={() => setIsOpen(true)}>Add User</Button>
          {isOpen && (
            <UserForm onAddUser={addUser} onClose={() => setIsOpen(false)} />
          )}
        </div>
        <div className="flex  flex-wrap justify-between w-full mt-3 gap-1 md:gap-0 mr-6 sm:mr-0">
          <div className="lg:w-[32%] sm:w-[48%] w-full h-[130px] border-2 rounded-xl flex flex-wrap border-gray-300">
            <div className="p-2">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-500/80">Total users</h1>
                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-2xl">
                  <FiUsers />
                </div>
              </div>
              <span className="text-2xl font-semibold">1240</span>
              <div className="flex flex-wrap gap-2 mt-2 font-semibold">
                <span className="text-green-500 text-sm">+40%</span>
                <span className="text-gray-500/80 text-sm">vs last month</span>
              </div>
            </div>
          </div>
          <div className="lg:w-[32%] sm:w-[48%] w-full h-[130px] border-2 rounded-xl  border-gray-300">
            <div className="p-2">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-500/80">New users</h1>
                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-2xl">
                  <FiUsers />
                </div>
              </div>
              <span className="text-2xl font-semibold">185</span>
              <div className="flex flex-wrap gap-2 mt-2 font-semibold">
                <span className="text-green-500 text-sm">+10%</span>
                <span className="text-gray-500/80 text-sm">vs last month</span>
              </div>
            </div>
          </div>
          <div className="lg:w-[32%] sm:w-[48%] w-full h-[130px] border-2 rounded-xl  border-gray-300">
            <div className="p-2">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-500/80">Active users</h1>
                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-2xl">
                  <FiUsers />
                </div>
              </div>
              <span className="text-2xl font-semibold">650</span>
              <div className="flex flex-wrap gap-2 mt-2 font-semibold">
                <span className="text-red-600 text-sm">+5%</span>
                <span className="text-gray-500/80 text-sm">vs last month</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 mt-5 w-full border-gray-300 rounded-xl min-h-[500px] mr-6 sm:mr-0 ">
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
};
