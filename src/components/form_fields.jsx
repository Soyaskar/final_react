
const CustomFormField = ({ name, placeholder, onChange, errorMessage, type, value }) => {
  return (
    <div className="custom-form-field-container">
      <input
        className="my-field"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
      {
        errorMessage && <p className="field_error_msg">{errorMessage}</p>
      }
    </div>
  )
}
export default CustomFormField