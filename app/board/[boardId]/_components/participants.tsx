'use client';

import { useOther, useOthers, useSelf } from "@/liveblocks.config";
import { UserAvatar } from "./user-avatar";
import { currentUser } from "@clerk/nextjs";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_OTHER_USERS = 2;

export const Participants = () => {
    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length > MAX_SHOWN_OTHER_USERS;

    return(
        <div className="absolute h-12 top-2 right-2 bg-white p-3 flex items-center rounded-md shadow-md">
            <div className="flex gap-x-2">
                {users.slice(0,MAX_SHOWN_OTHER_USERS)
                    .map(({connectionId, info})=>{
                        return (
                            <UserAvatar
                            key = {connectionId}
                            src = {info?.picture}
                            name={info?.name}
                            fallback={info?.name?.[0] || "T"}
                            borderColor={connectionIdToColor(connectionId)}
                            />
                            )
                })}

                {currentUser && (
                    <UserAvatar 
                    src = {currentUser.info?.picture}
                    name={`${currentUser.info?.name} (You)`}
                    fallback = {currentUser.info?.name?.[0]}
                    borderColor={connectionIdToColor(currentUser.connectionId)}
                    />
                )}

                {hasMoreUsers && (
                    <UserAvatar
                    name={`{user.length - MAX_SHOWN_USERS} more`}
                    fallback = {`+${users.length - MAX_SHOWN_OTHER_USERS}`}
                    />
                )}
            </div>
        </div>
    )
}

export const ParticipantsSkeleton = () =>  {
    return(
        <div className="absolute h-12 top-2 right-2 bg-white p-3 flex items-center rounded-md shadow-md w-[100px]"/>
    )
}