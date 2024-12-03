import { memo, useState } from "react";
import classNames from "classnames";

//type
import type { FC } from "react";
import styles from "./index.module.scss";
interface IProps {
  selectsData?: any[];
  onItemClick?: (item: any) => void;
}

const TabSelect: FC<IProps> = (props) => {
  const { selectsData = [], onItemClick } = props;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function handleItemClick(item: any, index: number) {
    setCurrentIndex(index);
    onItemClick && onItemClick(item);
  }
  return (
    <div className={styles["tab-select"]}>
      {selectsData.map((item, index) => {
        return (
          <div
            key={item.id}
            className={classNames(
              styles.item,
              currentIndex === index ? styles.active : ""
            )}
            onClick={() => handleItemClick(item, index)}
          >
            {index === 0 ? (
              <>
                <a className={styles.name}>{item.name}</a>
              </>
            ) : (
              <>
                <i className={styles.dot}>.</i>{" "}
                <a className={styles.name}>{item.name}</a>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default memo(TabSelect);
TabSelect.displayName = "TabSelect";
