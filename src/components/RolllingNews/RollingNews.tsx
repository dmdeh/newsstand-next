import styles from "@/components/RolllingNews/RollingNews.module.css";

const RollingNews = () => {
  return (
    <div className={styles.rolling}>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
    </div>
  );
};

export default RollingNews;
