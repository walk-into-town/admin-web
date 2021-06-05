import { useHistory } from "react-router";
import styled from "styled-components";
import { Container, HeaderWrapper, Title } from "styles/global";

interface Props {

}

const Home = (props: Props) => {

    const history = useHistory();

    return (
        <Container>
            <HeaderWrapper>
                <Title>홈</Title>
                <button onClick={() => history.push("/somewhere")}>어디로든지 문</button>
            </HeaderWrapper>

            <p>관리자님 환영합니다 👐🏻</p>

            <Link>
                <a href="https://documenter.getpostman.com/view/15818541/TzXxmJRD#intro">
                    Postman 주소
                </a>
            </Link>

        </Container>
    )
}

const Link = styled.div`
    margin-top: 1rem;
    & > a {
        color: black;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`

export default Home
