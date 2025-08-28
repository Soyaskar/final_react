import { createContext, useContext, useState } from "react"
import jsonData from "../data.json"

export const CustomFormContext = createContext({})
export const CustomFormContextProvider = ({children})=>{
  console.log(jsonData)
  const [submittedData, setSubmittedData] = useState([jsonData]);
  console.log("in custom form context",submittedData)
  return (
    <CustomFormContext.Provider  value={{submittedData, setSubmittedData}}>
      {children}
    </CustomFormContext.Provider>
  )
}

// export const useCustomFormContext = useContext(CustomFormContext)