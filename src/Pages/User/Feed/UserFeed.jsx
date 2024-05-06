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
            <Slider />
            {
                user?.status === "active" ?
                    <>
                        <div className="lg:grid grid-cols-2 gap-x-10 gap-y-5 mt-10">
                            <CardSingleButton
                                className="row-span-1"
                                title={"May I Help You"}
                                button={"Get Link"}
                                link={settings.helpyou_link}
                            />
                            <SupportTeamCard className="row-span-2 text-black"
                                settings={settings} />
                            <CardSingleButton
                                className="row-span-1 "
                                title={"Dynamic Skillbase Support Meeting"}
                                button={"Get Meeting Link"}
                                link={settings.support_link}
                            />
                        </div>
                        <div className="flex justify-center mt-10">
                            <NormalCard className={"max-w-[450px] w-full border text-black"}>
                                <CardBody>
                                    <h1 className='text-center text-xl font-semibold'>
                                        Join Live Learning Training Classes BD Time : ( 8am to 10pm)
                                    </h1>
                                    <h2 className='text-center mt-3 text-lg'>Wellcome Class</h2>
                                    <div className='flex justify-center pt-5'>
                                        {
                                            wellcomeCLass.meetingId ?
                                                <a className="btn btn-primary"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href={wellcomeCLass.meetingId}>Join Class</a>
                                                :
                                                <button className="btn">Join Class</button>
                                        }
                                    </div>
                                </CardBody>
                            </NormalCard>
                        </div>
                        <div className="grid grid-cols-2 mt-10 gap-5">
                            {
                                courses?.filter(course => course?._id !== "66092db02726bc7bb3f9588c")?.map((item, index) => (
                                    <JoinClass
                                        key={index}
                                        className={"max-w-[450px] w-full border text-black"}
                                        title={item.title}
                                        link={item.meetingId}
                                        button={"Join Class"}
                                    />
                                ))
                            }
                        </div>
                    </>
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

const dummyClass = [
    {
        title: "Sahih Holy Quran",
        link: "https://youtube.com"
    },
    {
        title: "Photo Editing",
        link: "https://youtube.com"
    },
    {
        title: "Video Editing",
        link: "https://youtube.com"
    },
    {
        title: "Lead Generation",
        link: "https://youtube.com"
    },
    {
        title: "Digital Marketing",
        link: "https://youtube.com"
    },
    {
        title: "Graphic Design",
        link: "https://youtube.com"
    },
    {
        title: "People Management",
        link: "https://youtube.com"
    },
    {
        title: "Facebook Marketing",
        link: "https://youtube.com"
    },
]
