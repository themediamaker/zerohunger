import React from 'react'
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Input,
    Typography,
} from "@material-tailwind/react";
import {ReligionDosh} from '../../Components/EditProfileToolTop/ToolTip'
export const Dosh = () => {
  return (
    <div>
        <ReligionDosh>
                    <Typography variant="h6" color="blue-gray" className="mb-6">
                        Newsletter Subscription
                    </Typography>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-1 font-bold"
                    >
                        Your Name
                    </Typography>
                    <div className="flex gap-2">
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Button className="flex-shrink-0">
                            Save
                        </Button>
                    </div>
        </ReligionDosh>
    </div>
  )
}
