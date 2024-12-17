"use client";

import React, { useState } from "react";
import styles from "@/app/_components/Press/Press.module.css";
import pressLogoData from "@/data/pressLogo.json";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";

const itemsPerPage = 24;
const totalPages = 4;

const Press = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const paginatedLogos = pressLogoData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrevPage = () =>
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));

  const handleNextPage = () =>
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));

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
              sizes="100px"
            />
            <button
              onClick={() => setIsSubscribe(!isSubscribe)}
              style={{
                backgroundColor: isSubscribe
                  ? "rgba(245, 247, 249, 1)"
                  : "white",
              }}
            >
              {isSubscribe ? "x 해지하기" : "+ 구독하기"}
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

export default Press;
