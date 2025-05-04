'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = 'TASK';
const fieldNames = ['To-Do', 'Monitor', 'In Progress', 'Done'];

function Task({ task, index, fromField }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const drag = useDrag(() => ({
    type: ItemType,
    item: { index, fromField },
  }))[1] as (node: HTMLDivElement | null) => void;

  useEffect(() => {
    if (ref.current) {
      drag(ref.current);
    }
  }, [drag]);

  return (
    <div
      ref={ref}
      className="bg-yellow-100 p-2 rounded shadow mb-2 cursor-move"
    >
      {task}
    </div>
  );
}

function Field({ index, tasks, onDropTask }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const drop = useDrop(() => ({
    accept: ItemType,
    drop: (item: { index: number; fromField: number }) =>
      onDropTask(item.fromField, index, item.index),
  }))[1] as (node: HTMLDivElement | null) => void;

  useEffect(() => {
    if (ref.current) {
      drop(ref.current);
    }
  }, [drop]);

  return (
    <div
      ref={ref}
      className="relative bg-white w-64 min-h-[12rem] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="absolute inset-0 bg-[url('/noise.svg')] bg-cover opacity-5 pointer-events-none rounded-xl" />
      <div className="relative z-10 h-full flex flex-col">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          {fieldNames[index] || `Field ${index + 1}`}
        </h2>
        {tasks.map((task: string, i: number) => (
          <Task key={i} task={task} index={i} fromField={index} />
        ))}
      </div>
    </div>
  );
}

function Trash({ deleteTask }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const drop = useDrop(() => ({
    accept: ItemType,
    drop: (item: { index: number; fromField: number }) =>
      deleteTask(item.fromField, item.index),
  }))[1] as (node: HTMLDivElement | null) => void;

  useEffect(() => {
    if (ref.current) {
      drop(ref.current);
    }
  }, [drop]);

  return (
    <div
      ref={ref}
      className="w-64 h-16 mt-6 bg-red-100 text-red-700 border-2 border-red-300 rounded-lg flex items-center justify-center font-bold"
    >
      🗑️ Drag here to delete
    </div>
  );
}

export default function AdminPage() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [newTask, setNewTask] = useState('');
  const [fields, setFields] = useState<string[][]>([[], [], [], []]);

  const correctPassword = 'November Rain';

  useEffect(() => {
    const stored = localStorage.getItem('todo-fields');
    if (stored) setFields(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('todo-fields', JSON.stringify(fields));
  }, [fields]);

  const handleAddTask = (e: any) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setFields((prev) => {
      const copy = [...prev];
      copy[0] = [...copy[0], newTask];
      return copy;
    });
    setNewTask('');
  };

  const moveTask = (fromField: number, toField: number, taskIndex: number) => {
    setFields((prev) => {
      const updated = [...prev];
      const task = updated[fromField][taskIndex];
      updated[fromField] = updated[fromField].filter((_, i) => i !== taskIndex);
      updated[toField] = [...updated[toField], task];
      return updated;
    });
  };

  const deleteTask = (fromField: number, taskIndex: number) => {
    setFields((prev) => {
      const updated = [...prev];
      updated[fromField] = updated[fromField].filter((_, i) => i !== taskIndex);
      return updated;
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 text-gray-900">
        <h1 className="text-3xl font-bold mb-4">Enter Password</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (password === correctPassword) setAuthenticated(true);
          }}
          className="flex flex-col items-center"
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded border"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-full"
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="relative min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-8 text-gray-900">
        <h1 className="text-4xl font-bold text-center mb-6">To-Do Board</h1>

        <form onSubmit={handleAddTask} className="flex justify-center mb-8 gap-2">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="px-4 py-2 rounded border w-64"
            placeholder="Add new task"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-emerald-600 text-white rounded"
          >
            Add
          </button>
        </form>

        <div className="flex flex-wrap gap-6 justify-center">
          {fields.map((field, index) => (
            <Field
              key={index}
              index={index}
              tasks={field}
              onDropTask={moveTask}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Trash deleteTask={deleteTask} />
        </div>

        <Link
          href="/"
          className="absolute bottom-6 right-6 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </DndProvider>
  );
}