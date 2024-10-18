
// import { meraStore } from "@/store/store";
import { Provider } from "react-redux";
// import store from "@/app/store/store"
import { merastore } from "@/app/store/store";

export default function ReduxProvider({children}){
    
    return <Provider store={merastore}>
            {children}
    </Provider>

}