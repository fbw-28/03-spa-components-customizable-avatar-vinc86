import React from "react";
import Avatar from "./components/Avatar";
import avatar from "./components/avatar.jpg";
function App() {
  return (
    <div>
      <h1>Select your Avatar</h1>
      <div className="avatar-page">
        <Avatar size="s" type="square" width="30" height="30" />
        <Avatar size="s" type="rounded" width="30" height="30" />
        <Avatar size="s" type="circle" width="30" height="30" />
        <Avatar size="m" type="square" width="60" height="60" />
        <Avatar size="m" type="rounded" width="60" height="60" />
        <Avatar size="m" type="circle" width="60" height="60" />
        <Avatar size="l" type="square" width="120" height="120" />
        <Avatar size="l" type="rounded" width="120" height="120" />
        <Avatar size="l" type="circle" width="120" height="120" />
        <Avatar size="xl" type="square" width="200" height="200" />
        <Avatar size="xl" type="rounded" width="200" height="200" />
        <Avatar size="xl" type="circle" width="200" height="200" />
      </div>
    </div>
  );
}

export default App;
