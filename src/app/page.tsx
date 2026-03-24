import { GlobalNavBar } from '@/components/GlobalNavBar';
import { TodoList } from './_components/TodoList';

export default function Home() {
  return (
    <div>
      <GlobalNavBar />
      <main className="min-[1920px]:mx-[360px] min-[744px]:mx-6 mx-4 mt-[24px]">
        <TodoList />
      </main>
    </div>
  );
}
