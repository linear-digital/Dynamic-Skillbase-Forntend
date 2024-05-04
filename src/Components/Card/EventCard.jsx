import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function EventCard({ text }) {
  return (
    <Card className="mt-6 lg:w-[400px] w-full">
      <CardBody className="flex justify-between gap-3 items-center">
        <img src="/images/icons/events.png" width={100} />
        <Typography className="text-base">
          {text}
        </Typography>
      </CardBody>
    </Card>
  );
}