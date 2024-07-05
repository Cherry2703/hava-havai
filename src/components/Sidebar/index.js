import { View ,Flex,Text,Image,Heading,Content} from "@adobe/react-spectrum"

const Sidebar=()=>(
    <View paddingLeft="20px" marginTop="0px">
        <View > 
            <Flex justifyContent="start" alignItems="center" width="80px">
                <Image src="https://res.cloudinary.com/ramcharan/image/upload/v1720114762/hava%20havai/home-icon_bu8b7q.png" height="23px" width="23px" marginEnd="10px"/>
                <Text>Home</Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" width="130px" marginTop="10px">
                <Image src="https://res.cloudinary.com/ramcharan/image/upload/v1720114762/hava%20havai/dashboard-icon_tottd7.png"  height="23px" width="23px"  marginEnd="10px"/>
                <Text>Dashboard</Text>
            </Flex>
        </View>
        <View>
            <Heading level={4}>Services</Heading>
            <View backgroundColor="gray-900"><Content >Airports</Content></View>
            <Content marginTop="2px">Videos</Content>
        </View>
        <View>
            <Heading level={4}>Others</Heading>
            <Content>List 1</Content>
            <Content>List 2</Content>
            <Content>List 3</Content>
        </View>
    </View>
)

export default Sidebar