import React, { useState, useEffect } from "react";
import "./App.css";
import HP_Magia from "./assets/HP_Magia.png";
import HP_Prosegui from "./assets/HP_Entra.png";
import HP_Grifondoro from "./assets/HP_Grifondoro.png";
import HP_Corvonero from "./assets/HP_Corvonero.png";
import HP_Serpeverde from "./assets/HP_Serpeverde.png";
import HP_Tassorosso from "./assets/HP_Tassorosso.png";

const Risultato = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [results, setResults] = useState([]);
  const [result, setResult] = useState(undefined);
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score")) || { g: 0, s: 0, c: 0, t: 0 }
  );

  console.log(result);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 769);
    }

    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (score) {
      const maxScore = Math.max(...Object.values(score));
      const highest = Object.keys(score).filter(
        (key) => score[key] === maxScore
      );
      setResults(highest);
    }
  }, [score]);

  useEffect(() => {
    if (results) {
      if (results.length === 1) {
        setResult(results[0]);
      } else {
        const randomIndex = Math.floor(Math.random() * results.length);
        setResult(results[randomIndex]);
      }
    }
  }, [results]);

  const handleChange = (event) => {
    setDisplayError(false);
    setSelectedOption(event.target.value);
  };

  return (
    <>
      {!isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              textAlign: "center",
              width: "80vw",
            }}
          >
            <img
              src={HP_Magia}
              style={{
                width: "30vw",
              }}
            ></img>
            <div
              style={{
                // border: "1px solid white",
                borderRadius: "10px",
                margin: "5%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <h3
                className="title info"
                style={{
                  color: `${
                    result === "t" || result === "s" ? "#424242" : "#d4d4d4"
                  }`,
                  borderRadius: "10px",
                  backgroundColor: `${
                    result === "c"
                      ? "#3c87b2"
                      : result === "g"
                      ? "#AB0E00"
                      : result === "s"
                      ? "#34ba00"
                      : "#eddd00"
                  }`,
                  padding: "10px",
                  margin: 0,
                }}
              >
                ⚠️ <b>Per giocare</b> bisogna essere collegati con le
                credenziali create al primo accesso.
                <br /> Non l’hai ancora fatto?{" "}
                <a
                  onClick={(e) => {
                    e.preventDefault();

                    window.open(
                      "https://bambiniegenitori.it/registrati/",
                      "_blank"
                    );
                  }}
                  style={{
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <u>
                    <b>Registrati</b>
                  </u>
                </a>
              </h3>
            </div>
            <h1
              className="title"
              style={{
                color: "#d4d4d4",
                flex: "1 1 50%",
              }}
            >
              Tu appartieni a:
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={
                  result === "c"
                    ? HP_Corvonero
                    : result === "g"
                    ? HP_Grifondoro
                    : result === "s"
                    ? HP_Serpeverde
                    : HP_Tassorosso
                }
                style={{
                  width: "40vw",
                }}
              ></img>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    `${
                      result === "c"
                        ? "https://bambiniegenitori.it/J182UZWQU"
                        : result === "g"
                        ? "https://bambiniegenitori.it/VL94FPCZA"
                        : result === "s"
                        ? "https://bambiniegenitori.it/A71ERTX3E"
                        : "https://bambiniegenitori.it/59SPXUDEJ"
                    }`,
                    "_blank"
                  );
                }}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <img
                  src={HP_Prosegui}
                  style={{
                    width: "200px",
                    marginTop: "20px",
                  }}
                ></img>
              </a>
            </div>
            <h4
              className="title"
              style={{
                color: "#d4d4d4",
                width: "80vw",
                textAlign: "center",
              }}
            >
              Oppure digita:{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();

                  window.open(
                    `${
                      result === "c"
                        ? "https://bambiniegenitori.it/J182UZWQU"
                        : result === "g"
                        ? "https://bambiniegenitori.it/VL94FPCZA"
                        : result === "s"
                        ? "https://bambiniegenitori.it/A71ERTX3E"
                        : "https://bambiniegenitori.it/59SPXUDEJ"
                    }`,
                    "_blank"
                  );
                }}
                style={{
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <u>
                  {result === "c"
                    ? "bambiniegenitori.it/J182UZWQU"
                    : result === "g"
                    ? "bambiniegenitori.it/VL94FPCZA"
                    : result === "s"
                    ? "bambiniegenitori.it/A71ERTX3E"
                    : "bambiniegenitori.it/59SPXUDEJ"}
                </u>
              </a>
            </h4>

            <h2
              className="title"
              style={{
                color: "#d4d4d4",
                marginBottom: "50px",
              }}
            >
              Vuoi scoprire le altre case Magiche? Le trovi tutte{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();

                  window.open(
                    "https://bambiniegenitori.it/portalimagici",
                    "_blank"
                  );
                }}
                style={{
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <u>Qui</u>
              </a>
            </h2>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                color: "#d4d4d4",
                fontSize: "0.9em",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              © Copyright 2024 Bambini e Genitori APS - C.F.03811551203 -
              Privacy e Policy consultabili su:{" "}
              <a
                href="https://bambiniegenitori.it"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <u>bambiniegenitori.it</u>
              </a>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          <img
            src={HP_Magia}
            style={{
              width: "90vw",
            }}
          ></img>
          <div
            style={{
              // border: "1px solid white",
              margin: "5%",
              display: "flex",
              borderRadius: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3
              className="title info"
              style={{
                color: `${
                  result === "t" || result === "s" ? "#424242" : "#d4d4d4"
                }`,
                borderRadius: "10px",
                backgroundColor: `${
                  result === "c"
                    ? "#3c87b2"
                    : result === "g"
                    ? "#AB0E00"
                    : result === "s"
                    ? "#34ba00"
                    : "#eddd00"
                }`,
                padding: "10px",
                margin: 0,
              }}
            >
              ⚠️ <b>Per giocare</b> bisogna essere collegati con le credenziali
              create al primo accesso.
              <br /> Non l’hai ancora fatto?{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();

                  window.open(
                    "https://bambiniegenitori.it/registrati/",
                    "_blank"
                  );
                }}
                style={{
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <u>
                  <b>Registrati</b>
                </u>
              </a>
            </h3>
          </div>
          <h1
            className="title"
            style={{
              color: "#d4d4d4",
              width: "90vw",
              textAlign: "center",
              fontSize: "2em",
              marginBottom: "0px",
            }}
          >
            Tu appartieni a:
          </h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={
                result === "c"
                  ? HP_Corvonero
                  : result === "g"
                  ? HP_Grifondoro
                  : result === "s"
                  ? HP_Serpeverde
                  : HP_Tassorosso
              }
              style={{
                width: "100vw",
              }}
            ></img>
            <a
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `${
                    result === "c"
                      ? "https://bambiniegenitori.it/J182UZWQU"
                      : result === "g"
                      ? "https://bambiniegenitori.it/VL94FPCZA"
                      : result === "s"
                      ? "https://bambiniegenitori.it/A71ERTX3E"
                      : "https://bambiniegenitori.it/59SPXUDEJ"
                  }`,
                  "_blank"
                );
              }}
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <img
                src={HP_Prosegui}
                style={{
                  width: "200px",
                  marginTop: "20px",
                }}
              ></img>
            </a>
          </div>
          <h4
            className="title"
            style={{
              color: "#d4d4d4",
              textAlign: "center",
            }}
          >
            Oppure digita:{" "}
            <a
              onClick={(e) => {
                e.preventDefault();

                window.open(
                  `${
                    result === "c"
                      ? "https://bambiniegenitori.it/J182UZWQU"
                      : result === "g"
                      ? "https://bambiniegenitori.it/VL94FPCZA"
                      : result === "s"
                      ? "https://bambiniegenitori.it/A71ERTX3E"
                      : "https://bambiniegenitori.it/59SPXUDEJ"
                  }`,
                  "_blank"
                );
              }}
              style={{
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <u>
                {result === "c"
                  ? "bambiniegenitori.it/J182UZWQU"
                  : result === "g"
                  ? "bambiniegenitori.it/VL94FPCZA"
                  : result === "s"
                  ? "bambiniegenitori.it/A71ERTX3E"
                  : "bambiniegenitori.it/59SPXUDEJ"}
              </u>
            </a>
          </h4>

          <h2
            className="title"
            style={{
              color: "#d4d4d4",
              textAlign: "center",
              width: "90%",
              marginTop: "0",
            }}
          >
            Vuoi scoprire le altre case Magiche? Le trovi tutte{" "}
            <a
              onClick={(e) => {
                e.preventDefault();

                window.open(
                  "https://bambiniegenitori.it/portalimagici",
                  "_blank"
                );
              }}
              style={{
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <u>Qui</u>
            </a>
          </h2>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              color: "#d4d4d4",
              fontSize: "0.7em",
              lineHeight: "1.2",
              marginBottom: "10px",
            }}
          >
            © Copyright 2024 Bambini e Genitori APS - C.F.03811551203 - Privacy
            e Policy consultabili su:{" "}
            <a
              href="https://bambiniegenitori.it"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <u>bambiniegenitori.it</u>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Risultato;
