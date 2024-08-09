import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import TextInput from "./TextInput";
import CustomButton from './CustomButton';
import CustomButton2 from "./FibonacciGenerator";
import FibonacciGenerator from "./FibonacciGenerator";

export default function App() {
  return (
      <div className="container">
        <Navbar />
        <Main />
          <FibonacciGenerator />
      </div>
  )
}