import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h4 className="title">애플 후레시</h4>
      <p className="title-sub">by dev rowoon</p>
    </div>
  );
}
