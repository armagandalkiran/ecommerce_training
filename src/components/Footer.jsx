import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin:20px 0px;
`
const SocialContainer = styled.div`
    display:flex;
    align-items:center;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px
`

const Right = styled.div`
    flex:1;
    padding: 20px;

`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const ContactIcon = styled.div`
    margin-right:10px;
`

const Payment = styled.img`
    width:50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>YORUSHOP.</Logo>
                <Desc>There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some There are 
                many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <ContactIcon>
                        <Room/>
                    </ContactIcon>
                    622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <ContactIcon>
                        <Phone/>
                    </ContactIcon>    
                    +90 550 255 23 93
                </ContactItem>
                <ContactItem>
                    <ContactIcon>
                        <MailOutline/>
                    </ContactIcon>    
                    info@yorusoft.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
