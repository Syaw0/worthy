import React from "react";
import { useStore } from "../store/store";
import Flex from "../Styles/styledComponent/Flex";
import MainLandPage from "./mainLandPage";
import MainList from "./mainList";
import MainQuotes from "./mainQuotes";
import MainWiki from "./mainWiki";

function MainCon(){

    const currentMain = useStore(state=>state.currentMain)

    return(

        <Flex justify={"center"} css={{
            width:"100%",
            height:"100%",
            // if main list activated
            
            
        }}>

            {currentMain === "landpage" && <MainLandPage/>}

            {currentMain === "list" && <MainList/>}
            {currentMain === "wiki" && <MainWiki/>}
            {currentMain === "quotes" && <MainQuotes/>}
        </Flex>

    )
}

export default MainCon