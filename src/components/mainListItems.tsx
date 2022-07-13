import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function MainListItems(){
    return(
        <Flex justify={"between"} align="center" css={{
            width:"100%",
            cursor:"pointer",
            padding:"$1 $2",
            borderRadius:"8px",
            "&  p":{
                cursor:"pointer"
            },
            "&:hover":{
                backgroundColor:"$onBg100"
            }

            }}>

            <Flex justify={"center"} align="center">

                <Flex css={{
                    "& img":{
                        width:"100px",
                        height:"100px",
                    }
                    }}> 
                    <img src="https://user-images.githubusercontent.com/78824988/178515375-4551d6b9-119f-4953-960b-93a0a131c075.png" />
                </Flex>   

                <Flex dir={"column"} css={{
                    marginLeft:"$1"
                    }}>
                    
                    <Text css={{
                        headline5_i:"700",
                        marginBottom:"$1",

                        }}> 
                        Marcus Aurelius
                    </Text>

                    <Text css={{
                        subhead2_i:"500",
                        color:"$onBg700"
                        }}>
                        Stoic philosopher
                    </Text>

                </Flex>

            </Flex>


            <Flex>
                <Text css={{
                    subhead1_i:"500",
                    color:"$onBg700"
                }}>
                    32 quotes
                </Text>
            </Flex>

        </Flex>
    )
}


export default MainListItems