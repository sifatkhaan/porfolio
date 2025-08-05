import Item from "./Item"
const List = ({list, onRemoveItem})=>(
    <ul>
        {list.map((item)=> (
            <Item
            key = {item.id}
            item = {item}
            onRemoveItem = {onRemoveItem}
            />
        ))}
    </ul>
);
export default List;