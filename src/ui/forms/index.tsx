'use client'
import FormsPage from "./view";
import FormsModel from "./viewModel";

export default function Forms() {
  const { handleSubmit, onSubmit, register, status, errors } =
    FormsModel();
  return (
    <FormsPage
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      status={status}
    />
  );
}
