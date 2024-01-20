import React from "react";
import "./OzziLila.css";

const OzziLila = () => {
  return (
    <section className="ozzilila">
      <h2 className="ozzilila__header">
        Oskar <span className="heart">❤</span> Lila
      </h2>
      <div className="ozzilila__rhyme">
        <p className="ozzilila__description">
          <i>
            "Lila Oskar bratnie dusze,
            <br /> Mają twarze wesołusze."
          </i>
        </p>
        <p className="ozzilila__description">
          <i>
            "Oskar z Lilą dwa kochanki,
            <br /> Oboje głupi jak baranki. XD"
          </i>
        </p>
      </div>

      <div className="ozzilila__main">
        <div className="ozzilila__main-love">
          <h3 className="ozzilila__main-title">Rudy Chuj</h3>
          <img
            className="ozzilila__img"
            src="./OzziLila/rudy_chuj.jpg"
            alt="Rudy Chuj"
            loading="lazy"
          />

          <span className="ozzilila__main-plus">+</span>

          <h3 className="ozzilila__main-title">Mokry Szczur</h3>
          <img
            className="ozzilila__img"
            src="./OzziLila/szczur.jpg"
            alt="Szczur"
            loading="lazy"
          />
        </div>

        <span className="ozzilila__main-plus">=</span>

        <div className="ozzilila__main-love">
          <h3 className="ozzilila__main-title">To</h3>
          <img
            className="ozzilila__img"
            src="./OzziLila/slodko.jpg"
            alt="<3"
            loading="lazy"
          />
          <img
            className="ozzilila__img"
            src="./OzziLila/cosiegapisz.jpg"
            alt="<3"
            loading="lazy"
          />
        </div>
        <hr className="ozzilila_underline" />

        <div className="ozzilila__wishes">
          <p className="ozzilila__description">
            <strong>22 lipca 2023r.</strong> - dzień, w którym się poznaliście.
            Oskar był tak najebany, że nawet nie pamięta.
            <br />
            Ale wtedy te dwa kochające się debile zaczęły znajomość.
          </p>
          <div className="ozzilila__wishes-img">
            <img
              className="ozzilila__img"
              src="./OzziLila/oskar_nudes.jpg"
              alt="Oskar"
              loading="lazy"
            />
            <img
              className="ozzilila__img"
              src="./OzziLila/debil.jpg"
              alt="Lila"
              loading="lazy"
            />
          </div>
          <p className="ozzilila__description ozzilila__footer">
            W dniu Walentynek, życzę wam jak najlepszego i jak najdłuższego
            związku pełnego miłości i tego typu. Mam nadzieję, że będziecie ze
            sobą bardzo szczęśliwi. Gratuluję wam tego związku i pamiętajcie, że
            od początku wam kurde mówiłem, że pasujecie do siebie.
          </p>
          <img
            className="ozzilila__img ozzilila__mess"
            src="./OzziLila/messenger.jpg"
            alt="Messenger"
            loading="lazy"
          />
          <h4 className="ozzilila-love">
            <strong>Kochajcie się😘</strong>
          </h4>
          <img
            className="ozzilila__img ozzilila-heart"
            src="./OzziLila/ozzilila-heart.png"
            alt="Kochacie się <3"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default OzziLila;
