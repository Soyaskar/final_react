import CustomFormField from "./form_fields"

const PermaAddress=({allFieldsValue, allFieldErrors, handleOnChange})=>{
  return(
    <div className="address-container">
              <CustomFormField
                name={"pProvince"}
                placeholder={"Enter your province"}
                type={"number"}
                value={allFieldsValue.pProvince}
                onChange={(e) => handleOnChange("pProvince", e.target.value)}
                errorMessage={allFieldErrors.pProvince}
              />
              <CustomFormField
                name={"pDistrict"}
                placeholder={"Enter your district"}
                type={"text"}
                value={allFieldsValue.pDistrict}
                onChange={(e) => handleOnChange("pDistrict", e.target.value)}
                errorMessage={allFieldErrors.pDistrict}
              />
              <CustomFormField
                name={"pMunicipality"}
                placeholder={"Enter your municipality"}
                type={"text"}
                value={allFieldsValue.pMunicipality}
                onChange={(e) => handleOnChange("pMunicipality", e.target.value)}
                errorMessage={allFieldErrors.pMunicipality}
              />
              <CustomFormField
                name={"pWard"}
                placeholder={"Enter your ward"}
                type={"number"}
                value={allFieldsValue.pWard}
                onChange={(e) => handleOnChange("pWard", e.target.value)}
                errorMessage={allFieldErrors.pWard}
              />
              <CustomFormField
                name={"pTole"}
                placeholder={"Enter your tole"}
                type={"text"}
                value={allFieldsValue.pTole}
                onChange={(e) => handleOnChange("pTole", e.target.value)}
                errorMessage={allFieldErrors.pTole}
              />
            </div>
  )
}
export default PermaAddress