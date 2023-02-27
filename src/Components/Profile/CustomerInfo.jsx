import EditableField from "./EditableField";

const CustomerInfo = ({ register, errors, setFocus, handleSubmit, onSubmit }) => {
  return (
    <form className="profile-costumer-info" onSubmit={handleSubmit(onSubmit)}>
        <EditableField
          register={register}
          errors={errors}
          setFocus={setFocus}
          type="longText"
          name="address"
          label="Address:"
        />
        <EditableField
          register={register}
          errors={errors}
          setFocus={setFocus}
          type="shortText"
          name="city"
          label="City:"
        />
        <EditableField
          register={register}
          errors={errors}
          setFocus={setFocus}
          type="shortText"
          name="country"
          label="Country:"
        />
        <EditableField
          register={register}
          errors={errors}
          setFocus={setFocus}
          type="date"
          name="birthDate"
          label="Date of birth:"
        />
        <div className="profile-btns">
          <button
            className="round-btns red-btn btn-on-main"
            onClick={handleSubmit}
          >
            Delete account
          </button>
          <button
            className="round-btns blue-btn btn-on-main"
            onClick={handleSubmit}
          >
            Save changes
          </button>
        </div>
    </form>
  );
};

export default CustomerInfo;
