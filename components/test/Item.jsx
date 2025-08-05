const Item = ({item, onRemoveItem})=>{

    const handleRemoveItem = ()=>{
        onRemoveItem(item)

    };
    return (
        <li className="m-3">
            <span>
                {item.author}
            </span>
            <span className="m-3">
                <button className="bg-[#2fd92f] hover:bg-[#1f9d1f] rounded-md shadow-md p-1 text-[white]" type="button" onClick={()=>onRemoveItem(item)}>Dismiss</button>
            </span>
        </li>
    )
}
export default Item;