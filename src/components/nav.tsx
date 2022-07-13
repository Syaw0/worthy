import React from "react";
import Ico_menu from "../asesst/Icons/Ico_menu";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";


function Nav (){
    return(
        <Flex justify={"between"} align="center" css={{
            width:"100%",
            paddingTop:"$1",
            paddingBottom:"$1",
            // padding:"$1 300px",
            borderBottom:"1px solid $onBg300",
            

            "& svg":{
                fill:"$onBg"
            }
            }}>

            <Text cursor={"click"}   css={{

                headline1_i:"900",

                }}>
                .w
            </Text>

            
            <Text cursor={"click"} css={{
                flex_r:"",
                jc_ac:""
                }}>
                <Ico_menu width="30" height="30"/>
            </Text>


        </Flex>
    )
}


export default Nav