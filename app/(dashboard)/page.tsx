'use client';
import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import { BoardList } from "./_components/board-list";
interface DashboardPageProps {
  searchParams:{
    orgId?: string;
    favorites?: string ;
  }
}
const DashboradPage = ({
  searchParams,
}: DashboardPageProps) => {
  const {organization} = useOrganization();
   
  return (
    <div>
      <div className="flex-1 h-[calc(100%-80px)] p-6 ">
        {!organization?(
            <EmptyOrg/>
        ):(
          <BoardList
          orgId={organization.id}
          query={searchParams}
          />
        )}
        
      </div>
    </div>
  )
}

export default DashboradPage;