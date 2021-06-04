import React from 'react'

interface Props {
    useVisible: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    children: JSX.Element
}

const Modal = (props: Props) => {
    const [isVisible, setIsVisible] = props.useVisible

    if (!isVisible)
        return <></>

    return (
        <div className="modal" onClick={() => setIsVisible(false)}>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Modal
