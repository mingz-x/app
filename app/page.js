import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="art">
      <div className="home">
        <h2>
          서울시립미술관 <br/>
          SEOUL MUSEUM OF ART
        </h2>
        <div className="main">
          <figure><img/></figure>
          <p>서울시립미술관×재외문화원 순회전 《세계의 저편》</p>
        </div>
        <div className="t-slide">
          <h4>전시와 프로그램</h4>
          <figure><img/></figure>
        </div>
        <div className="t-slide">
          <h4>소장품</h4>
          <figure><img/></figure>
        </div>
      </div>
    </div>
  );
}
