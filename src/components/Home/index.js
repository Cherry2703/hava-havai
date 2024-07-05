import { Component } from "react";

import { View } from "@adobe/react-spectrum";

import Navbar from "../Navbar/index"
import Sidebar from "../Sidebar/index"
import MainContent from "../MainContent/index"


import "./index.css"



class Home extends Component{
    render(){
        
        return(
            <div direction="column">
                <Navbar/>
                <hr className="hr"/>
                <View padding="20px" height="90vh">
                    <div gap="size-125" direction="row" className="r">
                        <Sidebar width="30%"/>
                        {/* <Divider orientation="vertical" size="L"/> */}
                        <hr direction="column" height="90vh"/>
                        <MainContent width="70%"/>
                    </div>
                </View>
            </div>
        )
    }
}


export default Home