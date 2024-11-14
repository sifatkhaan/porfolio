
import React from "react"
import { Provider } from "react-redux"
import StyleComponentRegister from "./AntdRegister"
import store from "../redux/store"

const Providers = ({children}:{children:React.ReactNode})=>{
    return(
        <Provider store={store}>
            <StyleComponentRegister>{children}</StyleComponentRegister>
        </Provider>
    )
}
export default Providers;