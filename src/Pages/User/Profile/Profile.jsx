import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Loader from '../../../Components/Shared/Loader';
import toast from 'react-hot-toast';
import { whatsappLink } from '../../../helper/linkgenerateor';
import { getRolename } from '../../Dashboard/Admin/Components/UserProfileDialog';
import { imageUrl } from '../../../Components/Shared/imageUrl';
const Profile = ({ data }) => {
    const [user, setUser] = useState({});
    const { user: currentUser, noData } = useSelector((state) => state.user);
    const [referLink, setReferLink] = useState("");
    useEffect(() => {
        setReferLink(window.location.origin + "/signup?refer=" + user.userId);

    }, [user])
    useEffect(() => {
        if (data) {
            setUser(data)
        }
        else {
            setUser(currentUser)
        }
    }, [currentUser, data])
    if (noData) {
        return <Loader />
    }
    return (
        <main>
            <div className={`${!data && "p-5 "} w-full overflow-hidden`}>
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-2xl leading-6 font-medium text-gray-900">
                        User Profile
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Details and informations about user.
                    </p>
                </div>
                <div className="border-t border-gray-200">
                    <div className="flex items-start h-screen w-full justify-start">
                        <div className="max-w-md w-full">
                            <div className="bg-white shadow-xl rounded-lg py-3">
                                <div className="photo-wrapper p-2">
                                    <img class="w-32 h-32 rounded-full border border-primary mx-auto" src={imageUrl(user?.image)}
                                        alt={user?.firstName}
                                    />
                                </div>
                                <div className="p-2">
                                    <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{user.firstName + " " + user.lastName}</h3>
                                    <div className="text-center text-cyan-700 text-sm font-semibold">
                                        <p>{getRolename(user?.role)}</p>
                                    </div>
                                    <table className="text-xs my-3">
                                        <tbody><tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                            <td className="px-2 py-2">
                                                {user?.email}
                                            </td>
                                        </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                <td className="px-2 py-2">{user?.phone}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">UserId</td>
                                                <td className="px-2 py-2">{user?.userId}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Whatsapp</td>
                                                <td className="px-2 py-2">{user?.whatsapp}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Country</td>
                                                <td className="px-2 py-2">{user?.country}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Reference</td>
                                                <td className="px-2 py-2">{user?.reference}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Group leader</td>
                                                <td className="px-2 py-2">{user?.settings?.gl}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Trainer</td>
                                                <td className="px-2 py-2">{user?.settings?.trainer}</td>
                                            </tr>
                                            {
                                                user?.status === "active" && user?.role === "user" && !data &&
                                                <tr>
                                                    <td className="px-2 py-2 text-gray-500 font-semibold">
                                                        Refer Link</td>
                                                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center gap-3">
                                                        <button onClick={() => whatsappLink(referLink)} className='btn btn-sm btn-secondary'>
                                                            <FontAwesomeIcon className='ml-2 text-sm' icon={faShare} />
                                                            Share
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                navigator.clipboard.writeText(referLink)
                                                                toast.success("Refer Link Copied!")
                                                            }
                                                            }
                                                            className='btn btn-sm btn-secondary'>
                                                            Copy
                                                        </button>
                                                    </div>
                                                </tr>
                                            }

                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    );
};

export default Profile;


