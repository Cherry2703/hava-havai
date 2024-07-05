import { Header,Flex,Avatar,Heading} from "@adobe/react-spectrum";
const Navbar=()=>(
    <Header >
        <Flex direction="row" justifyContent="space-between" alignItems="center">
            <Heading level={1} marginStart="30px">hava havai</Heading>
            <Avatar src="https://res.cloudinary.com/ramcharan/image/upload/v1720110992/hava%20havai/Avatar_-_Desktop_-_Light_hu1y1f.png" alt="profile" size={50}  marginEnd="30px"/>
        </Flex>
    </Header>
)
export default Navbar