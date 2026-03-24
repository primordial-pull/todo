import { Todo } from '@/types/Todo';
import { TodoItem } from './TodoItem';
import { CheckListConfig } from './TodoList';

type CheckListProps = {
  list: Todo[];
  config: CheckListConfig;
  onClick: (todo: Todo) => void;
  className?: string;
};

export const CheckList = ({ list, config, onClick, className }: CheckListProps) => {
  return (
    <div className={`flex flex-col w-full min-[1920px]:w-1/2 gap-4 mb-12 ${className}`}>
      {config.titleIcon}

      {list.length > 0 ? (
        list.map((todo) => <TodoItem key={todo.id} todo={todo} onClick={() => onClick(todo)} />)
      ) : (
        <div className="flex flex-col items-center py-10 gap-2">
          {config.emptyIcon}
          <p className="whitespace-pre-line text-center text-slate-400 font-bold mt-6 text-base">
            {config.emptyText}
          </p>
        </div>
      )}
    </div>
  );
};
