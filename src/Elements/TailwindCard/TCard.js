import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardDefault() {
    return (
      <Card className="mt-6 w-96">
        {/* <CardHeader >
          
        </CardHeader> */}
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          Profile Verification-1/5
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          {/* <Button>Read More</Button> */}
        </CardFooter>
      </Card>
    );
  }