import { Component ,React} from "react";

import { Divider, Flex, View, Heading,Image,Content ,FileTrigger} from "@adobe/react-spectrum";

import { HiDotsHorizontal } from "react-icons/hi";

import { FaPlus } from "react-icons/fa6";

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'


import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Rest from "../Rest/index"


import "./index.css"

let terminal_data=[
    {
        terminal_id:1,
        terminal_name:"Terminal 1",
        text:"Optional meta data should be two lines"
    },
    {
        terminal_id:1,
        terminal_name:"Terminal 2",
        text:"Optional meta data should be two lines"
    },
]

class AirportInfo extends Component{

    state={t_data:terminal_data,textarea:""}


    onChangeTextArea=event=>{
        this.setState({textarea:event.target.value})
    }

    popupOf=()=>{
        this.setState({popup:true})
    }

    onClickContinue=()=>{
        
    }

    render(){
        const {t_data,popup}=this.state
        return(
            <div className={popup ? "show-pop-up":"close-pop-up"}>
            <View>
                <Navbar/>
                <hr/>
                <View>
                    <Flex>
                        <Sidebar/>
                        <Divider orientation="vertical" size="M"/>
                        
                        <View width="1200px">
                            <View justifyContent="start" alignItems="start">
                                <Heading>Airports {'>'} Indra Gandhi International Airport</Heading>
                            </View>
                            <View>
                                <Heading>Indra Gandhi International Airport</Heading>
                                <View>
                                    
                                    <ul className="menu-view">
                                        <li>Terminals</li>
                                        <li>Transport</li>
                                        <li>Contact Details</li>
                                    </ul>
                                    <hr/>
 

                                </View>
                                <Flex justifyContent="start" alignItems="center">
                                
                                

                                <ul className="terminal-conts">
                                    {t_data.map(each=>(
                                        <li key={each.terminal_id}>
                                            <div className="terminal-cont">
                                            <View width="250px" height="120px" borderColor={'2px solid red'}>
                                                <Flex justifyContent="">
                                                    <View>
                                                        <Image src="https://res.cloudinary.com/ramcharan/image/upload/v1720157346/hava%20havai/Image_am5hah.png" height="120px" width="80px" marginEnd="10px" objectFit="cover"/>
                                                    </View>
                                                    <View>
                                                    <Flex direction="column" justifyContent="center" alignContent="center">
                                                        <View>
                                                            <Flex alignContent="space-between" alignItems="center">
                                                                <Heading level={6} marginEnd="50px">{each.terminal_name}</Heading>
                                                                <HiDotsHorizontal size={20}/>
                                                            </Flex>
                                                        </View>
                                                        <Content level='6'>{each.text}</Content>
                                                    </Flex>
                                                    </View>
                                                </Flex>
                                            </View>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <View padding="10px" >
                                    {/* <Button variant="primary" onPress={this.popupOf}>
                                        <FaPlus/>
                                        <Text>Add Terminal</Text>
                                    </Button> */}



                                {/* popup container */}
                                <div className="popup-container">
                                    <Popup
                                        modal
                                        trigger={
                                        <button type="button" className="trigger-button">
                                            <FaPlus/>
                                            Add Terminal
                                        </button>
                                        }
                                    >
                                        {close => (
                                        <>
                                            <div>
                                            <h3>Terminal Title</h3>
                                            <hr/>
                                            <textarea rows={3} cols={85} placeholder="Description" className="text-area-popup" onChange={this.onChangeTextArea}/>
                                            </div>
                                            <div className="popup-btn-container">

                                            <FileTrigger acceptedFileTypes={['image/png']}>
                                                <Image src="https://res.cloudinary.com/ramcharan/image/upload/v1720167297/hava%20havai/Button_-_Desktop_-_Light_bwhcdr.png" height="25px" width="150px" objectFit="cover"/>
                                            </FileTrigger>

                                            <div className="pop-up-btn-cont">

                                            <button
                                            type="button"
                                            className="trigger-button"
                                            onClick={() => close()}
                                            >
                                            Cancel
                                            </button>
                                            <button type="button" className="trigger-button" onClick={this.onClickContinue}>
                                                Continue
                                            </button>
                                            </div>
                                            </div>

                                        </>
                                        )}
                                    </Popup>
                                    </div>














                                </View>
                                </Flex>
                            </View>
                            

                            <Rest/>
                            
                            
                        </View>
                    </Flex>
                </View>
            </View>



            



        </div>
        )
    }
}

export default AirportInfo