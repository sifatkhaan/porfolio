
import React, { useState } from 'react';

export default function ChildGrid() {

  const [rows, setRows]= useState([
    { id: 1, name: 'Row 1', isChecked: false, selectValue:null },
    { id: 2, name: 'Row 2', isChecked: false, selectValue:null },
  ])

  const [selectAll, setSelectAll] = useState(false);

const addRow = ()=>{
  const newRow = {id: rows.length + 1, name:`Row${rows.length + 1}`, isChecked: false, selectValue: null, };
  setRows([...rows, newRow]);
}

const removeSelectedRows = ()=>{
  setRows(rows.filter(row=> !row.isChecked));
  setSelectAll(false);
}

const handleCheckBoxChange = (id)=>{
  setRows(rows.map(row=> (row.id === id ? {...row, isChecked: !row.isChecked}: row)))
}

const handleCheckAll = ()=> {
setSelectAll(!selectAll);
setRows(rows.map(row=> ({...row, isChecked: !selectAll})))
}
const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <>

    <div>
      <h1>Grid with checkbox</h1>
      <button  onClick={addRow} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      <button
        onClick={removeSelectedRows}
        className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        disabled={!rows.some(row => row.isChecked)}
      >
        Delete 
      </button>

      <table className="table-auto w-full mt-4 border border-black">
        <thead>
          <tr>
            <th className='border border-black text-left'>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleCheckAll}
              />
            </th>
            <th className='border border-black'>ID</th>
            <th className=' border border-black'>Name</th>
            <th className=' border border-black'>Select</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td className=' border border-black'>
                <input
                  type="checkbox"
                  checked={row.isChecked}
                  onChange={() => handleCheckBoxChange(row.id)}
                />
              </td>
              <td className=' border border-black'>{row.id}</td>
              <td className=' border border-black'>{row.name}</td>
              <td className=' border border-black'> <select
                  value={row.selectValue}
                 
                  className="border rounded p-1"
                >
                  <option value="">Select an option</option>
                  {options.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
