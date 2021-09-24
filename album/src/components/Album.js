import React from "react";
import "./Album.css";
import { data } from "./Data";

const Album = () => {
  return (
    <>
      {data.map((item) => {
        console.log(item);
        return (
          <div key={item.id} className="album">
            <img src={item.image} alt="" />
            <h1> {item.title} </h1>
            <a href={item.song}> Play </a>
          </div>
        );
      })}
    </>
  );
};

export default Album;
