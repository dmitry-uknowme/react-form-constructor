import type { FieldType } from "../model";

interface FieldProps {
  type: FieldType;
  label?: string;
  value?: string;
  onChange: (value: string) => void;
}

const Field: React.FC<FieldProps> = ({ label, value, onChange }) => {
  return (
    <div
      className="field"
      style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}
    >
      <label className="field__label">{label}</label>
      <input
        type="text"
        className="field__input"
        placeholder="Enter value"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Field;
