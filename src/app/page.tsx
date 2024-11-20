'use client'
import { useEffect, useRef } from "react";
import Header from "./_components/globalComponents/Header";
import Container from "./_components/globalComponents/container";

export default function Home() {
  const cusorRef=useRef<HTMLDivElement>(null)
  useEffect(() => {
  window.addEventListener('mousemove',(e)=>handleResize(e))
    return()=>window.removeEventListener('mousemove',(e)=>handleResize(e))
  }
  )

  const handleResize = () => {
    const reference=cusorRef.current
    console.log({ reference }, { e })
    if (!!reference) {
      reference.style.left = `${e.x}px`;
      reference.style.top = `${e.y}px`;
    }
  }
  return (
    <Container>
    <div className="hiddencursor" ref={cusorRef}>
    </div>
      <Header />
      <div className="grid grid-cols-6 gap-4 min-h-full">

        <div className="border-2 h-full"></div>
        <div className="border-2 col-span-4 h-full">WIP</div>
        <div className="border-2 h-full"></div>
      </div>
      
    </Container>
  );
}
