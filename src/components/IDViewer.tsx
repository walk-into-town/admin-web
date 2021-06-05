import React, { useState } from 'react'
import { Card } from 'styles/global'
import Modal from './Modal'

interface Props {
    id: string
}

const IDViewer = (props: Props) => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <button onClick={() => setVisible(true)}>
                보기
            </button>
            <Modal useVisible={[visible, setVisible]}>
                <Card>{props.id}</Card>
            </Modal>
        </>
    )
}

export default IDViewer
