import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset : () => void;
};

export const useCounterStore = create
    (persist
    <CounterStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
    }),
    {
        name: 'counter-store',
    }
));
