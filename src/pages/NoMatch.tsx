import { useLocation } from "react-router";
import { Container, HeaderWrapper } from "styles/global";

interface Props {

}

const NoMatch = (props: Props) => {
    const location = useLocation();
    return (
        <Container>
            <HeaderWrapper>
                No match for <code>{location.pathname}</code>
            </HeaderWrapper>
        </Container>
    )
}

export default NoMatch
