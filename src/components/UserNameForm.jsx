import { useState, useEffect } from 'react';

function UserNameForm({ setUserName }) {
  const [name, setName] = useState(() => localStorage.getItem("userName") || "");
  const [isEditing, setIsEditing] = useState(name === ""); // Show input only if name is empty

  useEffect(() => {
    localStorage.setItem("userName", name);
    setUserName(name);
  }, [name, setUserName]);

  const handleSave = () => {
    if (name.trim() !== "") {
      setIsEditing(false); // Hide input and show the name
    }
  };

  return (
    <div className="username-form">
      {isEditing ? (
        <div>
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleSave} // Save on blur (losing focus)
            autoFocus
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          {/* <p>Welcome, <strong>{name}</strong>! 👋</p> */}
          <button onClick={() => setIsEditing(true)}>Edit Name</button>
        </div>
      )}
    </div>
  );
}

export default UserNameForm;
