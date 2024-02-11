"use client";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { Trash2 } from "lucide-react";
import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { useMutation, useSelf } from "@/liveblocks.config";
import { Camera, Color } from "@/types/canvas";
import { memo } from "react";
import { ColorPicker } from "./color-picker";
import { useDeleteLayers } from "@/hooks/use-delete-layers";

interface SelectionToolsProps{
    setLastUsedColor: (color: Color) => void;
    camera: Camera
}

export const SelectionTools = memo(({
    setLastUsedColor,
    camera
}: SelectionToolsProps) => {

    const selection = useSelf((me)=> me.presence.selection);

    const setFill = useMutation((
        {storage},
        fill:Color
    )=>{
        const liveLayers = storage.get("layers");
        setLastUsedColor(fill);

        selection.forEach((id)=>{
            liveLayers.get(id)?.set("fill", fill);
        })
    },[selection, setLastUsedColor]);

    const deleteLayers = useDeleteLayers();
    const selectionBounds = useSelectionBounds();

    if(!selectionBounds){
        return null;
    }

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    return (
        <div className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
            style = {{
                transform: `translate(
                    calc(${x}px - 50%),
                    calc(${y-16}px - 100%)
                )`
            }}
            >
            <ColorPicker
                onChange ={setFill}
            />
            <div className="flex items-center border-neutral-200 border-1 pl-2 ml-2">
                <Hint label="Delete">
                    <Button
                        variant="board"
                        size="icon"
                        onClick={deleteLayers}
                    >
                        <Trash2/>
                    </Button>
                </Hint>
            </div>
        </div>
    )
});

SelectionTools.displayName="SelectionTools";