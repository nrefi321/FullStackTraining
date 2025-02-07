import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '@/types/product';


interface CartStore {
    items: CartItem[];
    add: (item: Product) => void;
    remove: (id: number) => void;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],
            add: (item) =>
                set((state) => {
                    const index = state.items.findIndex((i) => i.id === item.id);
                    if (index !== -1) {
                        const newItems = [...state.items];
                        newItems[index].quantity += 1;
                        return { items: newItems };
                    }
                    return { items: [...state.items, { ...item, quantity: 1 }] };
                }),
            remove: (id) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                })),
        }),
        {
            name: 'cart-store', // Persist key name
        }
    )
);

// export const useCartStore = create<CartStore>()
//     persist(
//         (set) => ({ 
//             items: [],
//             addItem:(item:any) => set((state) => {
//                 const index = state.items.findIndex((i:any) => i.id === item.id)
//                 if (index === -1) {
//                     state.items[index].quantity += 1;
//                     return { items: [...state.items] };
//                 }
//                 return { items: [...state.items, { ...item, quantity: 1 }] };
//             }),
//             removeItem: (id:number) => set((state) => {
//                 const index = state.items.findIndex((i:any) => i.id === id);
//                 if (index === -1) {
//                     state.items.splice(index, 1);
//                     return { items: [...state.items] };
//                 }
//                 return { items: [...state.items] };
//             })
//         }),
//         {
//             name: 'cart-store',
//         }
// )

