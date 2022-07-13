import create from "zustand";
import { fadein, fadeinScale, fadeinTop, fadeout } from "../Styles/keyframes";

interface Store {
    currentMain:string;
    setCurrentMain:(value:string)=>void;
    currentPhilosophy:string ;
    setPhilosophy:(value:string)=>void;
    currentQuote:number,
    setQuote:(value:number)=>void
}

const useStore = create<Store>()((set,get)=>({

    currentMain:"landpage" ,

    setCurrentMain:(value:string)=>{
        set(state=>{return{...state , currentMain:value}})

    },

    currentPhilosophy:"",
    setPhilosophy(value:string) {
        set(state=>{return{...state , currentPhilosophy:value , currentMain:"wiki" , currentQuote:0}})
    },

    currentQuote:0,
    setQuote:(value:number)=>{
        let quote = document.getElementById("quote") as any
        quote.style.animation = `${fadeout} 1s 0s both ease`
        setTimeout(()=>{
            quote.style.animation = `${fadein} 1s 0.4s both ease`
            set(state=>{return{...state , currentQuote:value}})
        },1000)
        
    }

}))





export {useStore}