import type { User } from "./types/user";
type UserListProps = {
  users: User[];
};

export const UserList = ({ users }: UserListProps) => {
  return (
    <div>
      <h2 className="text-2xl flex justify-center my-5 font-bold">User List</h2>

      <div>
        <div className="flex gap-10 border-b pb-1">
          <div className="w-35 pl-5 font-semibold">ID</div>
          <div className="w-35 font-semibold pl-2">Name</div>
          <div className="w-40 font-semibold pl-10">Email</div>
          <div className="w-35 font-semibold pl-3">Role</div>
          <div className="w-35 font-semibold pl-2">Status</div>
        </div>
        <div>
          {users.map((user) => (
            <div
              className="flex gap-10 my-5 p-1 bg-gray-400 rounded-xl h-10 "
              key={user.id}
            >
              <div className="w-35">{user.id}</div>
              <div className="w-35">{user.name}</div>
              <div className="w-40">{user.email}</div>
              <div className="w-35">{user.role}</div>
              <div className="w-35 ">
                {user.isActive ? "Active" : "Inactive"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
