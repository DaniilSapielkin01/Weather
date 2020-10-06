import React, { Component } from "react";

export const Form = (props) => {
  return (
    <form onSubmit={props.weatherMethod}>
      <input type="text" name="city" placeholder="Город" />
      <button>Получить погоду</button>
    </form>
  );
};
