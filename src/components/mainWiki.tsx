import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function MainWiki(){
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
                        "@bp5":{
                            headline2_i:"900",
                            marginTop:"$7"
                        }
                        }}>
                        Seneca the Younger
                    </Text>


                    <Text css={{
                        headline6_i:"600",
                        color:"$onBg800",
                        "@bp5":{
                            subhead1_i:"600",
                        }
                        // width:"70%",
                        }}>
                        Seneca was born in Córdoba in Hispania, and raised in Rome, where he was trained in rhetoric and philosophy. His father was Seneca the Elder, his elder brother was Lucius Junius Gallio Annaeanus, and his nephew was the poet Lucan. In AD 41, Seneca was exiled to the island of Corsica under emperor Claudius,[2] but was allowed to return in 49 to become a tutor to Nero. When Nero became emperor in 54, Seneca became his advisor and, together with the praetorian prefect Sextus Afranius Burrus, provided competent government for the first five years of Nero's reign. Seneca's influence over Nero declined with time, and in 65 Seneca was forced to take his own life for alleged complicity in the Pisonian conspiracy to assassinate Nero, in which he was likely to have been innocent.[3] His stoic and calm suicide has become the subject of numerous paintings. 
                    </Text>
                </Flex>

                
                <Flex justify={"between"} css={{
                    width:"100%",
                    "@bp5":{
                        flex_c:"",
                    },
                    "& p":{
                        headline5_i:"700",
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

                    <Text css={{
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

                        <Text css={{
                            "@bp5":{
                                order:"1"
                            }
                            }} >
                            Complete Wiki
                        </Text>

                        <Text css={{
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
                
                backgroundImage:`url(${"https://user-images.githubusercontent.com/78824988/178515375-4551d6b9-119f-4953-960b-93a0a131c075.png"})`,
                imgBg:"",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"bottom",
                backgroundSize:"contain",
                padding:"$10 0 0 0",
                "@bp1":{
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