import React, { useState, useEffect } from "react";
import "./App.css";
import HP_Magia from "./assets/HP_Magia.png";
import HP_Prosegui from "./assets/HP_Prosegui.png";
import HP_Cappello from "./assets/HP_Cappello.png";

const Step3 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [displayError, setDisplayError] = useState(false);

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
          <img
            src={HP_Cappello}
            style={{
              width: "40vw",
              marginTop: "20px",
            }}
          ></img>
          <div
            style={{
              textAlign: "center",
              width: "45vw",
              marginBottom: "20vh",
            }}
          >
            <img
              src={HP_Magia}
              style={{
                width: "30vw",
              }}
            ></img>
            <h1
              className="title"
              style={{
                color: "#d4d4d4",
                flex: "1 1 50%",
              }}
            >
              Quale sogno da incubo ti fa più paura?
            </h1>
            <div
              className="box"
              style={{
                color: "#d4d4d4",
                flex: "1 1 50%",
                marginTop: "40px",
              }}
            >
              <form action="">
                <fieldset
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <legend>Seleziona una risposta</legend>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      gap: "1vw",
                    }}
                  >
                    <input
                      type="radio"
                      name="linguaggio"
                      value="1"
                      checked={selectedOption === "1"}
                      onChange={handleChange}
                    />
                    Nel sogno sei in un posto molto alto e improvvisamente ti
                    accorgi che non c’è nessuna barriera e niente a cui
                    aggrapparsi e quindi stai per cadere.
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      gap: "1vw",
                    }}
                  >
                    <input
                      type="radio"
                      name="linguaggio"
                      value="2"
                      checked={selectedOption === "2"}
                      onChange={handleChange}
                    />
                    Nel sogno stai parlando con una voce stridula e stupida,
                    quasi nessuno riesce a capire quello che dici e tutti ti
                    prendono in giro.
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      gap: "1vw",
                    }}
                  >
                    <input
                      type="radio"
                      name="linguaggio"
                      value="3"
                      checked={selectedOption === "3"}
                      onChange={handleChange}
                    />
                    Nel sogno ti svegli e scopri che la tua famiglia e i tuoi
                    amici non ti riconoscono e in verità non sanno nemmeno chi
                    sei.
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      gap: "1vw",
                    }}
                  >
                    <input
                      type="radio"
                      name="linguaggio"
                      value="4"
                      checked={selectedOption === "4"}
                      onChange={handleChange}
                    />
                    Nel sogno sei rinchiuso in una stanza buia e senza finestre
                    e vedi un occhio che ti fissa attraverso il lucchetto della
                    porta.
                  </div>
                </fieldset>
              </form>

              {displayError && (
                <div style={{ fontSize: "0.8em", color: "#fc6565" }}>
                  Seleziona una risposta per proseguire
                </div>
              )}
            </div>
            <a
              onClick={(e) => {
                e.preventDefault();
                if (selectedOption) {
                  window.location.href = "/step-4";
                } else {
                  setDisplayError(true);
                }
              }}
              href="/step-4"
              style={{ textDecoration: "none", color: "inherit" }}
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
              width: "70vw",
            }}
          ></img>
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
            Quale sogno da incubo ti fa più paura?
          </h1>

          <div
            className="box"
            style={{
              color: "#d4d4d4",
              flex: "1 1 50%",
              marginTop: "40px",
            }}
          >
            <form action="">
              <fieldset
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <legend>Seleziona una risposta</legend>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "1vw",
                  }}
                >
                  <input
                    type="radio"
                    name="linguaggio"
                    value="1"
                    checked={selectedOption === "1"}
                    onChange={handleChange}
                  />
                  Nel sogno sei in un posto molto alto e improvvisamente ti
                  accorgi che non c’è nessuna barriera e niente a cui
                  aggrapparsi e quindi stai per cadere.
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "1vw",
                  }}
                >
                  <input
                    type="radio"
                    name="linguaggio"
                    value="2"
                    checked={selectedOption === "2"}
                    onChange={handleChange}
                  />
                  Nel sogno stai parlando con una voce stridula e stupida, quasi
                  nessuno riesce a capire quello che dici e tutti ti prendono in
                  giro.
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "1vw",
                  }}
                >
                  <input
                    type="radio"
                    name="linguaggio"
                    value="3"
                    checked={selectedOption === "3"}
                    onChange={handleChange}
                  />
                  Nel sogno ti svegli e scopri che la tua famiglia e i tuoi
                  amici non ti riconoscono e in verità non sanno nemmeno chi
                  sei.
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "1vw",
                  }}
                >
                  <input
                    type="radio"
                    name="linguaggio"
                    value="4"
                    checked={selectedOption === "4"}
                    onChange={handleChange}
                  />
                  Nel sogno sei rinchiuso in una stanza buia e senza finestre e
                  vedi un occhio che ti fissa attraverso il lucchetto della
                  porta.
                </div>
              </fieldset>
            </form>
            {displayError && (
              <div style={{ fontSize: "0.8em", color: "#fc6565" }}>
                Seleziona una risposta per proseguire
              </div>
            )}
          </div>
          <img
            src={HP_Cappello}
            style={{
              width: "90vw",
            }}
          ></img>

          <a
            onClick={(e) => {
              e.preventDefault();
              if (selectedOption) {
                window.location.href = "/step-4";
              } else {
                setDisplayError(true);
              }
            }}
            href="/step-4"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={HP_Prosegui}
              style={{
                width: "70vw",
                marginTop: "10px",
              }}
            ></img>
          </a>
        </div>
      )}
    </>
  );
};

export default Step3;
