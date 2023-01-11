import React from "react";
import { useEffect, useState } from "react";

const Api = () => {
  const [digimon, setDigimon] = useState([]);
  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((res) => res.json())
      .then((data) => {
        setDigimon(data);
      });
  });

  return (
    <table
      style={{
        border: "1px solid black",
        textAlign: "center",
        margin: "auto",
        padding: "20px",
        width: "50%",
      }}
    >
      <tr>
        <th>Foto</th>
        <th>Nome</th>
        <th>Nível</th>
      </tr>
      {digimon.map((digimon) => (
        <tr>
          <td>
            <img width={150} src={digimon.img}></img>
          </td>
          <td>{digimon.name}</td>
          <td>{digimon.level}</td>
        </tr>
      ))}
    </table>
  );
};

export default Api;
