
export const Participants = () => {
    return(
        <div className="absolute h-12 top-2 right-2 bg-white p-3 flex items-center rounded-md shadow-md">
            list of users
        </div>
    )
}

Participants.Skeleton = function ParticipantsSkeleton() {
    return(
        <div className="absolute h-12 top-2 right-2 bg-white p-3 flex items-center rounded-md shadow-md w-[100px]"/>
    )
}