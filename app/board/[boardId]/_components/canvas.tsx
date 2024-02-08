'use client';

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import { useHistory,
     useCanRedo,
      useCanUndo, 
      useSelf,
      useMutation 
    } from "@/liveblocks.config";
import { useCallback, useState } from "react";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import { CursorsPresence } from "./cursors-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";

interface CanvasProps {
    boardId: string;
}
export const Canvas = ({
    boardId,
}: CanvasProps) => {
    const [canvasState,setCanvasState] = useState<CanvasState>({
        mode:CanvasMode.None,
    });
    
    const [ camera, setCamera] = useState<Camera>({x:0,y:0});

    const onWheel = useCallback((e: React.WheelEvent)=>{
        setCamera((camera)=>({
            x: camera.x - e.deltaX,
            y: camera.y - e.deltaY,
        }));
    },[]);

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    const onPointerMove = useMutation(({ setMyPresence }, e: React.PointerEvent)=> {
        e.preventDefault();

        const current = pointerEventToCanvasPoint(e, camera);
        
        setMyPresence({ cursor: current});
    },[]);

    const onPointerLeave = useMutation(({
        setMyPresence
    }) => {
        setMyPresence({cursor: null});
    },[]);


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
            <svg className="h-[100vh] w-[100vw]"
                onWheel={onWheel}
                onPointerMove={onPointerMove}
                onPointerLeave={onPointerLeave}
            >
                <g>
                    <CursorsPresence />
                </g>
            </svg>
        </main>
    )
}