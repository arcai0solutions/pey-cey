"use client";

import { useState, useEffect } from "react";

export function TimeDisplay() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return <div className="w-24 h-4" />; // placeholder

  return (
    <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-black/70 flex items-center gap-2 px-2">
      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
      {time}
    </div>
  );
}
