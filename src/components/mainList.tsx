import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";
import MainListItems from "./mainListItems";

function MainList(){
    return(
        <Flex dir={"column"} css={{
            width:"100%",
            marginTop:"$4"
            }}>

            <Text css={{
                headline5_i:"600",
                color:"$onBg800",
                marginBottom:"$4",
                }}>
                Please Choose One...
            </Text>


            <Flex dir={"column"} css={{
                width:"100%",
                overflowY:"auto",
                height:"100%",
                marginBottom:"$4",
                "& >div":{
                    marginBottom:"$3"
                }
                }}> 

                <MainListItems/>
                <MainListItems/>
                <MainListItems/>
                <MainListItems/>
                <MainListItems/>
                <MainListItems/>
                <MainListItems/>
                <MainListItems/>

            </Flex>
            
        </Flex>
    )
}

export default MainList