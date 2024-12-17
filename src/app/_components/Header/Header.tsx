import styles from "@/app/_components/Header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>뉴스스탠드</div>
      <div className={styles.date}>2024.12.17</div>
    </header>
  );
};

export default Header;
