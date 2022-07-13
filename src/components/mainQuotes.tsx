import React from "react";
import Ico_quote from "../asesst/Icons/Ico_quote";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function MainQuotes(){
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
                        "& img":{
                            width:"50px",
                            height:"50px",
                        },
                        }}>
                        <img src="https://user-images.githubusercontent.com/78824988/178515375-4551d6b9-119f-4953-960b-93a0a131c075.png" /> 
                        <Flex dir={"column"} css={{
                            marginLeft:"$1",
                            
                        }}>
                            <Text css={{
                                headline5_i:"700",
                                }}>
                                Marcus Aurelius
                            </Text>

                            <Text css={{
                                subhead1_i:"500",
                                color:"$onBg700"
                                }}>
                                Stoic philosopher
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
                        <Text css={{
                            display0_i:"900",
                            "@bp1":{
                                display2_i:"900"
                            },
                            "@bp3":{
                                display3_i:"900",
                                marginTop:"$4"
                            }
                        }}>
                            You have power over your mind - not outside events. Realize this, and you will find strength.
                        </Text>
                </Flex>

            </Flex>


            <Flex justify={"between"} css={{
                width:"100%",
                margin:"$5 0",
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
                        <Text>
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
                        <Text>
                            Previous Quote
                        </Text>

                        <Text css={{
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