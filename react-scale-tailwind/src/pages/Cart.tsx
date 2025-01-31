import { Link } from 'react-router'

export default function Cart() {
  return (
    <div className='max-w-4xl my-8 mx-auto'>
        <h1 className='text-3xl font-bold mb-8'>Shopping Cart</h1>
        <div className='grid gap-8 md:grid-cols-[1fr,320px]'>
            {/* Cart Item */}
            <div className='space-y-4'>
                <div className='flex items-center gap-4 bg-white p-4 rounded-lg shadow'>
                    <img src="/images/a1.png" className="w-24 h-24 object-contain" />
                    <div className='flex-1'>
                        <h3 className="font-semibold">Sample Product</h3>
                        <p className="text-gray-600">$100 x 2</p>
                        <p className="text-sm text-gray-500">Subtotal: $200</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <select className="border rounded p-1">
                            {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                            ))}
                        </select>
                        <Link to="/remove">Remove</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='grid gap-8 md:grid-cols-[1fr,320px]'>
            {/* Cart Item */}
            <div className='space-y-4'>
                <div className='flex items-center gap-4 bg-white p-4 rounded-lg shadow'>
                    <img src="/images/lix.jpg" className="w-24 h-24 object-contain" />
                    <div className='flex-1'>
                        <h3 className="font-semibold">Sample Product</h3>
                        <p className="text-gray-600">$100 x 2</p>
                        <p className="text-sm text-gray-500">Subtotal: $200</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <select className="border rounded p-1">
                            {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                            ))}
                        </select>
                        <Link to="/remove">Remove</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}