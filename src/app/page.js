"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [bilanganSatu, setBilanganSatu] = useState(0)

  const penjumlahanBilangan = () => {
    setBilanganSatu(bilanganSatu + 1)
  }

  useEffect(() => {
    console.log("Website termuat")
  }, [])

  return (
    <div>
      <span>{bilanganSatu}</span>
      <br />
      <button onClick={() => {
        penjumlahanBilangan()
      }} >Tambah 1</button>
    </div>
  );
}
