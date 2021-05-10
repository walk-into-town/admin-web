import { useHistory } from "react-router";

interface Props {

}

const Home = (props: Props) => {

    const history = useHistory();

    return (
        <div style={{ textAlign: "center" }}>
            <h3>
                Home
            </h3>
            <button onClick={() => history.push("/somewhere")}>move to somewhere</button>
        </div>
    )
}

export default Home
