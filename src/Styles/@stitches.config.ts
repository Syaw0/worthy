import { createStitches } from "@stitches/react";

export const {
    styled , 
    css , 
    keyframes,
    globalCss,
    theme,
    config
}  = createStitches({
    theme:{
        colors:{ 
            "bg":"#1C1B1B",
            "onBg":"#F6FEFF",
            "onBg100":"rgba(246,254,255,0.1)",
            "onBg200":"rgba(246,254,255,0.2)",
            "onBg300":"rgba(246,254,255,0.3)",
            "onBg400":"rgba(246,254,255,0.4)",
            "onBg500":"rgba(246,254,255,0.5)",
            "onBg600":"rgba(246,254,255,0.6)",
            "onBg700":"rgba(246,254,255,0.7)",
            "onBg800":"rgba(246,254,255,0.8)",
            "onBg900":"rgba(246,254,255,0.9)",
            
        },
        shadows:{
            "1dp":"0px 0px 2px 0px #00000024 , 0px 2px 2px 0px #0000001f , 0px 1px 3px 0px  #00000033" ,
            "8dp":"0px 8px 10px 1px #00000024 , 0px 3px 14px 3px #0000001f , 0px 4px 15px 0px  #00000033",
            "1dpw":"0px 0px 2px 0px #ffffff24 , 0px 2px 2px 0px #ffffff1f , 0px 1px 3px 0px  #ffffff33" ,
            "24dp":"0px 24px 38px 3px #00000024 , 0px 9px 46px 8px #0000001f , 0px 11px 15px 0px  #00000033"
        },
        fonts:{
            "lora":"Lora",
        },

        fontWeights:{
            9:"900",
        },

        fontSizes:{
            display1:"74px",
            display2:"57px",
            display3:"45px",
            "headline1":"36px",
            "headline2":"32px",
            "headline3":"28px",
            "headline4":"24px",
            "headline5":"22px",
            "headline6":"18px",
            "subhead1":"16px",
            "subhead2":"14px",
            "subhead3":"12px",
            "button":"15px",

        },

        lineHeights:{
            display0:"85px",
            display1:"76px",
            display2:"64px",
            display3:"52px",
            "headline1":"44px",
            "headline2":"40px",
            "headline3":"36px",
            "headline4":"32px",
            "headline5":"28px",
            "headline6":"24px",
            "subhead1":"24px",
            "subhead2":"20px",
            "subhead3":"18px",
            "button":"20px",
        },

        
        letterSpacings:{
            1:"0.1px"
        },

        transitions:{
            "coAndBg":"color 0.5s , background-color 0.5s , fill 0.5s",
            "shadowing":"box-shadow 0.5s"
        },
        space:{
            1:"8px",
            2:"16px",
            3:"24px",
            4:"32px", 
            5:"40px", 
            6:"50px",
            7:"62px",
            8:"74px",
            9:"86px",
            10:"98px",
            11:"112px",
        },
        radii:{
            "50":"50%"
        },
        zIndices:{
            "emergency":"101",
            "top":"10",
            "bottom":"0"
        }
 


    } , 
    media:{
        "bp1":"(max-width:1000px)",
        "bp2":"(max-width:800px)",
        
        "bp3":"(max-width:720px)",
        "bp4":"(max-width:600px)", 
        "bp5":"(max-width:450px)", 

    },
    utils:{
        "display0":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$display0",
            lineHeight:"$display1",
            fontStyle:"normal"
         }),

         "display0_i":(weight:string)=>({
            display1:weight,
            fontStyle:"italic"
         }),

        "display1":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$display1",
            lineHeight:"$display1",
            fontStyle:"normal"
         }),

         "display1_i":(weight:string)=>({
            display1:weight,
            fontStyle:"italic"
         }),

         "display2":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$display2",
            lineHeight:"$display2",
            fontStyle:"normal"
         }),

         "display2_i":(weight:string)=>({
            display2:weight,
            fontStyle:"italic"
         }),

         "display3":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$display3",
            lineHeight:"$display3",
            fontStyle:"normal"
         }),

         "display3_i":(weight:string)=>({
            display3:weight,
            fontStyle:"italic"
         }),

        "headline1":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$headline1",
            lineHeight:"$headline1",
            fontStyle:"normal"
         }),
         
         "headline1_i":(weight:string)=>({
            headline1:weight,
            fontStyle:"italic"
        }),

        "headline2":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$headline2",
            lineHeight:"$headline2",
            fontStyle:"normal"
         }),
         
         "headline2_i":(weight:string)=>({
            headline2:weight,
            fontStyle:"italic"
        }),

        "headline3":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$headline3",
            lineHeight:"$headline3",
            fontStyle:"normal"
         }),
         
         "headline3_i":(weight:string)=>({
            headline3:weight,
            fontStyle:"italic"
        }),

        "headline4":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$headline4",
            lineHeight:"$headline4",
            fontStyle:"normal"
         }),

         "headline4_i":(weight:string)=>({
            headline4:weight,
            fontStyle:"italic"
        }),


         "headline5":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$headline5",
            lineHeight:"$headline5",
            fontStyle:"normal"
         }),

         "headline5_i":(weight:string)=>({
            headline5:weight,
            fontStyle:"italic"
        }),

        "headline6":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$headline6",
            lineHeight:"$headline6",
            fontStyle:"normal"
         }),
         
         "headline6_i":(weight:string)=>({
            headline6:weight,
            fontStyle:"italic"
        }),


        "subhead1":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$subhead1",
            lineHeight:"$subhead1",
            fontStyle:"normal",
            letterSpacing:"$1"
         }),


        "subhead1_i":(weight:string)=>({
            subhead1:weight,
            fontStyle:"italic",
            
         }),

        "subhead2":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$subhead2",
            lineHeight:"$subhead2",
            fontStyle:"normal",
            letterSpacing:"$1"
         }),
         "subhead2_i":(weight:string)=>({
            subhead2:weight,
            fontStyle:"italic"
        }),

        "subhead3":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$subhead3",
            lineHeight:"$subhead3",
            fontStyle:"normal",
            letterSpacing:"$1"
         }),

         "subhead3_i":(weight:string)=>({
            subhead3:weight,
            fontStyle:"italic"
        }),

        "button":(weight:string)=>({
            fontFamily:"$lora" ,
            fontWeight:weight,
            fontSize:"$button",
            lineHeight:"$button",
            fontStyle:"normal",
            letterSpacing:"$1"
        }),

        "flex_r":()=>({
            display:"flex",
            flexDirection:"row",
        }) , 

        "flex_c":()=>({
            display:"flex",
            flexDirection:"column",
        }) , 

        "jc_ac":()=>({
            "justify-content":"center",
            "align-items":"center",
        }),

        "jfs_afs":()=>({
            "justify-content":"flex-start",
            "align-items":"flex-start",
        }),
        "jfs_ac":()=>({
            "justify-content":"flex-start",
            "align-items":"center",
        }),
        "jsb_ac":()=>({
            "justify-content":"space-between",
            "align-items":"center",
        }) ,
        "imgResponsive":()=>({
            width:"100%",
            height:"auto"
        }),
        opac:(value:string)=>({
            opacity:value
        }),
        imgBg:()=>({
            backgroundOrigin:"content-box",
            backgroundPosition:"center",
            backgroundSize:"cover",
        })

    }

})