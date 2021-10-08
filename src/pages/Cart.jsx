import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`

`

const Wrapper = styled.div`
    padding:20px;
`

const Title = styled.h1`
    fon-weight:300;
    text-align:center;
`

const Top = styled.div`
    padding:20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor:pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};

`
const TopTexts = styled.div`
    padding: 10px;
    font-weight: 600;
`
const TopText = styled.span`
    text-decoration:underline;
    font-weight: 600;
    margin: 0px 10px;
    cursor:pointer;
`

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex:3;
`

const Product = styled.div`
    display:flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`
const Image = styled.img`
    width:200px;
`
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span`
    
`
const PriceDetail = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display:flex;
    align-items: center;
    margin-bottom:20px;
`
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
`
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;
`

const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height:1px;
    margin:20px 0;
`

const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height: 50vh;

`
const SummaryTitle = styled.h1`
    font-weight:200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
    flex:1;
`
const SummaryItemPrice = styled.span`
    flex:1;
`
const Button = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
`


const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://cdn.beymen.com/mnresize/370/515/productimages/z3yanm5r.nhe_IMG_25_2110082885094.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b>Yorusoft Hoodie</ProductName>
                                <ProductId><b>ID:</b>1231312312</ProductId>
                                <ProductColor color="black"></ProductColor>
                                <ProductSize><b>Size:</b>xs</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 50</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart;
