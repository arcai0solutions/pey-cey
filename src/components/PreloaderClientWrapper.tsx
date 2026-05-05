"use client";

import { useState } from "react";
import { Preloader } from "@/components/Preloader";

export function PreloaderClientWrapper({ children }: { children: React.ReactNode }) {
    const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

    return (
        <>
            {!isPreloaderComplete && (
                <Preloader onComplete={() => setIsPreloaderComplete(true)} />
            )}
            {children}
        </>
    );
}
