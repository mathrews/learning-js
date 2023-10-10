import { useState } from "react";
import { useForm } from "react-hook-form";

const Formulario = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        getValues
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
        },
    });

    const [formData, setFormData] = useState({firstName: "", lastName: ""});

    const firstName = watch("firstName");
    const lastName = watch("lastName");


    return (
        <>
            <div>
                <h1>React Hook Form</h1>
                <p>Performant, flexible and extensible forms with easy-to-use validation.</p>

                <form
                    onSubmit={handleSubmit((data) => {
                        console.log(data);
                    })}>
                    <input
                        type="text"
                        {...register("firstName", {
                            required: "this field is required",
                            minLength: { value: 4, message: "Min length is 15" },
                        })}
                        placeholder="First Name"
                    />
                    <p>{errors.firstName?.message}</p>
                    {/* é necessário colocar a propriedade como opcional para ser possível sua renderização */}
                    <input
                        type="password"
                        {...register("lastName", {
                            required: "this field is required",
                            minLength: { value: 4, message: "Min length is 4" },
                        })}
                        placeholder="Last Name"
                    />
                    <p>{errors.lastName?.message}</p>
                    <div style={{ display: "flex", gap: 16 }}>
                        <input
                            type="submit"
                            value={"Verificar"}
                        />
                        <button
                            onClick={handleSubmit((data) => {
                                setFormData(data);
                                console.log(data);
                            })}>
                            Registrar
                        </button>
                    </div>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>

                    <p>
                        {getValues("firstName") !== formData.firstName ? "primeiro nome invalido" : ""}
                    </p>
                </form>
            </div>
        </>
    );
};

export default Formulario;
