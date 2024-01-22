import React from "react";
import "./Karzelek.css";

const Karzelek = () => {
  return (
    <section className="karzelek">
      <h2 className="karzelek__header">
        Kocham Cię Martyna <span className="heart">❤</span>
      </h2>
      <p className="karzelek__description">
        Zakochałem się w Tobie i mimo, że wiem, że najlepszym co mogę zrobić dla
        siebie i dla Ciebie to zapomnieć i odpuścić, to nie chcę tego robić, bo
        zależy mi na Tobie jak na nikim innym. Mimo, że będzie mnie to boleć i
        mimo, że będę przez to cierpieć, nie chcę odpuścić, bo{" "}
        <strong>kocham Cię.</strong>
      </p>
      <p className="karzelek__description">
        Codziennie myślę o wspólnie spędzonym czasie, czy to na żywo, czy to na
        Discordzie. Tęsknię za tym i tęsknię za Tobą. Wiem, że zepsułem swoim
        zachowaniem naszą relację, wiem, że głupio się zachowywałem. Chciałbym
        to wszystko naprawić. Chciałbym, żeby było jak kiedyś. Chciałbym...
        między nami czegoś więcej niż przyjaźń.
      </p>
      <p className="karzelek__description">
        Wiem, że nic z tego nie będzie. Jeśli była na to szansa to przepadła. Ja
        się muszę z tym pogodzić i tyle. Przede wszystkim zależy mi na Twoim
        szczęściu, a z tego co widzę na discordzie to chyba jesteś szczęśliwa,
        więc jeśli możesz być szczęśliwa z kimś innym, to niech tak będzie.
      </p>
      <hr className="underline" />
      <img
        className="karzelek__img"
        src="./Karzelek/karzelek-heart.png"
        alt="Kocham Cię Martyna"
        loading="lazy"
      />
      <hr className="underline" />
      <p className="karzelek__description iloveyou">
        Nagrałem jeszcze filmik, kolejny zresztą.
        <br /> <strong>Kocham Cię Martyna.</strong>
      </p>

      <iframe
        className="karzelek__video"
        src="https://www.youtube.com/embed/-INk_39E9dU?si=ulwt1OG8eKLCH1tm"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <p className="karzelek__description karzelek__footer">
        Tak jak mówiłem, dla mnie najważniejsze jest twoje szczęście, więc jeśli
        chcesz, żebym dał Ci spokój, to powiedz mi to. Jeśli nie chcesz mieć ze
        mną kontaktu - powiedz mi to. Ale mam nadzieję, że będziesz kiedyś
        dobrze wspominać nasz wspólny czas.
      </p>
    </section>
  );
};

export default Karzelek;
