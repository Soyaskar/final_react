import React, { useState } from "react"
import CustomFormField from "./form_fields"
import PermaAddress from "./permaAddress"
import TempAddress from "./tempAddress"

function Form() {
  const [allFieldsValue, setAllFieldValue] = useState({})
  const [allFieldErrors, setAllFieldErrors] = useState({})
  console.log(setAllFieldErrors)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    handleValidation()
    if (allFieldErrors.length > 0) {
      return;
    }
  }

  const handleOnChange = (fieldKey, value) => {
    console.log(fieldKey, value)

    let fieldObj = {
      ...allFieldsValue,
    }
    fieldObj[fieldKey] = value
    setAllFieldValue(fieldObj)
  }
  //handling validation for ech input
  const handleValidation = () => {
    let fn = allFieldsValue.firstName
    let email = allFieldsValue.email
    let phone = allFieldsValue.phone
    let citizenship = allFieldsValue.citizenship
    let province = allFieldsValue.province
    let district = allFieldsValue.district
    let municipality = allFieldsValue.municipality
    let ward = allFieldsValue.ward
    let tole = allFieldsValue.tole
    let pProvince = allFieldsValue.pProvince
    let pDistrict = allFieldsValue.pDistrict
    let pMunicipality = allFieldsValue.pMunicipality
    let pWard = allFieldsValue.pWard
    let pTole = allFieldsValue.pTole

    let errorMsg = {}
    console.log(allFieldsValue)
    console.log(email, fn)
    {
      if (!fn) {
        errorMsg.firstName = "first name is required"
      }
      if (!email) {
        errorMsg.email = "email is required"
      } else {
        if (!(email.includes("@") && email.includes("."))) {
          errorMsg.email = "email invalid"
        }
      } if (!phone) {
        errorMsg.phone = "Phone number is required"
      }
      if (!citizenship) {
        errorMsg.citizenship = "Citizenship Number is required"
      }
      if (!province) {
        errorMsg.province = "Province is required"
      }
      if (!district) {
        errorMsg.district = "District is required"
      }
      if (!municipality) {
        errorMsg.municipality = "Municipality is required"
      }
      if (!ward) {
        errorMsg.ward = "Ward Number is required"
      }
      if (!tole) {
        errorMsg.tole = "Tole is required"
      }
      if (!pProvince) {
        errorMsg.pProvince = "Province is required"
      }
      if (!pDistrict) {
        errorMsg.pDistrict = "District is required"
      }
      if (!pMunicipality) {
        errorMsg.pMunicipality = "Municipality is required"
      }
      if (!pWard) {
        errorMsg.pWard = "Ward Number is required"
      }
      if (!pTole) {
        errorMsg.pTole = "Tole is required"
      }
    }
    setAllFieldErrors(errorMsg)
  }
  return (
    <>
      <form onSubmit={handleOnSubmit} >
        <div className="container top-container">
          <CustomFormField
            name={"firstName"}
            placeholder={"Enter your first name"}
            type={"text"}
            value={allFieldsValue.firstName}
            onChange={(e) => {
              handleOnChange("firstName", e.target.value)
            }}
            errorMessage={allFieldErrors.firstName}
          />
          <CustomFormField
            name={"email"}
            placeholder={"Enter your email"}
            type={"email"}
            value={allFieldsValue.email}
            onChange={(e) => handleOnChange("email", e.target.value)}
            errorMessage={allFieldErrors.email}
          />
          <CustomFormField
            name={"phone"}
            placeholder={"Enter your phone number"}
            type={"tel"}
            value={allFieldsValue.phone}
            onChange={(e) => handleOnChange("phone", e.target.value)}
            errorMessage={allFieldErrors.phone}
          />
          <CustomFormField
            name={"citizenship"}
            placeholder={"Enter your citizenship no"}
            type={"number"}
            value={allFieldsValue.citizenship}
            onChange={(e) => handleOnChange("citizenship", e.target.value)}
            errorMessage={allFieldErrors.citizenship}
          />

        </div>


        <div className="container">
          <h4>Temporary Address</h4>
          <TempAddress
            allFieldsValue={allFieldsValue}
            handleOnChange={handleOnChange}
            allFieldErrors={allFieldErrors}
          />
        </div>


        <div className="container">
          <h4>Permanent Address</h4>
          <PermaAddress
            allFieldsValue={allFieldsValue}
            handleOnChange={handleOnChange}
            allFieldErrors={allFieldErrors}
          />
        </div>
        <input className="submit-button" type="submit" value={"Submit"}></input>
        //Submitted data is not stored 


      </form>
    </>
  )


}
export default Form  
