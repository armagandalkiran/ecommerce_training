import styled from "styled-components";
import {popularProducts} from "../data";
import Product from "../components/Product";

const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(350px, 1fr)); 
    ${'' /* repeat arastir ! */}
`

const Products = () => {
    return (
        <Container>
            {console.log(popularProducts)}
            {popularProducts.map(item=>(
                <Product item={item} key={item.id}/> 
            ))}
        </Container>
    )
}

export default Products;
