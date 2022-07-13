import React from "react";
import data from "../data";
import { useStore } from "../store/store";
import { fadeinScale, fadeinScaleLandPageImg } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function MainWiki(){

    const currentPhilosophy = useStore(state=>state.currentPhilosophy)
    const setCurrentMain = useStore(state=>state.setCurrentMain)
    return(

        <Flex justify={"center"} align="center" css={{
            
            "& >div":{
                width:"50%",
                height:"100%",

            },
            "@bp1":{
                "& >div":{
                    width:"100%",
                    height:"100%",
    
                },
            }
            }}>

            <Flex dir={"column"} justify="around" css={{
                marginTop:"$1",
                height:"fit-content",
                
                "@bp1":{
                    order:"1",
                    
                }
                }}>

                <Flex dir={"column"}>
                    <Text css={{
                        headline1_i:"900",
                        marginBottom:"$4",
                        animation:`${fadeinScale} 1s 0.6s both ease`,
                        "@bp5":{
                            headline2_i:"900",
                            marginTop:"$7"
                        }
                        }}>
                        {data[currentPhilosophy]["name"]}
                    </Text>


                    <Text css={{
                        subhead1_i:"600",
                        color:"$onBg800",
                        animation:`${fadeinScale} 1s 1s both ease`,
                        "@bp5":{
                            subhead2_i:"600",
                        }
                        // width:"70%",
                        }}>
                        {data[currentPhilosophy]["wiki"]}
                    </Text>
                </Flex>

                
                <Flex justify={"between"} css={{
                    width:"100%",
                    animation:`${fadeinScale} 1s 1.2s both ease`,
                    "@bp5":{
                        flex_c:"",
                    },
                    "& p":{
                        headline6_i:"700",
                        cursor:"pointer",
                        color:"$onBg800",
                        padding:"$1 $2",
                        "&:hover:not(p:last-child)":{
                            color:"$onBg500"
                        },
                        "@bp5":{
                            headline6_i:"700",
                            marginBottom:"$1"
                        }
                    }

                    }}>

                    <Text onClick={()=>{setCurrentMain("list")}} css={{
                        "@bp5":{
                        order:"2"   ,
                        width:"100%",
                        textAlign:"center"
                        }
                        }}>
                        Go Back
                    </Text>

                    <Flex css={{
                        "@bp5":{
                            flex_c:"",
                            "& p ":{
                                width:"100%",
                                textAlign:"center",
                                margin:'0'
                            }
                        }
                        }}>

                        <Text onClick={()=>{window.open(data[currentPhilosophy]["cwiki"])}} css={{
                            "@bp5":{
                                order:"1"
                            }
                            }} >
                            Complete Wiki
                        </Text>

                        <Text  onClick={()=>{setCurrentMain("quotes") ; console.log("hello")}} css={{
                            border:"1px solid $onBg800",
                            marginLeft:"$3",
                            "&:hover":{
                                backgroundColor:"$onBg",
                                color:"$bg"
                            },
                            }}>
                            Quotes
                        </Text>

                    </Flex>

                </Flex>

            </Flex>


            <Flex css={{
                
                backgroundImage:`url(${data[currentPhilosophy]["img"]})`,
                imgBg:"",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"bottom",
                backgroundSize:"contain",
                padding:"$10 0 0 0",
                animation:`${fadeinScale} 1s 0s both ease`,
                "@bp1":{
                    animation:`${fadeinScaleLandPageImg} 1s 0s both ease`,
                    position:"fixed",
                    order:"0",
                    opacity:"0.1"
                }
            }}>
                
            

            </Flex>

        </Flex>

    )
}


export default MainWiki