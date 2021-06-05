import { Member as IMember } from '@types'
import React, { useEffect, useState } from 'react'
import { memberRead } from '../api'
import { Container, HeaderWrapper, Title } from 'styles/global'

interface Props {

}

const Member = (props: Props) => {

    const [memberList, setMemberList] = useState<IMember[]>([])
    const [searchList, setSearchList] = useState<IMember[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getMembers()
    }, [])

    const onSearch = (text: string) => {
        setSearchList(memberList.filter(member => (
            member.id.includes(text)
            || member.nickname.includes(text)
            || member.selfIntroduction.includes(text)
        )))
    }

    // api
    const getMembers = () => {
        const init = async () => {
            setLoading(true)
            const { data: { result, data, error, errdesc } } = await memberRead()
            setLoading(false)
            if (result === "failed" || data === undefined)
                return alert(`${error} ${errdesc}`)

            setMemberList(data)
            setSearchList(data)
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
            <input type="text" onChange={(e) => onSearch(e.target.value)} name="search" placeholder="id, nickname, selfIntroduction" />

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
                                searchList.map(v => (
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
