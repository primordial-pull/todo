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

export default async function Page({ params }: { params: Promise<{ itemId: number }> }) {
  const { itemId } = await params;

  const todo = await fetchTodoItem({ itemId });

  return (
    <div className="flex flex-col bg-gray-50 h-screen ">
      <GlobalNavBar />
      <main className="bg-background flex-1 px-4 tablet:px-6 desktop:px-[102px] desktop:mx-[360px]">
        <TodoDetail todo={todo} />
      </main>
    </div>
  );
}
