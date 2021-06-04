import React from 'react'
import { Container, HeaderWrapper, Title } from 'styles/global'

interface Props {

}

const Comment = (props: Props) => {
    return (
        <Container>
            <HeaderWrapper>
                <Title>댓글 신고</Title>
                <button onClick={() => { }}>새로고침</button>
            </HeaderWrapper>
        </Container>
    )
}

export default Comment
