import axios from "axios";
import { useEffect, useState } from "react";
import Search from '../../Components/Search/Search';
import Card from '../../Components/Card/Card';
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const API = "https://api.github.com/users/";

function Main() {

    const [text, setText] = useState("muhammadumair11");
    const [user, setUser] = useState("muhammadumair11");
    const [error, setError] = useState("")

    const navigate = useNavigate();
    const reduxState = useSelector(state => state.users)

    useEffect(() => {

        reduxState.users.filter((user) => {
            if (user.isLogin === true) {
                navigate('/main')
            }
            else {
                navigate('/')
            }
        })


        handleSearch();
        setText("");
    }, [])

    const handleSearch = () => {
        axios.get(`${API}${text}`)
            .then((resp) => {
                setUser(resp.data);
                setError("");
            })
            .catch((error) => {
                setError("No match");
            })
    }

    return (
        <Layout>
            <Search
                handleSearch={handleSearch}
                text={text}
                setText={setText}
                error={error}
            />
            <Card
                user={user}
            />
        </Layout>
    )
}

export default Main;



