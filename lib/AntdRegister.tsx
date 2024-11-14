"use client";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs"
import Entity from "@ant-design/cssinjs/es/Cache"
import { useServerInsertedHTML } from "next/navigation";
import React from "react"

const StyleComponentRegister = ({children}:React.PropsWithChildren)=>{
const cache = React.useMemo<Entity>(()=> createCache(), []);
useServerInsertedHTML(()=>(
<style
      id='antd'
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
));
 return <StyleProvider cache={cache}>{children}</StyleProvider>
}

export default StyleComponentRegister;