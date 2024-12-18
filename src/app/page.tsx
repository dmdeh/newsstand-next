import styles from "@/app/page.module.css";
import Header from "@/components/Header/Header";
import Press from "@/components/Press/Press";
import RollingNews from "@/components/RolllingNews/RollingNews";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <RollingNews />
      <Press />
    </div>
  );
}
