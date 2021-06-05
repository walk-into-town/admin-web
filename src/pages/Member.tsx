import { Member as IMember } from '@types'
import React, { useEffect, useState } from 'react'
import { memberRead } from '../api'
import { Container, HeaderWrapper, Title } from 'styles/global'
import IDViewer from 'components/IDViewer'
import ImgsViewer from 'components/ImgsViewer'

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

            console.log(data)
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
                                <th>ID</th>
                                <th>PW</th>
                                <th>사진</th>
                                <th>Nickname</th>
                                <th>SelfIntroduction</th>
                                <th>타입</th>
                                <th>댓글 수</th>
                                <th>캠페인 수</th>
                                <th>참여 진척</th>
                                <th>쿠폰 수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchList.map(v => (
                                    <tr key={v.id}>
                                        <td>{v.id}</td>
                                        <td><IDViewer id={v.pw} /></td>
                                        <td><ImgsViewer imgs={[v.profileImg]} /></td>
                                        <td>{v.nickname}</td>
                                        <td>{v.selfIntroduction}</td>
                                        <td>{v.isManager ? "관리자" : "유저"}</td>
                                        <td align="center">{v.comments.length}</td>
                                        <td align="center">{v.myCampaigns.length}</td>
                                        <td align="center">
                                            {v.playingCampaigns.filter(c => c.cleard).length}/{v.playingCampaigns.length}
                                        </td>
                                        <td align="center">
                                            {v.coupons.filter(c => !c.used).length}/{v.coupons.length}
                                        </td>
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
