export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }   
}

// export เหมือนเดิม และเพิ่ม quantity
export interface CartItem extends Product {
    quantity: number;
}