import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "./userContext";

function Profile() {
  let context = useContext(UserContext)
  const [name, setName] = useState("")
  let changeProfile = () => {
    context.setUsername(name)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <label htmlFor="">Username</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => {setName(e.target.value); context.setUsername(name) }}
            type="text"
            name="name"
          />
          <button onClick={changeProfile} className="btn bt-sm btn-primary">
            Save
          </button>
          {name}
        </div>
      </div>
    </div>
  );
}

export default Profile;
