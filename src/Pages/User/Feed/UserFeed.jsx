import React, { useEffect, useState } from 'react';
import Slider from './Components/Slider';
import { CardSingleButton } from './Components/CardSingleButton';
import { SupportTeamCard } from './Components/SupportTeamCard';
import { NormalCard } from '../../../Components/Card/Cards';
import { Button, Card, CardBody } from '@material-tailwind/react';
import { JoinClass } from './Components/JoinClass';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../../Components/axios/axios.instance';
import Loader from '../../../Components/Shared/Loader';
import Notice from '../Notification/Notice';

const UserFeed = () => {
    const { settings, user } = useSelector(state => state.user)
    const { data: courses, isLoading, refetch } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const response = await api.get("/courses");
            return response.data;
        }
    })
    const [wellcomeCLass, setWellcomeCLass] = React.useState({})
    useEffect(() => {
        if (courses) {
            setWellcomeCLass(courses.find(course => course?._id === "66092db02726bc7bb3f9588c"))
        }
    }, [courses])
    const [counselor, setCounselor] = useState(null)
    useEffect(() => {
        if (user?.settings?.consultant) {
            api.get('/users/' + user?.settings?.consultant).then(res => {
                setCounselor(res.data)
            })
        }
    }, [user])

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='lg:p-10 p-5'>
            <h1 className='text-3xl text-center font-semibold'>WELCOME TO Dynamic Skillbase</h1>
            <Notice />
            <Slider />
            {
                user?.status === "active" ?
                    <div className='mt-10'>
                        <SupportTeamCard className="row-span-2 text-black"
                            settings={settings} />
                    </div>
                    :
                    <Card className='py-10 flex items-center flex-col'>
                        <p className='text-center text-xl'>Your Account is Inactive Please Contact With Your Counselor</p>
                        <button className='btn btn-primary mt-5'>
                            <a href={`https://wa.me/${counselor?.whatsapp}`} target="_blank" rel="noreferrer">Whatsapp</a>
                        </button>
                    </Card>
            }
        </div>
    );
};

export default UserFeed;
