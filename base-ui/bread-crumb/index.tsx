import { memo } from "react";
import classNames from "classnames";
import Link from "next/link";

//type
import type { FC } from "react";
import styles from "./index.module.scss";
import Item from "antd/lib/list/Item";
interface IProps {
  links?: any[];
}

const BreadCrumb: FC<IProps> = (props) => {
  const { links = [] } = props;
  return (
    <div className={styles["bread-crumb"]}>
      {links.map((item, index) => {
        return (
          <div key={item.id} className={styles.item}>
            {index === 0 ? (
              <>
                <Link href={item.link} className={styles.name}>
                  {item.name}
                </Link>
              </>
            ) : (
              <>
                <i className={styles.arrow}></i>{" "}
                <span className={styles["sub-name"]}>{item.name}</span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default memo(BreadCrumb);
BreadCrumb.displayName = "BreadCrumb";
