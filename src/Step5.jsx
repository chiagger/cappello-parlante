import React, { useState, useEffect } from "react";
import "./App.css";
import HP_Magia from "./assets/HP_Magia.png";
import HP_Prosegui from "./assets/HP_Prosegui.png";
import HP_Cappello from "./assets/HP_Cappello.png";

const Step5 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score")) || { g: 0, s: 0, c: 0, t: 0 }
  );

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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
                Che animale porteresti con te alla scuola di Magia?
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
                    <legend style={{ fontSize: "1.5em", textAlign: "center" }}>
                      Scegli una risposta
                    </legend>
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
                      Gatto
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
                      Gufo
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
                      Rospo
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
                      Topo
                    </div>
                  </fieldset>
                </form>
                {displayError && (
                  <div style={{ fontSize: "0.8em", color: "#fc6565" }}>
                    Scegli una risposta per proseguire
                  </div>
                )}
              </div>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  if (selectedOption) {
                    if (selectedOption === "1") {
                      localStorage.setItem(
                        "score",
                        JSON.stringify({
                          g: score.g,
                          s: score.s,
                          c: score.c + 1,
                          t: score.t,
                        })
                      );
                    }
                    if (selectedOption === "2") {
                      localStorage.setItem(
                        "score",
                        JSON.stringify({
                          g: score.g,
                          s: score.s,
                          c: score.c + 1,
                          t: score.t,
                        })
                      );
                    }
                    if (selectedOption === "3") {
                      localStorage.setItem(
                        "score",
                        JSON.stringify({
                          g: score.g,
                          s: score.s,
                          c: score.c,
                          t: score.t + 1,
                        })
                      );
                    }
                    if (selectedOption === "4") {
                      localStorage.setItem(
                        "score",
                        JSON.stringify({
                          g: score.g,
                          s: score.s + 1,
                          c: score.c,
                          t: score.t,
                        })
                      );
                    }
                    window.location.href = "/step-6";
                  } else {
                    setDisplayError(true);
                  }
                }}
                href="/step-6"
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
          <div
            style={{
              width: "80%",
              textAlign: "center",
              color: "#d4d4d4",
              fontSize: "0.7em",
              lineHeight: "1.2",
              marginBottom: "10px",
            }}
          >
            © Copyright 2024 Bambini e Genitori APS - C.F. 03811551203 - Privacy
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
      {isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
              Che animale porteresti con te alla scuola di Magia?
            </h1>

            <div
              className="box"
              style={{
                color: "#d4d4d4",
                flex: "1 1 50%",
                marginTop: "40px",
                width: "85vw",
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
                  <legend style={{ fontSize: "1.5em", textAlign: "center" }}>
                    Scegli una risposta
                  </legend>
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
                    Gatto
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
                    Gufo
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
                    Rospo
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
                    Topo
                  </div>
                </fieldset>
              </form>

              {displayError && (
                <div style={{ fontSize: "0.8em", color: "#fc6565" }}>
                  Scegli una risposta per proseguire
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
                  if (selectedOption === "1") {
                    localStorage.setItem(
                      "score",
                      JSON.stringify({
                        g: score.g,
                        s: score.s,
                        c: score.c + 1,
                        t: score.t,
                      })
                    );
                  }
                  if (selectedOption === "2") {
                    localStorage.setItem(
                      "score",
                      JSON.stringify({
                        g: score.g,
                        s: score.s,
                        c: score.c + 1,
                        t: score.t,
                      })
                    );
                  }
                  if (selectedOption === "3") {
                    localStorage.setItem(
                      "score",
                      JSON.stringify({
                        g: score.g,
                        s: score.s,
                        c: score.c,
                        t: score.t + 1,
                      })
                    );
                  }
                  if (selectedOption === "4") {
                    localStorage.setItem(
                      "score",
                      JSON.stringify({
                        g: score.g,
                        s: score.s + 1,
                        c: score.c,
                        t: score.t,
                      })
                    );
                  }
                  window.location.href = "/step-6";
                } else {
                  setDisplayError(true);
                }
              }}
              href="/step-6"
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
          <div
            style={{
              width: "90%",
              textAlign: "center",
              color: "#d4d4d4",
              fontSize: "0.7em",
              lineHeight: "1.2",
              marginBottom: "10px",
            }}
          >
            © Copyright 2024 Bambini e Genitori APS - C.F. 03811551203 - Privacy
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

export default Step5;
