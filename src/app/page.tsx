import styles from "@/app/page.module.css";
import Header from "@/app/_components/Header/Header";
import Press from "@/app/_components/Press/Press";
import RollingNews from "@/app/_components/RolllingNews/RollingNews";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <RollingNews />
      <Press />
    </div>
  );
}
