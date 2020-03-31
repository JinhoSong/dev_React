import React from "react";
import styles from "./CSSModule.module.scss";

const CSSModule = () => {
  return (
    <div className={[styles.wrapper, styles.inverted].join(" ")}>
      하이요 , 저는 <span className="something">CSS module !!</span>
    </div>
  );
};

export default CSSModule;
