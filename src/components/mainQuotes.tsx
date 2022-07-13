import React from "react";
import Ico_quote from "../asesst/Icons/Ico_quote";
import data from "../data";
import { useStore } from "../store/store";
import { fadein, fadeinScale } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function MainQuotes(){

    const currentPhilosophy = useStore(state=>state.currentPhilosophy)
    const setCurrentMain = useStore(state=>state.setCurrentMain)
    const currentQuote = useStore(state=>state.currentQuote)
    const setQuote = useStore(state=>state.setQuote)
    

    const hadnleQuoteNavigation = (which:string) => {
        if(which === "next"){
            if(currentQuote === data[currentPhilosophy]["quotes"].length -1){
                setQuote(0)
            }else{
                setQuote(currentQuote+1)
            }

        }else{
            if(currentQuote === 0){
                setQuote(data[currentPhilosophy]["quotes"].length - 1)
            }else{
                setQuote(currentQuote-1)
            }

        }
    }


    return(
        <Flex dir={"column"} css={{
            width:"100%",
            height:"100%",
            }}>


            <Flex justify={"between"} css={{
                width:"100%",
                height:"100%",
                "@bp4":{
                    flex_c:"",
                    "& > div":{
                        width:"100%"
                    }
                }
                }}>

                <Flex dir={"column"} justify="center" css={{
                    "& svg":{
                        fill:"$onBg"
                    },
                    width:"25%",
                    "@bp2":{
                        "& svg":{
                            width:"150px",
                            height:"241px"
                        }
                    }
                    }}>
                    <Ico_quote width="234" height="325" /> 

                    <Flex css={{
                        marginTop:"$3",
                        animation:`${fadeinScale} 1s 0s both ease`,
                        "& img":{
                            width:"50px",
                            height:"50px",
                        },
                        }}>
                        <img src={data[currentPhilosophy]["img"]} /> 
                        <Flex dir={"column"} css={{
                            marginLeft:"$1",
                            
                        }}>
                            <Text css={{
                                headline5_i:"700",
                                }}>
                                {data[currentPhilosophy]["name"]}
                            </Text>

                            <Text css={{
                                subhead1_i:"500",
                                color:"$onBg700"
                                }}>
                                {data[currentPhilosophy]["role"]}
                            </Text>
                        </Flex>
                    </Flex>

                </Flex>


                <Flex justify={"center"} align="center" css={{
                    width:"70%",
                    "@bp1":{
                        width:"65%"
                    }
                    }}>
                        <Text id="quote" css={{
                            display0_i:"900",
                            color:"$onBg900",
                            animation:`${fadein} 2s 1s both ease`,
                            "@bp1":{
                                display2_i:"900"
                            },
                            "@bp3":{
                                display3_i:"900",
                                marginTop:"$4"
                            }
                        }}>
                            {data[currentPhilosophy]["quotes"][currentQuote]["quote"]}
                        </Text>
                </Flex>

            </Flex>


            <Flex justify={"between"} css={{
                width:"100%",
                margin:"$5 0",
                animation:`${fadeinScale} 1s 1.5s both ease`,
                "& p":{
                    headline6_i:"700",
                    padding:"$1 $2",
                    color:"$onBg700",
                    cursor:"pointer",
                    
                    "&:hover:not(p:nth-child(2))":{
                        color:"$onBg"
                    }
                } ,
                "@bp3":{
                    flex_c:"",
                    "&  p":{
                        width:"100%",
                        textAlign:"center",
                        marginBottom:"$1"

                    }
                }
                }}>
                    <Flex css={{
                        // textAlign:"center",
                        width:"100%",
                        }}> 
                        <Text onClick={()=>{setCurrentMain("wiki")}}>
                            Go Back To List
                        </Text>
                    </Flex>

                    <Flex justify={"end"} css={{
                        width:"100%",

                        "@bp3":{
                            flex_c:"",
                            textAlign:"center",
                            
                            order:"-1"
                        }
                        }}> 
                        <Text onClick={()=>{hadnleQuoteNavigation("pre")}}>
                            Previous Quote
                        </Text>

                        <Text onClick={()=>{hadnleQuoteNavigation("next")}} css={{
                            border:"1px solid $onBg",
                            "&:hover":{
                                backgroundColor:"$onBg",
                                color:"$bg"
                            },
                            "@bp3":{
                                order:"-3"
                            }
                            }}>
                            Next Quote
                        </Text>
                    </Flex>
            </Flex>


        </Flex>
    )
}

export default MainQuotes