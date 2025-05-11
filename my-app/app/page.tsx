"use client";
import {useState} from "next/image";

export default function Home() {
  return (
    <div >
      <div>
        <h1>Enter Your Name </h1>
        </div>
        <form>
          <input type="text" placeholder="Enter Your Name"/>
          <button type="submit">Predict Data </button>
          </form>
    </div>
  );
}
