import React, { memo, useRef, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { Carousel } from "antd";
//type
import type { FC, ElementRef } from "react";
import styles from "./index.module.scss";
interface IProps {
  banners?: any[];
}

const contentStyle: React.CSSProperties = {
  height: "260px",
  background: "#364d79",
};

const TopSwiper: FC<IProps> = (props) => {
  const { banners = [] } = props;
  /** 定义内部的数据 */
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  function handleAfterChange(current: number) {
    setCurrentIndex(current);
  }

  function handlePrevClick() {
    bannerRef.current?.prev();
  }
  function handleNextClick() {
    bannerRef.current?.next();
  }

  return (
    <div className={styles["top-swiper"]}>
      <div className={classNames("wrapper", styles["swiper-wrapper"])}>
        {/* 轮播图，比如1100px大 2000px */}
        <Carousel
          ref={bannerRef}
          className={styles["carousel-swiper"]}
          autoplay
          autoplaySpeed={3000}
          dots={false}
          effect="fade"
          afterChange={handleAfterChange}
        >
          {banners.map((item) => {
            return (
              <div className={styles["swiper-item"]} key={item.id}>
                {/* 背景：相对于swiper-item定位, bg-size: 6000px */}
                <div
                  className={styles["swiper-bg"]}
                  style={{
                    background: `url('${item.backendPicStr}') center center / 6000px`,
                  }}
                ></div>
                {/* 图片 priority */}
                <Image
                  className={styles.image}
                  src={item.picStr}
                  alt={"music"}
                  priority
                  width={1100}
                  height={480}
                />
              </div>
            );
          })}
        </Carousel>

        {/* 定位-分页器 */}
        <ul className={styles.dots}>
          {banners.map((item, index) => {
            return (
              <li
                key={item.id}
                className={classNames(styles["dot-item"], {
                  [styles.active]: index === currentIndex,
                })}
              ></li>
            );
          })}
        </ul>
      </div>

      {/* 定位：上一页和下一页 */}
      <a className={styles.previous} onClick={handlePrevClick}>
        <span></span>
      </a>
      <a className={styles.next} onClick={handleNextClick}>
        <span></span>
      </a>
    </div>
  );
};

export default memo(TopSwiper);
TopSwiper.displayName = "TopSwiper";
