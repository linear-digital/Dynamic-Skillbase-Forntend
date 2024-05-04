import React, { useEffect, useState } from 'react';
import { api, apiUpload } from '../../../../Components/axios/axios.instance';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../../Components/Shared/Loader';
import { BannerCard } from './BannerCard';

const Banners = () => {
    const [image, setImage] = useState(null);
    const [publicImage, setPublicImage] = useState("");
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["banners"],
        queryFn: async () => {
            const response = await api.get("/users/setting/3434");
            return response.data;
        }
    })
    useEffect(() => {
        try {
            if (image) {
                const url = URL.createObjectURL(image)
                setPublicImage(url)
            }
        } catch (error) {
            console.error(error);
        }
    }, [image])
    const uploadImage = async () => {
        try {
            const formData = new FormData();
            formData.append("image", image);
            const response = await apiUpload.post('/upload', formData);
            if (response.data) {
                setImage(null);
                setPublicImage("");
                const res = await api.put(`/users/add-banner`, response.data);
                toast.success(res?.data?.message);
                refetch();
            }
        } catch (error) {
            console.error(error);
        }
    }
    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="w-full p-5">
            <div className="grid grid-cols-2 gap-2 mb-5">
               {
                   data?.banners?.map((banner, index) => <BannerCard key={index} banner={banner} refetch={refetch} />)
               }
            </div>
            {
                publicImage && <img src={publicImage} className='mx-auto mb-5 rounded border border-cyan-300 max-w-96' alt="" />
            }
            {
                !image ?
                    <div className="extraOutline p-4 bg-white w-max bg-whtie mx-auto rounded-lg">
                        <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg max-w-[400px] w-full min-w-[300px]">
                            <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                            <div className="input_field flex flex-col w-max mx-auto text-center">
                                <label>
                                    <input className="text-sm cursor-pointer w-36 hidden" type="file"
                                        accept='image/*'
                                        onChange={(e) => {
                                            setImage(e.target.files[0]);
                                        }}
                                    />
                                    <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
                                </label>
                                <div className="title text-indigo-500 uppercase">or drop files here</div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex gap-5 justify-center items-center'>
                        <button onClick={uploadImage} className="btn btn-primary px-6">Upload Banner</button>
                        <button onClick={() => {
                            setImage(null)
                            setPublicImage("")
                        }} className="btn btn-error px-6 text-white">
                            Clear
                        </button>
                    </div>
            }
        </div>

    );
};

export default Banners;

