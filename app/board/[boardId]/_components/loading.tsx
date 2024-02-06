'use client';

import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";

export const Loading = () => {
    return(

        <main className="w-full h-full bg-neutral-100 touch-none relative flex items-center justify-center">
            <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
            <InfoSkeleton/>
            <ParticipantsSkeleton/>
            <ToolbarSkeleton/>
        </main>
    )
}