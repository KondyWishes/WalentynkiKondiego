import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState(null);

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
          <button className="btn">No kliknij</button>
        </div>
      </header>
    </>
  );
}

export default App;
