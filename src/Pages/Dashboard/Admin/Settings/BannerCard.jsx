import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { imageUrl } from "../../../../Components/Shared/imageUrl";
import { api } from "../../../../Components/axios/axios.instance";
import toast from "react-hot-toast";

export function BannerCard({ banner, refetch }) {
    const deleteBanner = async () => {
        try {
            const res = await api.delete(`/upload/${banner._id}`);
            const response = await api.put(`/users/remove-banner`, banner);
            toast.success(res?.data?.message);
            refetch();
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    }
    return (
        <Card className="mt-6 w-full">
            <img
                src={imageUrl(banner?.path)}
                className="w-full"
                alt="card-image"
            />
            <CardFooter className="pt-4 px-3 pb-3">
                <button onClick={deleteBanner} className="btn btn-error text-white btn-sm">Delete</button>
            </CardFooter>
        </Card>
    );
}