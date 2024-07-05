// import { useState } from "react";
import React from "react";

import { View,Heading,Content,Flex ,Image,FileTrigger,Button} from "@adobe/react-spectrum"

import "./index.css"

const Rest=()=>{

    let [value, setValue] = React.useState('Lost & Found');
    let [description,setDescription]=React.useState("type here")

    return(
    <View>
        <Heading level={3}>Services</Heading>
        <hr/>
        <Flex justifyContent="space-between" alignItems="center">
            <Flex justifyContent="space-around" alignItems="center" width="800px">
            <Flex gap="size-150" wrap direction="column">
                    {/* <TextField
                        label="Service Name"
                        defaultValue="Lost & Found"
                        value={value}
                        onChange={setValue} 
                        className="input"
                        /> */}
                        <label>Service Name</label>
                        <input type="text" placeholder="Lost & Found" value={value} onChange={setValue}/>
                </Flex>
            
                <div>
                    <Content>Category</Content>
                    <select className="select-option">
                        <option value="option-1">Option 1</option>
                        <option value="option-2">Option 2</option>
                        <option value="option-3">Option 3</option>
                    </select>
                </div>
                <div>
                    <Content>Sub-category</Content>
                    <select className="select-option">
                        <option value="option-1">Option 1</option>
                        <option value="option-2">Option 2</option>
                        <option value="option-3">Option 3</option>
                    </select>
                </div>

            

                <FileTrigger acceptedFileTypes={['image/png']}>
                    <Image src="https://res.cloudinary.com/ramcharan/image/upload/v1720167297/hava%20havai/Button_-_Desktop_-_Light_bwhcdr.png"/>
                </FileTrigger>
        
                <Flex>
                    <Image src="https://res.cloudinary.com/ramcharan/image/upload/v1720167525/hava%20havai/Switch_ogkvxo.png"/>
                    <Content>Show Image</Content>
                </Flex>
            </Flex>

            <Flex>
                <Button variant="primary" width="100px" height="30px" borderRadius="10px">Save</Button>
            </Flex>

        </Flex>
    
        <Flex gap="size-150" wrap direction="column" width="300px">
            {/* <TextField
                        label="Description"
                        defaultValue="type here"
                        value={description}
                        onChange={setDescription} 
                        /> */}
                <label htmlFor="description">Description</label>        
                <input type="text" placeholder={description} onChange={setDescription} id="description"/>
        </Flex>

        <div className="lounge-cont">

        <Content>Lounge</Content>
        <hr/>
        <Content>Money Exchange</Content>
        <hr/>
        </div>



    </View>
)}

export default Rest