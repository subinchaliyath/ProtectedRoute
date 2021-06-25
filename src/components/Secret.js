import React from "react";

const Secret = ({ username }) => {
  return (
    <div>
      <h1>Secret- only by logged in user</h1>
      <p>{username}</p>
    </div>
  );
};

export default Secret;
