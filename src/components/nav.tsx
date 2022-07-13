import React from "react";
import Ico_menu from "../asesst/Icons/Ico_menu";
import { useStore } from "../store/store";
import { fadein, fadeinTop } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";


function Nav (){

    const currentMain = useStore(state=>state.currentMain)

    return(
        <Flex justify={"between"} align="center" css={{
            width:"100%",
            paddingTop:"$1",
            paddingBottom:"$1",
            // padding:"$1 300px",
            borderBottom:currentMain==="landpage" ? "":"1px solid $onBg300",
            animation:`${fadeinTop} 1s 0s both ease`,

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