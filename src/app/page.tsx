import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
// import Card from "@/components/Card";
import CardPanel from "@/components/CardPanel"

export default function Home() {
  return (
    <main className="bg-[#c5d9f3]" >
      <Banner/>
      <div className="flex justify-evenly w-full" style={{ marginTop: "30px" }}>
        <CardPanel/>
      </div>
    </main>
  );
}
