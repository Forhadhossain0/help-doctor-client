import { useContext } from "react";
import { AuthContext } from "../maincomponent/provider/AuthProvider";


const useAuth = () => {
    const a = useContext (AuthContext)
    return a;
      
};

export default useAuth;