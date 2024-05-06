import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function SupportTeamCard({ className, settings }) {
    return (
        <Card className={`${className} w-full border rounded`}>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                    Dynamic Skillbase Support Team
                </Typography>
            </CardBody>
            <CardFooter>
                <div className=" flex justify-between items-center">
                    <Typography className="text-base font-semibold">
                        My Group Leader
                    </Typography>
                    <Button
                        variant="filled"
                        className="bg-primary"
                    >
                        Start Soon
                    </Button>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <Typography className="text-base font-semibold">
                        My Trainer
                    </Typography>
                    <Button
                        variant="filled"
                        className="bg-primary"
                    >
                        Start Soon
                    </Button>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <Typography className="text-base font-semibold">
                        Support WhatsApp Group
                    </Typography>
                    {
                        settings?.whatsapp === "" ? (
                            <Button
                                className="bg-primary"
                                variant="filled"
                            >
                                Join
                            </Button>
                        )
                            :
                            (
                                <a href={settings?.whatsapp} target="_blank" rel="noreferrer">
                                    <Button
                                        className="bg-primary"
                                        variant="filled"
                                    >
                                        Join
                                    </Button>
                                </a>
                            )
                    }
                </div>
            </CardFooter>

        </Card>
    );
}

