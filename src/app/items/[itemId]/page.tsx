import { GlobalNavBar } from '@/components/GlobalNavBar';
import { TodoDetail } from './_components/TodoDetail';

export default async function Page({ params }: { params: Promise<{ itemId: string }> }) {
  const { itemId } = await params;

  return (
    <div>
      <GlobalNavBar />
      <main className="mx-[102px]">
        <TodoDetail itemId={itemId} />
      </main>
      {/* <DetailTitle todo={{ name }} onClick={() => {}} /> */}
    </div>
  );
}
