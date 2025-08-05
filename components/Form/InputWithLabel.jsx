import { useEffect, useRef } from "react";

const InputWithLabel = ({id, value,
     type= 'text',
     onInputChange,isFocused,children

     })=>{
        const inputRef = useRef();
        useEffect(()=>{
            if(isFocused && inputRef.current){
                inputRef.current.focus()
            }
        }, [isFocused]);

        return (
            <>
            <label> {children}</label>
            &nbsp;
            <input type={type} ref={inputRef} value={value} onChange={onInputChange}/>
            </>
        )
     };

     export default InputWithLabel;
