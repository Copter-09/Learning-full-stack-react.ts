import { useEffect, useState } from 'react';
import './Userlist.css'
import { useNavigate, useParams } from 'react-router-dom';

interface UserDetail {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

const Userlist: React.FC = () => {
    const { id } = useParams<{id:string} >();
    const [user, setUser] = useState<UserDetail | null>(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleUserClick = (userId: number) => {
        navigate(`/users/${userId}`); 
    };

    useEffect(() => {
        fetcUsersDetail();
    }, [id]);

    const fetcUsersDetail = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

            if(!response.ok) {
                throw new Error('Fail to fetch user');
            }

            const data = await response.json();
            setUser(data);
            console.log(user)
            }catch(err) {
                setError(err instanceof Error ? err.message : 'An error occurred');

        }finally{
            setLoading(false)
        }
    };
    
    if (loading) return <div>Loading users...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return null;
    return (
        <div className="userlist-container">
            <div className="card-user">
                <p>NO : {user.id}</p>
                <p>Name : {user.name}</p>
                <p>Username : {user.username}</p>
                <p>Email : {user.email}</p>
                <p>Phone Number : {user.phone}</p>
                <p>Websiste : {user.website}</p>
            </div>

        </div>
    );
};

export default Userlist;