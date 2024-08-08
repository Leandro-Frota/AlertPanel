"use client"
import BigCard from "@/components/BigCard/BigCard";
import RoomModalContent from "@/components/RoomModalContent/RoomModalContent";
import ScreenModal from "@/components/ScreenModal/ScreenModal";
import SmallCard from "@/components/SmallCard/SmallCard";
import { useState } from "react";

export default function Home() {

  const [openedModal, setOpenModal] = useState(false)

  return (
    <main className="flex min-h-screen gap-4 flex-grow flex-col items-center justify-start p-6">
      {openedModal && <ScreenModal onClose = {()=> setOpenModal(false)}>
        <RoomModalContent onClose={()=> setOpenModal(false)}/>
        </ScreenModal>}
      <div className="flex-shrink gap-4 flex justify-between min-w-full">
        <BigCard />
        <BigCard variant="orange" />
        <BigCard />
      </div>
      <div className="gap-3 flex-wrap flex items-start min-w-full">
        <SmallCard onClick={()=>{setOpenModal(true)}} variant="orange" />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </main>
  );
}
