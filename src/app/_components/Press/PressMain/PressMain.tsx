"use client";

import React, { useState } from "react";
import styles from "@/app/_components/Press/PressMain/PressMain.module.css";
import pressLogoData from "@/data/pressLogo.json";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";

const itemsPerPage = 24;
const totalPages = 4;

const PressMain = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [subscribed, setSubscribed] = useState<number[]>([]);

  const paginatedLogos = pressLogoData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrevPage = () =>
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));

  const handleNextPage = () =>
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));

  const toggleSubscription = (id: number) => {
    setSubscribed((prev) =>
      prev.includes(id) ? prev.filter((id) => id !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.pressContainer}>
      <div className={styles.press}>
        {paginatedLogos.map((logoUrl, index) => (
          <div key={index} className={styles.pressItem}>
            <Image
              className={styles.logo}
              src={logoUrl}
              alt={`PressLogo${index + 1}`}
              fill
              sizes="130px"
            />
            <button
              onClick={() => toggleSubscription(index)}
              style={{
                backgroundColor: subscribed.includes(index)
                  ? "rgba(245, 247, 249, 1)"
                  : "white",
              }}
            >
              {subscribed.includes(index) ? "x 해지하기" : "+ 구독하기"}
            </button>
          </div>
        ))}
      </div>
      {currentPage > 0 && (
        <LeftOutlined className={styles.left} onClick={handlePrevPage} />
      )}
      {currentPage < totalPages - 1 && (
        <RightOutlined className={styles.right} onClick={handleNextPage} />
      )}
    </div>
  );
};

export default PressMain;
