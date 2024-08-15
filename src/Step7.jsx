import React, { useState, useEffect } from "react";
import "./App.css";
import HP_Magia from "./assets/HP_Magia.png";
import HP_Prosegui from "./assets/HP_Prosegui.png";
import HP_Cappello from "./assets/HP_Cappello.png";

const Step7 = () => {
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
              Quattro scatole sono davanti a te. Quale non resisti ad aprire?
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
                    Una scintillante scatola nera con serratura e chiave
                    argentati, con incastonata una misteriosa runa che sai
                    essere il marchio di Mago Merlino.
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
                    Una piccola scatola di peltro, semplice e senza pretese, con
                    una targhetta che dice "Mi apro solo per chi ne è degno".
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
                    Una piccola scatola a forma di tartaruga con il bordo
                    dorato, all'interno della quale sembra “strillare” qualche
                    piccola creatura.
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
                    Uno scrigno d’oro con piedi a forma di artiglio, con inciso
                    sopra un messaggio che avverte che al suo interno si trovano
                    sia la conoscenza segreta che una tentazione insopportabile.
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
                  window.location.href = "/risultato";
                } else {
                  setDisplayError(true);
                }
              }}
              href="/risultato"
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
            Quattro scatole sono davanti a te. Quale non resisti ad aprire?
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
                  Una scintillante scatola nera con serratura e chiave
                  argentati, con incastonata una misteriosa runa che sai essere
                  il marchio di Mago Merlino.
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
                  Una piccola scatola di peltro, semplice e senza pretese, con
                  una targhetta che dice "Mi apro solo per chi ne è degno".
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
                  Una piccola scatola a forma di tartaruga con il bordo dorato,
                  all'interno della quale sembra “strillare” qualche piccola
                  creatura.
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
                  Uno scrigno d’oro con piedi a forma di artiglio, con inciso
                  sopra un messaggio che avverte che al suo interno si trovano
                  sia la conoscenza segreta che una tentazione insopportabile.
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
                window.location.href = "/risultato";
              } else {
                setDisplayError(true);
              }
            }}
            href="/risultato"
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

export default Step7;
