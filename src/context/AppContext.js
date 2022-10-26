import {createContext, useState} from 'react'

export const AppContext = createContext();

const AppContextProvider = ({children})=>{
    const getUserFromLS=()=>{
        const u = localStorage.getItem('user-crave')
        if(u){
            return JSON.parse(u)
        }
    }

    const [alert, setAlert]= useState({})
    const [user, _setUser] = useState(getUserFromLS()??'')


    const setUser =(user)=>{
        _setUser(user)
        localStorage.setItem('user-crave', JSON.stringify(user))
    }



    const values={
        alert,
        setAlert,
        user,
        setUser
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;