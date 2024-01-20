import { useState } from "react";
import OzziLila from "./components/OzziLila/OzziLila";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");

  const handlePasswordInput = () => {
    const passwordInput = document.querySelector(".password__input");
    setPassword(passwordInput.value.toLowerCase());
  };

  return (
    <>
      <header>
        <h1 className="header__title">
          Walentynki od Kondiego <span className="heart">❤</span>
        </h1>
        <img
          className="kondi-heart"
          src="./kondi_serce.png"
          alt="Kondi Serduszko <3"
        />
        <div className="password">
          <input
            className="password__input"
            type="text"
            placeholder="Tu wpisz hasło..."
          />
          <button className="btn" onClick={handlePasswordInput}>
            No kliknij
          </button>
        </div>
      </header>

      <main>
        {password === "ozzilila" ? (
          <OzziLila />
        ) : password === "karzelek" ? (
          <section></section>
        ) : (
          ""
        )}
      </main>
    </>
  );
}

export default App;
