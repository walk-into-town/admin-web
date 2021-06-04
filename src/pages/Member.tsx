import { Member as IMember } from '@types'
import React, { useEffect, useState } from 'react'
import { memberRead } from '../api'
import { Container, HeaderWrapper, Title } from 'styles/global'

interface Props {

}

const Member = (props: Props) => {

    const [memberList, setMemberList] = useState<IMember[]>([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getMembers()
    }, [])
    useEffect(() => {
        console.log(input)
    }, [input])

    // api
    const getMembers = () => {
        const init = async () => {
            setLoading(true)
            const { data: { result, data, error, errdesc } } = await memberRead()
            setLoading(false)
            if (result === "failed" || data === undefined)
                return alert(`${error} ${errdesc}`)

            setMemberList(data)
        }
        init()
    }


    return (
        <Container>
            <HeaderWrapper>
                <Title>사용자</Title>
                <button onClick={() => getMembers()}>새로고침</button>
            </HeaderWrapper>

            <label htmlFor="search">검색</label>
            <input type="text" onChange={(e) => setInput(e.target.value)} name="search" />

            {
                loading ?
                    <p>로딩중</p>
                    :
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>pw</th>
                                <th>nickname</th>
                                <th>selfIntroduction</th>
                                <th>isManager</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                memberList.map(v => (
                                    <tr key={v.id}>
                                        <td>{v.id}</td>
                                        <td>{v.pw}</td>
                                        <td>{v.nickname}</td>
                                        <td>{v.selfIntroduction}</td>
                                        <td>{v.isManager}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </Container>
    )
}

export default Member
