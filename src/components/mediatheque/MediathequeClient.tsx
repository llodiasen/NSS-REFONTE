"use client";

import { useState } from "react";
import MediathequeFilters from "./MediathequeFilters";
import MediathequeGrid from "./MediathequeGrid";

export default function MediathequeClient() {
  const [activeTab] = useState("videos");
  const [activePill, setActivePill] = useState("Tous");
  const [search,     setSearch]     = useState("");

  return (
    <>
      <MediathequeFilters
        activeTab={activeTab}
        activePill={activePill}
        search={search}
        onTabChange={() => {}}
        onPillChange={setActivePill}
        onSearchChange={setSearch}
      />
      <MediathequeGrid
        activeTab={activeTab}
        activePill={activePill}
        search={search}
      />
    </>
  );
}
