import { useEffect, useState } from 'react';
import './Userlist.css'
import { useNavigate } from 'react-router-dom';
import UserDetailPage from './Userdetail';

interface user {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

const Userlist: React.FC = () => {
    const [users, setUser] = useState<user[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleUserClick = (userId: number) => {
        navigate(`/user/${userId}`);
    };

    useEffect(() => {
        fetcUsers();
    }, []);

    const fetcUsers = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            if(!response.ok) {
                throw new Error('Fail to fetch user');
            }

            const data = await response.json();
            setUser(data);
            console.log(users)
            }catch(err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
        }
    };
    

    return (
        <>
            {/* <div className="card-user">
                <p>Name : Copter</p>
                <p>Username : Satayu Ainchaima</p>
                <p>Email : copter@gmail.com</p>
                <p>Phone Number : 123456789</p>
                <p>Websiste : satayu.com</p>
            </div> */}

            {users.map((users, index) => (
                <div className='card-users'>
                    <p>NO : {index+1}</p>
                    <p>Name : {users.name}</p>
                    <p>Username : {users.username}</p>
                    <p>Email : {users.email}</p>
                    <p>Phone Number : {users.phone}</p>
                    <p>Websiste : {users.website}</p>

                    <button 
                        className='btn-detail'
                        onClick={() => handleUserClick(users.id)}>
                        Vive Details
                    </button>

                </div> 
            ))}
        </>
    )
    
};

export default Userlist;