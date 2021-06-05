import { PinPoint as IPinPoint } from '@types'
import React, { useEffect, useState } from 'react'
import { pinpointRead } from '../api'
import { Container, HeaderWrapper, Title } from 'styles/global'
import { toCommonDateTime } from '../util'
import IDViewer from 'components/IDViewer'
import ImgsViewer from 'components/ImgsViewer'


const Pinpoint = () => {
    const [pinpointList, setPinpointList] = useState<IPinPoint[]>([])
    const [searchList, setSearchList] = useState<IPinPoint[]>([])
    const [loading, setLoading] = useState(false)

    const onSearch = (text: string) => {
        setSearchList(pinpointList.filter(v => (
            v.name.includes(text)
            || v.id === text
            || v.description.includes(text)
        )))
    }

    useEffect(() => {
        getPinpoint()
    }, [])

    // api
    const getPinpoint = () => {
        const init = async () => {
            setLoading(true)
            const { data: { result, data, error, errdesc } } = await pinpointRead()
            setLoading(false)
            if (result === "failed" || data === undefined)
                return alert(`${error} ${errdesc}`)

            setPinpointList(data)
            setSearchList(data)
        }
        init()
    }


    return (
        <Container>
            <HeaderWrapper>
                <Title>핀포인트</Title>
                <button onClick={() => getPinpoint()}>새로고침</button>
            </HeaderWrapper>


            <label htmlFor="search">검색 <span style={{ fontSize: 13, marginLeft: 4 }}>* id는 완전 일치</span></label>
            <input
                type="text"
                name="search"
                onChange={(e) => onSearch(e.target.value)}
                placeholder="name, id, description"
            />

            {
                loading ?
                    <p>로딩중</p>
                    :
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Imgs</th>
                                <th>Description</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>UpdateTime</th>
                                <th>퀴즈</th>
                                <th>댓글</th>
                                <th>쿠폰</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchList.map(v => (
                                    <tr key={v.id}>
                                        <td>{v.name}</td>
                                        <td><IDViewer id={v.id} /></td>
                                        <td><ImgsViewer imgs={v.imgs} /></td>
                                        <td>{v.description}</td>
                                        <td>{v.latitude}</td>
                                        <td>{v.longitude}</td>
                                        <td>{toCommonDateTime(v.updateTime)}</td>
                                        <td><button onClick={() => console.log(v.quiz)}>보기</button></td>
                                        <td>{v.comments.length}</td>
                                        <td>{v.coupons.length}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </Container>
    )
}

export default Pinpoint
