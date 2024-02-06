'use client';

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import { useHistory, useCanRedo, useCanUndo, useSelf } from "@/liveblocks.config";
import { useState } from "react";
import { CanvasMode, CanvasState } from "@/types/canvas";

interface CanvasProps {
    boardId: string;
}
export const Canvas = ({
    boardId,
}: CanvasProps) => {
    const [canvasState,setCanvasState] = useState<CanvasState>({
        mode:CanvasMode.None,
    });

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();
    const info = useSelf((me)=>me.info);
    return (
        <main className="w-full h-full bg-neutral-100 touch-none relative">
            <Info boardId={boardId}/>
            <Participants/>
            <Toolbar
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canRedo={canRedo}
                canUndo={canUndo}
                undo={history.undo}
                redo={history.redo}
            />
        </main>
    )
}