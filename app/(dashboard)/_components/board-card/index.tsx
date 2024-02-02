'use client';
interface BoardCardProps{
    id:string;
    title:string;
    authorName:string;
    authorId:string;
    orgId:string;
    imageUrl:string;
    createdAt:number;
    isFavorite:boolean;
}
export default function BoardCard({
    id,
    title,
    authorName,
    authorId,
    orgId,
    imageUrl,
    createdAt,
    isFavorite
}: BoardCardProps) {
    return (
        <div>
            Boards
        </div>
    )
}