import { useRef,useEffect } from "react";
let useClickOutside=(handler)=> {
    let domNode=useRef();

    useEffect(()=>{
        let maybeHandler=(e)=> {
            if(!domNode.current.contains(e.target.value))
            handler();
        }
        document.addEventListener("mousedown",maybeHandler);

        return()=> {
            document.removeEventListener("mousedown",maybeHandler);
        };
    });
    return domNode;
};
export default useClickOutside;