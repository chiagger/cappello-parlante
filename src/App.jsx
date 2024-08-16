import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import HP_Magia from "./assets/HP_Magia.png";
import HP_Inizia from "./assets/HP_Inizia.png";
import HP_Cappello from "./assets/HP_Cappello.png";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify({ g: 0, s: 0, c: 0, t: 0 }));
  }, []);

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
              gap: "7vw",
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
                A quale casa Magica appartieni?
              </h1>

              <a
                href="/step-1"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={HP_Inizia}
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
              position: "absolute",
              bottom: "0",
            }}
          >
            © Copyright 2024 Bambini e Genitori APS - C.F. 03811551203 - Privacy
            e Policy consultabili su: <u>https://bambiniegenitori.it</u>
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
              fontSize: "3em",
              marginBottom: "0px",
            }}
          >
            Scopri a quale casa di Magia appartieni!
          </h1>

          <img
            src={HP_Cappello}
            style={{
              width: "90vw",
            }}
          ></img>

          <a
            href="/step-1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={HP_Inizia}
              style={{
                width: "70vw",
                marginTop: "10px",
              }}
            ></img>
          </a>
          <div
            style={{
              width: "80%",
              textAlign: "center",
              color: "#d4d4d4",
              fontSize: "0.7em",
              lineHeight: "1.2",
              position: "absolute",
              bottom: "0",
            }}
          >
            © Copyright 2024 Bambini e Genitori APS - C.F. 03811551203 - Privacy
            e Policy consultabili su: <u>https://bambiniegenitori.it</u>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
