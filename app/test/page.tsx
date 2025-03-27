'use client'
import { produce } from 'immer'
import React, { useState } from 'react'

export default function Test() {

    const [bugs, setBugs] = useState([
        { id: 1, name: 'First Bugs', fixed: false },
        { id: 2, name: 'Second Bugs', fixed: false },
    ])
    const [works, setWorks] = useState([
        { id: 1, name: 'First Work', status: false },
        { id: 2, name: 'Second Work', status: false },
    ])

    const state = {
        projects: [
            {
                id: 1,
                name: "Project A",
                tasks: [
                    { id: 1, title: "Task 1", completed: false },
                    { id: 2, title: "Task 2", completed: true },
                ],
            },
            {
                id: 2,
                name: "Project B",
                tasks: [
                    { id: 3, title: "Task 3", completed: false },
                    { id: 4, title: "Task 4", completed: false },
                ],
            },
        ],
    };

    const initialState = {
        items: [
            { id: 1, name: "Apple", price: 1, quantity: 2 },
            { id: 2, name: "Banana", price: 0.5, quantity: 1 },
        ],
        total: 2.5,
    };

    const [cart, setCart] = useState(initialState)

    const updateQty = (id, newQty) => {
        setCart(produce(cart, draft => {
            const item = draft.items.find(item => item.id === id);
            if (item) {
                item.quantity = newQty;
            }
            draft.total = draft.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
        }))
    };

    const addItem = newItem => {
        setCart(produce(cart, draft => {
            const itemExists = draft.items.find(item => item.id === newItem.id);
            if (itemExists) {
                itemExists.quantity += newItem.quantity;
            } else {
                draft.items.push(newItem)
            }
            draft.total = draft.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
        }))
    }

    const removeItem = (id) => {
        setCart(produce(cart, draft => {
            draft.items = draft.items.filter(item => item.id !== id);
            draft.total = draft.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
        }))
    }

    const handleClickBug = () => {
        setBugs(produce(draft => {
            const bug = draft.find(bug => bug.id === 1)
            if (bug) bug.fixed = true;
        }))
    }
    const handleClickWork = () => {
        setWorks(produce(draft => {
            const work = draft.find(work => work.id === 2)
            if (work) work.status = true;
        }))
    }

    return (
        <div>
            <div>
                {bugs.map(bug => <p key={bug.id}> {bug.name}  {bug.fixed ? 'fixed' : 'New'} </p>)}
                <button className='bg-green-200' onClick={handleClickBug}>Click It</button>
            </div>
            <div>
                {works.map(bug => <p key={bug.id}> {bug.name}  {bug.status ? 'Done' : 'Pending'} </p>)}
                <button className='bg-green-200' onClick={handleClickWork}>Click Work</button>
            </div>
            <div className='flex justify-center p-4 w-full '>
                <div className='w-2/3'>
                    <h1 className='text-6xl p-4 text-center'>Shopping Cart </h1>
                    <table className='border border-black border-collapse w-full'>
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.items.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        {i+1}
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <input type="number" min="1" value={item.quantity} onChange={(e) => updateQty(item.id, Number(e.target.value))} />
                                    </td>
                                    <td>
                                        <button onClick={() => removeItem(item.id)}>Remove</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <h2 className='text-2xl'>Total : ${cart.total.toFixed(2)}</h2>
                    <button onClick={() => addItem({ id: 3, name: 'Orange', price: 0.8, quantity: 1 })}>Add Orange</button>
                </div>
            </div>
        </div>
    )
}
