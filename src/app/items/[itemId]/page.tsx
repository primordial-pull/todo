import { GlobalNavBar } from '@/components/GlobalNavBar';
import { TodoDetail } from './_components/TodoDetail';

export default async function Page({ params }: { params: Promise<{ itemId: string }> }) {
  const { itemId } = await params;

  return (
    <div className="flex flex-col bg-gray-50 h-screen ">
      <GlobalNavBar />
      <main className="bg-background flex-1 min-[744px] px-4 min-[744px]:px-6 min-[1920px]:px-[102px] min-[1920px]:mx-[360px]">
        <TodoDetail itemId={itemId} />
      </main>
    </div>
  );
}
