import { Report } from '@types'
import React, { useEffect, useState } from 'react'
import { reportConfirm, reportRead } from '../api'
import { Card, Container, HeaderWrapper, SubTitle, Title } from 'styles/global'
import { toCommonDateTime } from '../util'
import IDViewer from 'components/IDViewer'
import Modal from 'components/Modal'
import styled from 'styled-components'


const Comment = () => {
    const [reportList, setReportList] = useState<Report[]>([])
    const [searchList, setSearchList] = useState<Report[]>([])
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [report, setReport] = useState<Report>()
    const [hour, setHour] = useState(24)

    useEffect(() => {
        getReports()
    }, [])

    // api
    const getReports = () => {
        const init = async () => {
            setLoading(true)
            const { data: { result, data, error, errdesc } } = await reportRead()
            setLoading(false)
            if (result === "failed" || data === undefined)
                return alert(`${error} ${errdesc}`)

            setReportList(data)
            setSearchList(data)
        }
        init()
    }
    const onReport = () => {
        const init = async () => {
            if (report === undefined) return;
            const time = (hour * 3600 * 1000).toString();
            const { data: { result, data, error, errdesc } } = await reportConfirm({ reid: report.id, targetUser: report.targetUser, time })
            if (result === "failed" || data === undefined)
                return alert(`${error} ${errdesc}`)

            alert(data)
            setModalVisible(false)
        }
        init()
    }

    //useCase
    const onSearch = (text: string) => {
        setSearchList(reportList.filter(v => (
            v.id === text
            || v.description.includes(text)
        )))
    }

    const openModal = (v: Report) => {
        setModalVisible(true)
        setReport(v)
        setHour(24)
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const num = parseInt(e.target.value);
        setHour(isNaN(num) ? 0 : num);
    }

    return (
        <Container>
            <HeaderWrapper>
                <Title>?????? ??????</Title>
                <button onClick={getReports}>????????????</button>
            </HeaderWrapper>

            <label htmlFor="search">?????? <span style={{ fontSize: 13, marginLeft: 4 }}>* ID??? ?????? ??????</span></label>
            <input
                type="text"
                name="search"
                onChange={(e) => onSearch(e.target.value)}
                placeholder="ID, description"
            />

            {
                loading ?
                    <p>?????????</p>
                    :
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Type</th>
                                <th>Processed</th>
                                <th>?????? ID</th>
                                <th>Target ID</th>
                                <th>Target UID</th>
                                <th>User ID</th>
                                <th>Description</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchList.map(v => (
                                    <tr key={v.id} >
                                        <td>
                                            <button disabled={v.processed} onClick={() => openModal(v)} >
                                                ????????????
                                            </button>
                                        </td>
                                        <td>{v.type}</td>
                                        <td>{v.processed ? "true" : "false"}</td>
                                        <td><IDViewer id={v.id} /></td>
                                        <td><IDViewer id={v.id} /></td>
                                        <td>{v.targetUser}</td>
                                        <td>{v.userId}</td>
                                        <td>{v.description}</td>
                                        <td>{toCommonDateTime(v.date)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
            <Modal useVisible={[modalVisible, setModalVisible]}>
                <Card>
                    <SubTitle>?????? ??????</SubTitle>

                    <InputWrapper>
                        <input value={hour} onChange={onChange} name="time" />
                        <label htmlFor="time">* ?????? ????????? ?????? ?????? ????????? ???????????????.</label>
                        <p>{Math.floor(hour / 24)} ???</p>
                    </InputWrapper>
                    <SumbitButton onClick={onReport}>??????</SumbitButton>
                </Card>
            </Modal>
        </Container>
    )
}

const InputWrapper = styled.div`
    text-align: start;
    margin-top: 1rem;
    & > input {
        margin-bottom: 4px;
        text-align: center;
    }
    & > p {
        text-align: center;
        margin: 1rem;
    }
`

const SumbitButton = styled.button`
    margin-top: 1rem;
    width: 100%;
    height: 42px;
    font-size: 15px;
    font-weight: bold;
`

export default Comment
