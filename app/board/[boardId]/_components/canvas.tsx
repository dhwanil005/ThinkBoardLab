'use client';

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps {
    boardId: string;
}
export const Canvas = ({
    boardId,
}: CanvasProps) => {
    return (
        <main className="w-full h-full bg-neutral-100 touch-none relative">
            <Info/>
            <Participants/>
            <Toolbar/>
        </main>
    )
}