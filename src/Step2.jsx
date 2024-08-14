import React, { useState, useEffect } from "react";
import "./App.css";
import HP_Magia from "./assets/HP_Magia.png";
import HP_Prosegui from "./assets/HP_Prosegui.png";
import HP_Cappello from "./assets/HP_Cappello.png";

const Step1 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

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
    setSelectedOption(event.target.value);
  };

  console.log(selectedOption);
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
              Cosa trovi più difficile?
            </h1>
            <div
              className="box"
              style={{
                color: "#d4d4d4",
                flex: "1 1 50%",
                marginTop: "40px",
              }}
            >
              <select required value={selectedOption} onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Seleziona una risposta
                </option>
                <option value="1">Restare da soli</option>
                <option value="2">Annoiarsi</option>
                <option value="3">Avere molta fame</option>
                <option value="4">Essere ignorati</option>
                <option value="5">Sentire tanto freddo</option>
              </select>
            </div>
            <a
              onClick={(e) => e.preventDefault()}
              href="/step-3"
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
            Cosa trovi più difficile?
          </h1>

          <div
            className="box"
            style={{
              color: "#d4d4d4",
              flex: "1 1 50%",
              marginTop: "40px",
            }}
          >
            <select required value={selectedOption} onChange={handleChange}>
              <option value="" disabled selected hidden>
                Seleziona una risposta
              </option>
              <option value="1">Restare da soli</option>
              <option value="2">Annoiarsi</option>
              <option value="3">Avere molta fame</option>
              <option value="4">Essere ignorati</option>
              <option value="5">Sentire tanto freddo</option>
            </select>
          </div>
          <img
            src={HP_Cappello}
            style={{
              width: "90vw",
            }}
          ></img>

          <a
            onClick={(e) => e.preventDefault()}
            href="/step-3"
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

export default Step1;
