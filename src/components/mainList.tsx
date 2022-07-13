import React from "react";
import data from "../data";
import { fadeinScale } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";
import MainListItems from "./mainListItems";

function MainList(){



    return(
        <Flex dir={"column"} css={{
            width:"100%",
            marginTop:"$4",
            animation:`${fadeinScale} 1s 0.5s both ease`,
            // padding:"0 300px"
            }}>

            <Text css={{
                headline5_i:"600",
                color:"$onBg800",
                marginBottom:"$4",
                }}>
                Please Choose One...
            </Text>


            <Flex id={"listHolder"} dir={"column"} css={{
                width:"100%",
                overflowY:"auto",
                height:"100%",
                marginBottom:"$4",
                animation:`${fadeinScale} 1s 0s both ease`,
                "& >div":{
                    marginBottom:"$3"
                }
                }}> 


                {
                    Object.keys(data).map((v , i)=>{
                        return(
                            <MainListItems key={i} data={data[v]}  />
                        )
                    })
                }



            </Flex>
            
        </Flex>
    )
}

export default MainList