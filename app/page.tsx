'use client'

import Camp from "@/components/Camp";
import Featuers from "@/components/Featuers";
import GetApp from "@/components/GetApp";
import Guid from "@/components/Guid";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guid />
      <Featuers />
      <GetApp />
    </>
  )
}
