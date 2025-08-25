import CustomFormField from "./form_fields"
const TempAddress = ({ allFieldsValue, allFieldErrors, handleOnChange }) => {
  return (
    <div className="address-container">
      <CustomFormField
        name={"province"}
        placeholder={"Enter your province"}
        type={"number"}
        value={allFieldsValue.province}
        onChange={(e) => handleOnChange("province", e.target.value)}
        errorMessage={allFieldErrors.province}
      />
      <CustomFormField
        name={"district"}
        placeholder={"Enter your district"}
        type={"text"}
        value={allFieldsValue.district}
        onChange={(e) => handleOnChange("district", e.target.value)}
        errorMessage={allFieldErrors.district}
      />
      <CustomFormField
        name={"municipality"}
        placeholder={"Enter your municipality"}
        type={"text"}
        value={allFieldsValue.municipality}
        onChange={(e) => handleOnChange("municipality", e.target.value)}
        errorMessage={allFieldErrors.municipality}
      />
      <CustomFormField
        name={"ward"}
        placeholder={"Enter your ward"}
        type={"number"}
        value={allFieldsValue.ward}
        onChange={(e) => handleOnChange("ward", e.target.value)}
        errorMessage={allFieldErrors.ward}
      />
      <CustomFormField
        name={"tole"}
        placeholder={"Enter your tole"}
        type={"text"}
        value={allFieldsValue.tole}
        onChange={(e) => handleOnChange("tole", e.target.value)}
        errorMessage={allFieldErrors.tole}
      />
    </div>
  )
}
export default TempAddress