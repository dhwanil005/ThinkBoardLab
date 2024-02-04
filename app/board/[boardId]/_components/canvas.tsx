'use client';

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import { useSelf } from "@/liveblocks.config";


interface CanvasProps {
    boardId: string;
}
export const Canvas = ({
    boardId,
}: CanvasProps) => {
    const info = useSelf((me)=>me.info);
    return (
        <main className="w-full h-full bg-neutral-100 touch-none relative">
            <Info/>
            <Participants/>
            <Toolbar/>
        </main>
    )
}