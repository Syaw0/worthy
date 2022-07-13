import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import MainLandPage from "./mainLandPage";
import MainList from "./mainList";
import MainQuotes from "./mainQuotes";
import MainWiki from "./mainWiki";

function MainCon(){
    return(

        <Flex css={{
            width:"100%",
            height:"100%",
            // if main list activated
            
            
        }}>
            {/* <MainLandPage/> */}
            {/* <MainList/> */}
            {/* <MainWiki/> */}
            <MainQuotes/>
        </Flex>

    )
}

export default MainCon