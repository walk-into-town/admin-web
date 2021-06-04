import { Link } from "react-router-dom"
import styled from "styled-components"

const Navigation = () => {
    return <>
        <Container>
            <Title onClick={() => window.location.reload()}>
                걸어서 🌐 동네 속으로
            </Title>
            <LinkList>
                <Link to="/">홈</Link>
                <Link to="/Member">사용자</Link>
                <Link to="/Comment">댓글 신고</Link>
                <Link to="/Campaign">캠페인</Link>
                <Link to="/Pinpoint">핀포인트</Link>
                <Link to="/Coupon">쿠폰</Link>
                <Link to="/Monster">몬스터</Link>
            </LinkList>
        </Container>
        <Blank />
    </>
}
const Container = styled.div`
    position: fixed;
    min-width: 280px;
    min-height: 100vh;
    height: 100%;
    background-color: #F6F6F9;
`
const Blank = styled.div`
    min-width: 280px;
`

const Title = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin: 40px;
    cursor: pointer;
`
const LinkList = styled.div`
    display: flex;
    flex-direction: column;
    & > a {
        margin: 5px 40px;
        padding: 10px 0px;
        color: #000;
        text-decoration: none;
        cursor: pointer;
        font-size: 18px;
    }
    & > a:hover {
        font-weight: bold;
    }
`

export default Navigation
