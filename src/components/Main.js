import {
  Facebook,
  Instagram,
  LinkedIn,
  MenuBook,
  Pinterest,
  SettingsPowerRounded,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./styles/Main.scss";
import man from "./assets/Afi.JPG";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Halo Semua</p>
            <h1>Saya Gusti Hafizah N</h1>
            <p>Ini praktikum PWL YA GES</p>

            <div className="icons">
              <Twitter className="icon" />
              <Instagram className="icon" />
            </div>

            <div className="buttons">
              <button>help me</button>
              <button>help us</button>
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
