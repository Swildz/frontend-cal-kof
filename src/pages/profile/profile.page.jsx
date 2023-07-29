import { useParams } from "react-router-dom";

const Profile = () => {
    const { userId } = useParams();
    return (
        <div>
            <div style={{ padding: '30px' }}>
                <h2>
                    Welcome, {userId}
                </h2>
            </div>
        </div>
    )
}

export default Profile;