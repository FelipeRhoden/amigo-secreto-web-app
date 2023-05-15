import { PeopleContext } from "@/contexts/peopleContext";
import { useContext } from "react";

function usePeople(){
    return useContext(PeopleContext);
}

export default usePeople;