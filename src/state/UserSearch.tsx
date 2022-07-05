import React, { useState } from "react";

const users = [
  { name: "John", age: 30 },
  { name: "Sara", age: 25 },
  { name: "Bob", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name} {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
