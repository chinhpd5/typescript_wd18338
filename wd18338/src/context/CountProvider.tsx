import { ReactNode, createContext } from "react";

type Prop={
    children: ReactNode
}

export const CountContext = createContext({} as {name: string})


export function CountProvider(prop: Prop){

    return (
        <CountContext.Provider value={{name: "chinhpd5"}}>
            {prop.children}
        </CountContext.Provider>
    )
}