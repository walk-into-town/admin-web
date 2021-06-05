import { useHistory } from "react-router";
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
        </Container>
    )
}

export default Home
