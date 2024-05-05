import React, { useEffect, useState } from "react";
import {
    Card,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../Components/Brand/Logo";
import { logOutUser, refreshUser } from "../../../redux/features/user/userSlice";
import { imageUrl } from "../../../Components/Shared/imageUrl";
import { api, apiUpload } from "../../../Components/axios/axios.instance";
import toast from "react-hot-toast";

export function UserSidebar({ setShow }) {
    const path = useLocation();
    const dispatch = useDispatch();
    const { user, wallet } = useSelector((state) => state.user);
    const [publicImage, setPublicImage] = useState("");
    const [image, setImage] = useState(null);
    const [inactiveUser, setInactiveUser] = useState(false);
    useEffect(() => {
        try {
            if (image) {
                const url = URL.createObjectURL(image)
                setPublicImage(url)
            }
        } catch (error) {
            console.error(error);
        }
    }, [image]);
    useEffect(() => {
        if (user?.status === "active" && user?.role === "user") {
            setInactiveUser(false)
        }
        else {
            setInactiveUser(true)
        }
    }, [user])
    const updateProfile = async () => {
        try {
            const formData = new FormData();
            formData.append("image", image);
            const response = await apiUpload.post('/upload', formData);
            const res = await api.put(`/users/update/${user._id}`, { image: response.data.path, user: user._id });
            toast.success(res?.data?.message);
            dispatch(refreshUser(res?.data));
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong");
            console.log(error);
        }
    }
    const deviceType = window.innerWidth <= 768 ? "mobile" : "desktop";
    if (!user) {
        return <Loader />
    }
    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] min-w-[16rem] p-4 shadow-xl bg-black text-white">
            <div className="mb-2 flex items-center gap-4 p-4 justify-center">
                <Logo link={"/user"} />
            </div>
            <div className='w-[100px] h-[100px] rounded-full overflow-hidden  border border-primary mx-auto profile-pic'
                style={{
                    backgroundImage: `url('${publicImage ? publicImage : imageUrl(user.image)}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <label htmlFor='profile' className="overlay">
                    <button>
                        <img src="/images/icons/camera.png" alt="" />
                    </button>
                    <p>Change</p>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        id='profile' type="file" className='hidden'
                        accept="image/*"
                    />
                </label>

            </div>
            {
                image && <button onClick={updateProfile} className='btn btn-primary rounded-none text-white btn-sm mx-auto mt-2'>Change Image</button>
            }
            <h1 className='text-center mt-3 text-base uppercase font-semibold'>
                {user.firstName + " " + user.lastName}
            </h1>
            <h2 className='mt-2 text-sm text-center'>Balance : {user.balance}</h2>
            <div className='w-full flex flex-col gap-y-1 mt-10'>
                {
                    !inactiveUser ?

                        links.map((link, index) => (
                            <Link onClick={() => {
                                if (deviceType === "mobile") {
                                    setShow(false)

                                }
                            }} key={index} to={link.path} className={`w-full px-5 py-2 hover:bg-primary hover:text-white   ${path.pathname === link.path ? "bg-primary text-white font-normal" : ""}`}>
                                {link.name}
                            </Link>
                        ))
                        :
                        links2.map((link, index) => (
                            <Link onClick={() => {
                                if (deviceType === "mobile") {
                                    setShow(false)

                                }
                            }} key={index} to={link.path} className={`w-full px-5 py-2 hover:bg-primary hover:text-white   ${path.pathname === link.path ? "bg-primary text-white font-normal" : ""}`}>
                                {link.name}
                            </Link>
                        ))
                }
                <button
                    onClick={() => dispatch(logOutUser())}
                    className='btn btn-error rounded-none text-white btn-sm mt-10'> Logout
                </button>
            </div>
        </Card>
    );
}


const links = [
    {
        name: "Profile",
        path: "profile"
    },
    {
        name: "Passbook",
        path: "passbook"
    },
    {
        name: "Withdrawal",
        path: "withdraw"
    },
    {
        name: "Reference History",
        path: "ref-history"
    },
    {
        name: "Courses",
        path: "courses"
    },
    {
        name: "Change Password",
        path: "password"
    }

]
const links2 = [
    {
        name: "Profile",
        path: "profile"
    },
    {
        name: "Change Password",
        path: "password"
    }

]