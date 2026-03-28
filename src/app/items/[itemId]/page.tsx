import { GlobalNavBar } from '@/components/GlobalNavBar';
import { TodoDetail } from './_components/TodoDetail';
import { Metadata } from 'next';
import { fetchTodoItem } from '@/queries/TodoItem';

type MetaDataProps = {
  params: Promise<{ itemId: number }>;
};

export async function generateMetadata({ params }: MetaDataProps): Promise<Metadata> {
  const { itemId } = await params;
  const todo = await fetchTodoItem({ itemId });

  return {
    title: `${todo.name}`,
    description: `${todo.name}를 확인하고 상태를 변경하세요.`,
  };
}

export default async function Page({ params }: { params: Promise<{ itemId: string }> }) {
  const { itemId } = await params;

  return (
    <div className="flex flex-col bg-gray-50 h-screen ">
      <GlobalNavBar />
      <main className="bg-background flex-1 min-[744px] px-4 min-[744px]:px-6 min-[1920px]:px-[102px] min-[1920px]:mx-[360px]">
        <TodoDetail itemId={Number(itemId)} />
      </main>
    </div>
  );
}
