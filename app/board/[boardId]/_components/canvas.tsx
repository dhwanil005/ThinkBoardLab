'use client';

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

export const Canvas = () => {
    return (
        <main className="w-full h-full bg-neutral-100 touch-none relative">
            <Info/>
            <Participants/>
            <Toolbar/>
        </main>
    )
}