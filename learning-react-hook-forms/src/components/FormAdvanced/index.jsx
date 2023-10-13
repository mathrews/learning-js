import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const asyncSubmit = async () => {
    const myPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello");
        }, 2000);
    });

    return myPromise; 
}; //simulação de uma promisse em uma request de api

const schema = Yup.object().shape({ //define os tipos de validações que serão executadas em cada campo do form
    password: Yup.string().required("Campo obrigatório").min(6, "Exige no mínimo 6 caracteres"),
    confirmPassword: Yup.string()
        .required("Campo obrigatório")
        .oneOf([Yup.ref("password"), null], "As senhas precisão ser equivalentes"),
});

const FormAdvanced = () => {
    const { register, handleSubmit, formState, reset, setFocus } = useForm({ //hook do react-hook-forms
        mode: "all", //faz validação em todas as ações
        resolver: yupResolver(schema), //usa a constante squema para validar os erros
        defaultValues: { //passa valores padrões
            password: "",
            confirmPassword: "",
        },
    });

    const { errors, isSubmitting } = formState; //define o estado do formulario e possui várias propriedades utilizáveis para o formulario como o erros e o isSubmitting, como mostrado acima.

    useEffect(() => {
        setFocus("password");
    }, [setFocus]); //um exemplo de acessibilidade para a aplicação dando um focus direto no campo password

    return (
        <>
            <form
                onSubmit={handleSubmit(async (data) => {
                    await asyncSubmit();
                    console.log("submit", data);
                    console.log("errors", errors);
                    reset(); //reseta os campos registrados para o valor default
                })}>
                <h2>Reset Password</h2>
                <input
                    {...register("password")}
                    autoFocus //exemplo minimizado de acessibilidade com focus
                    type="password"
                    placeholder="Senha"
                />

                <p>{errors.password?.message}</p>

                <input
                    {...register("confirmPassword")}
                    type="password"
                    placeholder="confirmar Senha"
                />

                <p>{errors.confirmPassword?.message}</p>

                <button
                    type="submit"
                    disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar"} O isSubmitting é como uma tela de carregamento, define o estado do formulario quando o mesmo estiver enviando os dados;
                </button>
            </form>
        </>
    );
};

export default FormAdvanced;