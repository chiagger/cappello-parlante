import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import HP_Magia from "./assets/HP_Magia.png";
import HP_Inizia from "./assets/HP_Inizia.png";
import HP_Cappello from "./assets/HP_Cappello.png";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

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
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "7vw",
          }}
        >
          <img
            src={HP_Cappello}
            style={{
              width: "30vw",
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
              Scopri a quale casa di Magia appartieni!
            </h1>
            <div
              style={{
                color: "#d4d4d4",
                flex: "1 1 50%",
                marginTop: "40px",
              }}
            >
              Don the Sorting Hat to be placed into your rightful Hogwarts
              house. The Sorting Hat's decision is final.
            </div>
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
              width: "75vw",
            }}
          ></img>
          <div
            style={{
              color: "#d4d4d4",
              textAlign: "center",
              width: "80vw",
              fontSize: "1.2em",
              marginBottom: "5px",
            }}
          >
            Don the Sorting Hat to be placed into your rightful Hogwarts house.
            The Sorting Hat's decision is final.
          </div>

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
        </div>
      )}
    </>
  );
};

export default App;
