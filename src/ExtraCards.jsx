import { useState } from "react";
import Content from "./Contenttemp.jsx";

function ExtraCards() {
  const [name, setName] = useState("");
  const [para, setPara] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("true");
  const [isGood, setIsGood] = useState("true");
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCard = {
      name,
      para,
      age: Number(age),
      gender: gender === "true",
      isGood: isGood === "true",
    };
    setCards([...cards, newCard]);
  };

  const removeCard = () => {
    if (cards.length > 0) {
      setCards(cards.slice(0, -1));
    }
  };

  const deleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>⚡ Create Your Pokémon Card</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "1.5rem",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={para}
          onChange={(e) => setPara(e.target.value)}
        />
        <input
          type="number"
          placeholder="Power"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="true">Strength</option>
          <option value="false">Wisdom</option>
        </select>
        <select value={isGood} onChange={(e) => setIsGood(e.target.value)}>
          <option value="true">Cute</option>
          <option value="false">Not Cute</option>
        </select>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <button style={{ marginRight: "1rem" }} onClick={addCard}>
          ➕ Add Card
        </button>
        <button onClick={removeCard}>🗑️ Remove Last</button>
      </div>

      <p style={{ marginBottom: "1rem" }}>Total Cards: {cards.length}</p>

      <div
        className="content-container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}
      >
        {cards.map((card, index) => (
          <div key={index}>
            <Content
              name={card.name}
              para={card.para}
              age={card.age}
              Gender={card.gender}
              isgood={card.isGood}
            />
            <button
              onClick={() => deleteCard(index)}
              style={{
                marginTop: "0.5rem",
                padding: "0.3rem 0.7rem",
                backgroundColor: "#f87171",
                color: "white",
                border: "none",
                borderRadius: "0.4rem",
                cursor: "pointer",
              }}
            >
              ❌ Delete This Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExtraCards;
