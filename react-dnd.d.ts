declare module 'react-dnd' {
    import * as React from 'react';
    import type { BackendFactory } from 'dnd-core';
  
    export const DndProvider: React.FC<{ backend: BackendFactory; children: React.ReactNode }>;
  
    export function useDrag<Type = unknown, Collect = unknown>(
      spec: any
    ): [React.Ref<any>, Collect, () => void];
  
    export function useDrop<Type = unknown, Collect = unknown>(
      spec: any
    ): [React.Ref<any>, Collect];
  }
  