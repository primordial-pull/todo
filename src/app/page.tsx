import { GlobalNavBar } from '@/components/GlobalNavBar';
import { TodoList } from './_components/TodoList';
import { TodoForm } from './_components/TodoForm';

export default function Home() {
  return (
    <div>
      <GlobalNavBar />
      <TodoForm />
      <TodoList />
    </div>
  );
}
