import { memo, useEffect } from "react";
import classNames from "classnames";

//type
import type { FC } from "react";
import styles from "./index.module.scss";
import axios from "axios";
interface IProps {
  title?: string;
}

const SectionTitle: FC<IProps> = (props) => {
  const { title = "" } = props;
  return (
    <div className={styles["section-title"]}>
      <h1 className={classNames(styles.title)}>{title}</h1>
    </div>
  );
};

export default memo(SectionTitle);
SectionTitle.displayName = "SectionTitle";
