import { Field, FieldType } from "../../../../entities/field";

const ConstructorEditorForm = () => {
  return (
    <form className="form">
      <Field label="Название поля" type={FieldType.INPUT} />
      <Field label="Тип поля" type={FieldType.SELECT} />
      <Field label="Плейсхолдер" type={FieldType.INPUT} />
      <Field label="Показывать по условию" type={FieldType.CHECKBOX} />
    </form>
  );
};

export default ConstructorEditorForm;
