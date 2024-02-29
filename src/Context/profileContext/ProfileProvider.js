import { useState } from "react";
import { ProfileContext } from ".";

export const ProfileProvider = ({ children }) => {
    const [openprofiledata, setopenprofiledata] = useState([])
    const [isopenprofileloading, setisopenprofileloading] = useState(false)
    return (
        <ProfileContext.Provider value={{ openprofiledata, setopenprofiledata, isopenprofileloading, setisopenprofileloading }}>
            {children}
        </ProfileContext.Provider>
    )
}