import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>React Hub</h1>

        <ul>
          <li><Link href="/holidays">Holiday calander</Link></li>
          <li><Link href="/accordion">Accordion menu</Link></li>
          <li><Link href="/todo">Todo list</Link></li>
          <li><Link href="/memory-game">Memory game</Link></li>
          {/* more later*/}
        </ul>


      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
