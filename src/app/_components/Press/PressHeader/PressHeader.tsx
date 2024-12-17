"use client";

import styles from "@/app/_components/Press/PressHeader/PressHeader.module.css";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";

const PressHeader = () => {
  return (
    <div className={styles.pressHeader}>
      <div className={styles.group}>
        <div>전체 언론사</div>
        <div>내가 구독한 언론사</div>
      </div>
      <div className={styles.group}>
        <UnorderedListOutlined />
        <AppstoreOutlined />
      </div>
    </div>
  );
};

export default PressHeader;
