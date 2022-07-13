import React from "react";
import { useStore } from "../store/store";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";
 
type data = {
    name:string ;
    img:string;
    role:string ;
    wiki:string ;
    cwiki:string ;
    quotes:object[]
}

function MainListItems({data }:{data:data }){
    
    const setPhilosophy = useStore(state=>state.setPhilosophy)

    return(
        <Flex onClick={()=>{setPhilosophy(data["name"])}} justify={"between"} align="center" css={{
            width:"100%",
            cursor:"pointer",
            padding:"$1 $2",
            borderRadius:"8px",
            "@bp4":{
                padding:"5px"
            },
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
                    },
                    "@bp4":{
                        "& img":{
                        width:"60px",
                        height:"60px",
                        }
                    },
                    }}> 
                    <img src={data["img"]} alt="img "/>
                </Flex>   

                <Flex dir={"column"} css={{
                    marginLeft:"$1"
                    }}>
                    
                    <Text css={{
                        headline5_i:"700",
                        marginBottom:"$1",
                        "@bp4":{
                            headline6_i:"700",
                        }

                        }}> 
                        {data["name"]}
                    </Text>

                    <Text css={{
                        subhead2_i:"500",
                        color:"$onBg700"
                        }}>
                        {data["role"]}
                    </Text>

                </Flex>

            </Flex>


            <Flex>
                <Text css={{
                    subhead1_i:"500",
                    color:"$onBg700",
                    "@bp4":{
                        subhead2_i:"500",
                    }
                }}>
                    {data["quotes"].length + " quotes"}
                </Text>
            </Flex>

        </Flex>
    )
}


export default MainListItems