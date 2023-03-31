interface Info {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function FormInput({
  label,
  required,
  type,
  placeholder,
  info,
  setInfo,
  value,
}: {
  label: string;
  required: boolean;
  type: "text" | "phone" | "email";
  placeholder: string;
  info: Info;
  setInfo: (value: Info) => void;
  value: keyof Info;
}) {
  return (
    <div className="form-control w-full ">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {value == "message-old" ? (
        <textarea
          className="textarea textarea-primary"
          value={info[value]}
          onChange={(e) =>
            setInfo({
              ...info,
              [value]: e.target.value,
            })
          }
          placeholder={placeholder}></textarea>
      ) : (
        <input
          required={required}
          type={type}
          placeholder={placeholder}
          value={info[value]}
          onChange={(e) =>
            setInfo({
              ...info,
              [value]: e.target.value,
            })
          }
          className="input input-bordered w-full "
        />
      )}
    </div>
  );
}
