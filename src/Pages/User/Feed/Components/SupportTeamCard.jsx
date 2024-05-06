import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                        My Team Leader
                    </Typography>
                    <Button
                        variant="filled"
                        className="bg-primary gap-2 flex items-center"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} />
                        Contact
                    </Button>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <Typography className="text-base font-semibold">
                        My Trainer
                    </Typography>
                    <Button
                        variant="filled"
                        className="bg-primary gap-2 flex items-center"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} />
                        Contact
                    </Button>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <Typography className="text-base font-semibold">
                        Senior Team Leader
                    </Typography>
                    <a href={settings?.whatsapp} target="_blank" rel="noreferrer">
                        <Button
                            variant="filled"
                            className="bg-primary gap-2 flex items-center"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} />
                            Contact
                        </Button>
                    </a>
                </div>
            </CardFooter>

        </Card>
    );
}

