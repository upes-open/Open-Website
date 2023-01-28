import React from "react";
import HeaderTwo from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// import Breadcrumb from '../upcoming/Breadcrumb';

function GameSingle(props) {
  return (
    <>
      <HeaderTwo />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default GameSingle;
