import { useState } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useRouter} from 'next/navigation';

const Regular = () => {
    const router = useRouter()
    const [subType, setSubType] = useState("monthly");
  return (
    <>
<header className="bg-white shadow">
            <div className="mx-auto max-w-10xl p-5 sm:px-6 lg:px-8 flex items-center justify-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
               
                    <Box sx={{ display: "flex" }}>
                        <Box className="mask-box">
                            <Box
                                className="mask"
                                style={{
                                    transform:`translateX(${subType === "monthly" ? 0 : "100px"})`
                                }}
                            />
                            <Button
                                disableRipple
                                variant="text"
                                sx={{ color: subType === "monthly" ? "#ffffff" : "#5316AE" }}
                                onClick={() => { setSubType("monthly"), router.push("/user/dashboard") }}
                            >
                                Regular
                            </Button>
                            <Button
                                disableRipple
                                variant="text"
                                sx={{ color: subType === "yearly" ? "#ffffff" : "#5316AE" }}
                                onClick={() => { setSubType("yearly"), router.push("/user/prime") }}
                            >
                                Prime
                            </Button>
                        </Box>
                    </Box>

                </h1>
            </div>
        </header>


    </>
  )
}

export default Regular