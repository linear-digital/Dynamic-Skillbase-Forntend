import React, { useState } from 'react';
import CourseCard from '../../../../Components/Card/CourseCard';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../../../Components/axios/axios.instance';
import Loader from '../../../../Components/Shared/Loader';
import { Button } from '@material-tailwind/react';
import { BlankDialog } from '../../../../Components/Dialog/BlankDialog';
import CourseForm from './_COMP/CourseForm';

const Courses_Admin = () => {
    const { data: courses, isLoading, refetch } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const response = await api.get("/courses");
            return response.data;
        }
    })
    const [open, setOpen] = useState(false);
    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='p-5'>
            <h1 className='lg:text-2xl text-xl font-semibold'>Couses Management</h1>
            <Button onClick={() => setOpen(true)} className='mt-3'>
                Add New Course
            </Button>
            <div className="flex-wrap gap-4 flex mt-10">
                {
                    courses?.filter(course => course?._id !== "66092db02726bc7bb3f9588c")?.map(course => <CourseCard key={course._id} course={course} user="admin" refetch={refetch} />)
                }
            </div>

            <BlankDialog open={open} setOpen={setOpen} >
                <CourseForm refetch={refetch} setOpen={setOpen} />
            </BlankDialog>
        </div>
    );
};

export default Courses_Admin;