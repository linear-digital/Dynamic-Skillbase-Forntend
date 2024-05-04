import React from 'react';
import CourseCard from '../../Components/Card/CourseCard';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Shared/Loader';
import { api } from '../../Components/axios/axios.instance';

const PopularCourses = () => {
    const { data: courses, isLoading, refetch } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const response = await api.get("/courses");
            return response.data;
        }
    })
    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className='py-14 lg:px-0 px-4 container mx-auto'>
            <h1 className='lg:text-5xl text-2xl leading-normal text-center text-white font-semibold'>POPULAR COURSES</h1>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
                {
                    courses?.filter(course => course?._id !== "66092db02726bc7bb3f9588c")?.map(course => <CourseCard key={course._id} course={course} refetch={refetch} />)
                }
            </div>
        </div>
    );
};

export default PopularCourses;