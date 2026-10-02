"use client";

import React, { useState } from "react";

export default function Home() {
  const [pantalla, setPantalla] = useState("");

  function calcular() {
    const partes = pantalla.split(/([+\-*\/])/);
    for (let indice = 0; indice < partes.length; indice++) {
      const parte = partes[indice];
      if (parte === "*" || parte === "/") {
        if (parte === "*") {
          const numeroMultAnt = Number(partes[indice - 1]);
          const numeroMultSig = Number(partes[indice + 1]);
          const multiplicacion = numeroMultAnt * numeroMultSig;
          partes.splice(
            indice - 1,
            3,
            String(multiplicacion)
          );
          indice -= 1;
        }
        if (parte === "/") {
          const numeroDivAnt = Number(partes[indice - 1]);
          const numeroDivSig = Number(partes[indice + 1]);
          if (numeroDivSig===0){
            setPantalla("Error");
            return;
          }
          const division = numeroDivAnt / numeroDivSig;
          partes.splice(
            indice - 1,
            3,
            String(division)
          );
          indice -= 1;
        }
      }
    }
    for (let indice = 0; indice < partes.length; indice++) {
      const parte = partes[indice];
      if (parte === "+" || parte === "-") {
        if (parte === "+") {
          const numeroSumAnt = Number(partes[indice - 1]);
          const numeroSumSig = Number(partes[indice + 1]);
          const suma = numeroSumAnt + numeroSumSig;
          partes.splice(
            indice - 1,
            3,
            String(suma)
          );
          indice -= 1;
        }
        if (parte === "-") {
          const numeroRestAnt = Number(partes[indice - 1]);
          const numeroRestSig = Number(partes[indice + 1]);
          const resta = numeroRestAnt - numeroRestSig;
          partes.splice(
            indice - 1,
            3,
            String(resta)
          );
          indice -= 1;
        }
      }
    }
    setPantalla(partes[0]);
  }

  return (
    <main>
      <h1>Calculadora</h1>
      <input
        onKeyDown={(evento) => {
          if (
            evento.key !== "1" &&
            evento.key !== "2" &&
            evento.key !== "3" &&
            evento.key !== "4" &&
            evento.key !== "5" &&
            evento.key !== "6" &&
            evento.key !== "7" &&
            evento.key !== "8" &&
            evento.key !== "9" &&
            evento.key !== "0" &&
            evento.key !== "+" &&
            evento.key !== "-" &&
            evento.key !== "*" &&
            evento.key !== "/" &&
            evento.key !== "." &&
            evento.key !== "ArrowUp" &&
            evento.key !== "ArrowDown" &&
            evento.key !== "ArrowLeft" &&
            evento.key !== "ArrowRight" &&
            evento.key !== "Enter" &&
            evento.key !== "Backspace"
          ) {
            evento.preventDefault();
          }
        }}
        onChange={(evento) => {
          const texto = evento.target.value;
          if (/[`~'"]/.test(texto)) {
            return;
          }
          setPantalla(texto);
        }}
        className="w-full h-10"
        value={pantalla}
        placeholder="Escribe..."
      />

      <div className="grid grid-cols-4">
        <button
          onClick={() => setPantalla(pantalla + "1")}
          className="bg-blue-500 text-white border border-white px-4 py-2"
        >
          1
        </button>

        <button
          onClick={() => setPantalla(pantalla + "2")}
          className="bg-blue-500 text-white border border-white px-4 py-2"
        >
          2
        </button>

        <button
          onClick={() => setPantalla(pantalla + "3")}
          className="bg-blue-500 text-white border border-white px-4 py-2"
        >
          3
        </button>

        <button
          onClick={() => setPantalla(pantalla + "/")}
          className="bg-black text-white border border-white px-4 py-2"
        >
          /
        </button>

        <button
          onClick={() => setPantalla(pantalla + "4")}
          className="bg-blue-500 text-white border border-white px-4 py-2"
        >
          4
        </button>

        <button
          onClick={() => setPantalla(pantalla + "5")}
          className="bg-blue-500 text-white border border-white px-4 py-2"
        >
          5
        </button>

        <button
          onClick={() => setPantalla(pantalla + "6")}
          className="bg-blue-500 text-white border border-white px-4 py-2"
        >
          6
        </button>

        <button
          onClick={() => setPantalla(pantalla + "*")}
          className="bg-black text-white border border-white px-4 py-2"
        >
          *
        </button>

        <button
          onClick={() => setPantalla(pantalla + "7")}
          className="bg-blue-500 text-white border border-white px-4 py-2"
        >
          7
        </button>

        <button
          onClick={() => setPantalla(pantalla + "8")}
          className="bg-blue-500 text-white border border-white px-4 py-2"
        >
          8
        </button>

        <button
          onClick={() => setPantalla(pantalla + "9")}
          className="bg-blue-500 text-white border border-white px-4 py-2"
        >
          9
        </button>

        <button
          onClick={() => setPantalla(pantalla + "-")}
          className="bg-black text-white border border-white px-4 py-2"
        >
          -
        </button>

        <button
          onClick={() => setPantalla(pantalla + "0")}
          className="bg-blue-500 text-white border border-white px-4 py-2"
        >
          0
        </button>

        <button
          onClick={() => setPantalla(pantalla + ".")}
          className="bg-black text-white border border-white px-4 py-2"
        >
          .
        </button>

        <button
          onClick={calcular}
          className="bg-white text-blue-500 border border-white px-4 py-2"
        >
          =
        </button>

        <button
          onClick={() => setPantalla(pantalla + "+")}
          className="bg-black text-white border border-white px-4 py-2"
        >
          +
        </button>

        <button
          onClick={() => setPantalla("")}
          className="bg-white text-blue-500 border border-white px-4 py-2"
        >
          AC
        </button>
      </div>
    </main>
  );
}