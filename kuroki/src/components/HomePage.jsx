import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../App.css";
import Header from "./Header";
import Content from "./Content";

export default function HomePage() {
  
  return (
    <>
      <Header/>
      <Content/>
    </>
  );
}
