import Modal from 'components/Modal'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container, HeaderWrapper, Title } from 'styles/global'
import { mosterRead } from '../api'


const Monster = () => {

    const [monsterList, setMonsterList] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [selectedImg, setSelectedImg] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        getMoster()
    }, [])

    // api
    const getMoster = () => {
        const init = async () => {
            setLoading(true)
            const { data: { result, data, error, errdesc } } = await mosterRead()
            setLoading(false)
            if (result === "failed" || data === undefined)
                return alert(`${error} ${errdesc}`)

            setMonsterList(data[0].imgs)
        }
        init()
    }

    // usecase
    const onImg = (url: string) => {
        setSelectedImg(url)
        setModalVisible(true)
    }

    return (
        <Container>
            <HeaderWrapper>
                <Title>몬스터</Title>
                <SubTitle>총 {monsterList.length}개의 이미지</SubTitle>
                <button onClick={() => getMoster()}>새로고침</button>
            </HeaderWrapper>

            {
                loading ?
                    <p>로딩중</p>
                    :
                    <div>
                        {
                            monsterList.map((v, idx) => (
                                <img
                                    src={v}
                                    key={idx}
                                    width="50" height="50"
                                    style={{ cursor: "pointer" }}
                                    alt="moster img"
                                    onClick={() => onImg(v)}
                                />
                            ))
                        }
                    </div>
            }
            <Modal useVisible={[modalVisible, setModalVisible]}>
                <img
                    src={selectedImg}
                    width="150" height="150"
                    alt="modal img"
                />
            </Modal>
        </Container >
    )
}
const SubTitle = styled.p`
    margin-left: 10px;
    align-self: flex-end;
`

export default Monster
