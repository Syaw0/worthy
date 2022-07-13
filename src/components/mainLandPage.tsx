import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";


function MainLandPage(){
    return(
        <Flex  justify={"between"} align="center" css={{
            width:"100%",
            height:"100%",
            position:"relative",
            
            "& > div":{
                width:"50%",
                height:"100%"
            },
            "@bp3":{
                "& > div":{
                    width:"100%",
                },  
            }
        }}>
            
            <Flex dir={"column"} justify="center" align={"start"} css={{
                
                "@bp3":{
                    order:"1"
                }

                }}>

                <Text css={{
                    display1_i:"900",
                    marginBottom:"$4",
                    "@bp2":{
                        display2_i:"900"
                    },
                    "@bp3":{
                        width:"50px",
                        display3_i:"900"
                    },
                    }}> 
                    Worthy Quotes 
                    For Those Want To Inspire
                </Text>

                <Text css={{
                    headline6:"500",
                    color:"$onBg800",
                    marginBottom:"$7",
                    }}>
                    Respect your eyes and  your mind and <br></br> read good things
                </Text>


                <Text cursor={"click"} css={{
                    border:"1px solid $onBg300",
                    headline6_i:"500",
                    padding:"$1 $2",
                    textAlign:"center",
                    color:"$onBg800",
                    width:"100%",
                    "&:hover":{
                        backgroundColor:"$onBg",
                        color:"$bg",

                    }
                    }}>
                    Get Start
                </Text>


            </Flex>


            <Flex css={{
                backgroundImage:`url(${"https://user-images.githubusercontent.com/78824988/178507533-f43c8c31-820e-49b9-b419-9e33fefefb11.png"})`,
                imgBg:"",
                backgroundSize:"contain",
                backgroundRepeat:"no-repeat",
                "@bp3":{
                    order:"0",
                    position:"fixed",
                    width:window.innerWidth,
                    bottom:"0",
                    left:"0",
                    opacity:"0.2",
                    border:"3px solid white",
                    backgroundPosition:"bottom",
                    // backgroundSize:"cover",
                    
                }
                }}>
            </Flex>

        </Flex>
    )
}

export default MainLandPage