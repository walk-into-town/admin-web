import { useLocation } from "react-router";

interface Props {
    
}

const NoMatch = (props: Props) => {
    const location = useLocation();
    return (
        <h3 style={{textAlign: "center"}}>
            No match for <code>{location.pathname}</code>
        </h3>
    )
}

export default NoMatch
