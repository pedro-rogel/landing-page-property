import { useState } from "react";
import {
  FieldErrors,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  numberPhone: string;
};

export interface FormsModelProps {
  register: UseFormRegister<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData, FormData>;
  status: boolean | null;
  onSubmit: (data: FormData) => Promise<void>;
  errors: FieldErrors<FormData>;
}

export default function FormsModel() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [status, setStatus] = useState<boolean | null>(null);

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setStatus(true);
      console.log(JSON.stringify(res, null, 2));
      reset();
      setTimeout(() => setStatus(null), 5000);
    } else {
      setStatus(false);
      alert("Erro ao cadastrar usuário.");
    }
  };
  return { register, handleSubmit, onSubmit, status, setStatus, errors };
}
