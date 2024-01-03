import React from "react";
import ListMovie from "./ListMovie";
import TabMovie from "./TabMovie/TabMovie";

export default function HomePage() {
  return (
    <div className="container space-y-20">
      <ListMovie />
      <TabMovie />
    </div>
  );
}
