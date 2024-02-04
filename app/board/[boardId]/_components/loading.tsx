
import { Loader } from "lucide-react";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

export const Loading = () => {
    return(

        <main className="w-full h-full bg-neutral-100 touch-none relative flex items-center justify-center">
            <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
            <Info.Skeleton/>
            <Participants.Skeleton/>
            <Toolbar.Skeleton/>
        </main>
    )
}