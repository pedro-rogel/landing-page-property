import { Button } from "@/components/ui/button";
import { HintComponentInput } from "@/components/ui/inutToForms";
import InputComponent from "@/components/ui/inutToForms";
import Separator from "@/components/ui/separator";
import Image from "next/image";
import { FormsModelProps } from "./viewModel";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function FormsPage({
  handleSubmit,
  register,
  status,
  onSubmit,
  errors,
}: FormsModelProps) {
  const route = useRouter()
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <main className="m-0 grid h-screen grid-cols-3 p-0 max-lg:flex">
        <div
          style={{
            backgroundColor: " rgb(201, 201, 241)",
            backgroundImage: `url("https://img.mbras.com.br/property_photos/MB16912/e6e181e0-c799-41a5-9c28-4a055cd88516.jpeg?tr=f-auto,q-auto,pr=true,w=auto")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "rigth",
            backgroundSize: "cover",
          }}
          className="col-span-2 m-0 p-0 max-lg:h-0 max-lg:w-0"
        >
          <div className="flex h-screen items-center gap-5 bg-[#ffffffae] p-9 max-lg:h-0 max-lg:w-0">
            <Separator vertical color={"#000"} width={"140px"} line={"xs"} />
            <h2 className="font-gothanMedium text-7xl text-[#000] max-xl:text-7xl max-lg:hidden max-lg:text-5xl">
              Referência em <br /> Altíssimo Padrão
            </h2>
          </div>
        </div>
        <div className="text col-span-1 overflow-auto bg-[#000] max-lg:h-screen max-lg:w-screen">
          <Image
            className="bg-[#fff] p-1 rounded-lg mx-auto mb-2 mt-2"
            src="https://www.mbras.com.br/mbras-logo-header-light.png"
            width={100}
            height={100}
            onClick={() => route.push('/main')}
            alt="Imagem Artico Capital"
          />
          <Separator color="white" line="xs" width="300px" margin="regular" />
          <div className="m-auto mt-[20%] flex h-96 w-72 flex-col items-center rounded-3xl border-2 p-3 font-gothanMedium max-lg:h-[30rem] max-lg:w-[30rem] max-md:w-80 max-sm:w-72">
            <h2 className="mx-auto mt-3 text-center text-lg text-white max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
              Bem vindo a MBRAS
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center"
            >
              <InputComponent
                placeholderProps="Nome"
                labelChildren="Digite seu nome"
                variant="outlined"
                {...register("name", {
                  required: "O nome é obrigatório",
                })}
              >
                <HintComponentInput>
                  {errors.name && (
                    <span className="font-sans text-sm text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </HintComponentInput>
              </InputComponent>
              <InputComponent
                type="email"
                placeholderProps="Email"
                labelChildren="Digite o seu email"
                variant="outlined"
                {...register("email", {
                  required: "O email é obrigatório",
                })}
              >
                <HintComponentInput>
                  {errors.email && (
                    <span className="font-sans text-sm text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </HintComponentInput>
              </InputComponent>
              <InputComponent
                placeholderProps="Número de Telefone"
                labelChildren="Digite o seu número de telefone"
                variant="outlined"
                {...register("numberPhone", {
                  required: "O Número de telefone é obrigatório",
                })}
              >
                <HintComponentInput>
                  {errors.numberPhone && (
                    <span className="font-sans text-sm text-red-500">
                      {errors.numberPhone.message}
                    </span>
                  )}
                </HintComponentInput>
              </InputComponent>

              <Button
                type="submit"
                variant="ghost"
                className={`${
                  errors.email || errors.name || errors.numberPhone
                    ? "mt-2"
                    : "mt-8"
                }`}
                // loading
              >
                Continuar
              </Button>
              <div></div>
            </form>
          </div>
          <HintComponentInput className="flex justify-center mt-8">
            {status && (
              <span className="text-green-600 text-lg">
                Obrigado pela preferencia! Seu cadastro <br /> foi realizado com
                sucesso
              </span>
            )}
          </HintComponentInput>
        </div>
      </main>
    </motion.div>
  );
}
