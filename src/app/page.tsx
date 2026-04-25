import { GlobalNavBar } from '@/components/GlobalNavBar';
import { TodoList } from './_components/TodoList';

export default function Home() {
  return (
    <div >
      <GlobalNavBar />
      <main className="desktop:mx-[360px] tablet:mx-6 mx-4 mt-[24px]">
        <TodoList />
      </main>
    </div>
  );
}
