import { Link } from "react-router-dom"
import styled from "styled-components"

interface Props {

}

const Header = (props: Props) => {
    return <Container>
        <Title>
            💻 Happy Hacking
        </Title>
        <Link to="/"> Home </Link>
        <Link to="/BlaBla"> BlaBla </Link>
    </Container>
}
const Container = styled.div`
    text-align: center;
`
const Title = styled.p`
    font-size: 50px;
    font-weight: bold;
`

export default Header
