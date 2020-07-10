import React from "react";
import styles from "./button.module.css";

type Props = {
  isPlay: boolean;
  onClick: () => void;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={props.onClick}>
        {props.isPlay ? "Pause" : "Play"}
      </button>
    </div>
  );
};
