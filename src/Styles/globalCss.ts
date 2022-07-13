import { globalCss } from "./@stitches.config";

const globalStyle = globalCss({
    "*":{
        padding:"0",
        margin:"0",
        boxSizing:"border-box",
        transition:"$coAndBg",
    },
    "::selection":{
        backgroundColor:"$onBg100"
    },
    body:{
        minHeight:"100vh",
        // backgroundColor:"$bg"
    },
    "@import":'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
    "#root":{
        // backgroundColor:"$bg",
        height:"100vh",
        width:"100%",
        flex_c:"",
        jc_ac:"",
        position:"relative",

    },
    "#wrapper":{
        width:"100%",
        flex_c:"",
        jfs_ac:"",
        height:"100vh",
        

    }
})

export default globalStyle