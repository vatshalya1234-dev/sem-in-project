import { useState } from "react";

export default function SimpleParticipantForm() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const add = (e) => {
    e.preventDefault();
    setList([...list, { name, email }]);
    setName("");
    setEmail("");
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Event participants</h2>

      <form onSubmit={add}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((p, i) => (
          <li key={i}>
            {p.name} ({p.email}){" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
