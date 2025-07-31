import { FieldType } from "../model";

interface FieldProps {
  type: FieldType;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
}

const Field: React.FC<FieldProps> = ({
  type,
  value,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <div
      className="field"
      style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}
    >
      <label className="field__label">{label}</label>
      {type === FieldType.SELECT ? (
        <select className="field__input"></select>
      ) : (
        <input
          type={type ?? "text"}
          className="field__input"
          placeholder={placeholder ?? "Enter value"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};

export default Field;
