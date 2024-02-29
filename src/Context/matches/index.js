
import { useState } from "react";
import MatchesContext from "./MatchesContext"

const MatchesProvider = ({ children }) => {
   const [allmatchesdata, setallmatchesdata] = useState([])
   const [newmatchesdata, setnewmatchesdata] = useState([])
   const [viewedbyyoumatchesdata, setviewedbyyoumatchesdata] = useState([])
   const [shortlistdata, setshortlistdata] = useState([])
   const [isallloading, setallloading] = useState(false)
   const [isshortloading, setshortloading] = useState(false)
   const [allinonematchesdata, setallinonematchesdata] = useState([])
   const [isviewedbyyouloading, setviewedbyyouloading] = useState(false)
   const [isnewloading, setnewloading] = useState(false)
   const [isallinoneloading, setisallinoneloading] = useState(false)
   
   return (
      <>

         <MatchesContext.Provider value={{ allmatchesdata, setallmatchesdata, isnewloading, setallloading, isallloading, setnewloading, setnewmatchesdata, newmatchesdata, isviewedbyyouloading, viewedbyyoumatchesdata, setviewedbyyoumatchesdata, setviewedbyyouloading, shortlistdata, setshortlistdata, isshortloading, setshortloading,allinonematchesdata,setallinonematchesdata,setisallinoneloading,isallinoneloading}}>
            {children}
         </MatchesContext.Provider>
      </>
   )
}
export default MatchesProvider;