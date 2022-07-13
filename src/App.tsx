import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';
import Nav from './components/nav';
import MainCon from './components/mainCon';
import { useStore } from './store/store';
function App() {

  globalStyle()

  return (
    <Flex  id='wrapper' data-testid="app"  css={{
      backgroundColor:"$bg",
      padding:"0 $10",
      overflowY:"hidden",
      

      "@bp1":{
        padding:"0 $5"
      },

      "@bp5":{
        overflowY:"scroll",
      },

      "@bp4":{
        padding:"0 $3",
      }
      }} >

      <Nav/>
      <MainCon/>
    </Flex>
  );
}

export default App;
