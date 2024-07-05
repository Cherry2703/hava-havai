import React from "react";



import { View,Flex ,Heading,Text,Button} from "@adobe/react-spectrum"

import { FaPlus } from "react-icons/fa6";

// import Table from "../Table/index"

import AirportTable from "../AirportTable";

import "./index.css"


const airport_data=[
    {
        airport_id:1,
        airport_name:"Indra Gandhi International Airport",
        airport_country:"India",
        airport_code:"DEL",
        terminals:3
    },
    {
        airport_id:2,
        airport_name:"Dubai International Airport",
        airport_country:"UAE",
        airport_code:"DXB",
        terminals:5
    },
    {
        airport_id:3,
        airport_name:"Heathrow Airport",
        airport_country:"England",
        airport_code:"LHR",
        terminals:6
    },
    {
        airport_id:4,
        airport_name:"Istanbul Airport",
        airport_country:"Turkey",
        airport_code:"IST",
        terminals:3
    },
    {
        airport_id:5,
        airport_name:"Rajiv Gandhi International Airport",
        airport_country:"Texas",
        airport_code:"DFW",
        terminals:14
    }
  ]
  
console.log(airport_data)

const MainContent=()=>{


    const onPressAddNew=()=>{}

    return(
    <View>
        <View width="1280px" justifyContent="center" alignItems="center" marginTop="0px">
            <Flex justifyContent="space-between" alignItems="center">
                <Heading level={2}>Airports</Heading>
                    <Button variant="secondary" onPress={onPressAddNew} className="add-btn">
                        <FaPlus/>
                        <Text >Add</Text>
                    </Button>
            </Flex>
        </View>
        <View>
            

        
            <AirportTable/>



        </View>
    </View>
    
)
}

export default MainContent