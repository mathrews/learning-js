import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// const valorPadraoComFetch = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
//     const data = await response.json();
//     return {
//         username: "Batman",
//         email: data.email,
//         channel: "",
//     };
// },

// ao digitar nos campos do formulário usando o react hook forms, o componente não é rencerizado novamente

type formValues = {
    username: string;
    email: string;
    channel: string;
    social: {
        twitter: string;
        facebook: string;
    };
    phoneNumbers: string[];
    phNumbers: {
        number: string;
    }[];
};

const YoutubeFormFromVideo = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<formValues>({
        defaultValues: {
            username: "Batman",
            email: "",
            channel: "",
            social: {
                twitter: "",
                facebook: "",
            },
            phoneNumbers: ["", ""],
            phNumbers: [{ number: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        name: "phNumbers",
        control,
    });

    let renderCount = 0;
    renderCount++;

    const showDataForm = (data: formValues) => {
        console.log("Form submitted", data);
    };

    const notAdmin = (fieldValue: string) => {
        return fieldValue !== "admin@example.com" || "Enter a different email address";
    };

    const notBlackListed = (fieldValue: string) => {
        return !fieldValue.endsWith("baddomain.com") || "This domain is not supported";
    };

    console.log(errors);

    return (
        <>
            <h1>Youtube Form {renderCount}</h1>
            <form
                onSubmit={handleSubmit(showDataForm)}
                noValidate>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input
                        {...register("username", {
                            required: {
                                //podemos fragmentá-lo
                                value: true,
                                message: "Username is required",
                            },
                        })}
                        type="text"
                        id="username"
                        name="username"
                    />
                    <p className="error">{errors.username?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                //podemos fragmentá-lo
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                message: "Invalid email format",
                            },
                            validate: {
                                //podemos fragmentá-lo
                                notAdmin: notAdmin,
                                notBlackListed: notBlackListed,
                            },
                        })}
                        type="email"
                        id="email"
                        name="email"
                    />
                    <p className="error">{errors.email?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input
                        {...register("channel", {
                            required: "Channel is required",
                        })}
                        type="text"
                        id="channel"
                        name="channel"
                    />
                    <p className="error">{errors.channel?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="twitter">Twitter</label>
                    <input
                        {...register("social.twitter")}
                        type="text"
                        id="twitter"
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="facebook">Facebook</label>
                    <input
                        {...register("social.facebook")}
                        type="text"
                        id="facebook"
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="primary-phone">Primary phone Number</label>
                    <input
                        {...register("phoneNumbers.0", {
                            required: "This phone number is required",
                            pattern: {
                                value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                                message: "Invalid number",
                            },
                        })}
                        type="text"
                        id="primary-phone"
                    />
                    <p className="error">{errors.phoneNumbers?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="secondary-phone">Secondary phone Number</label>
                    <input
                        {...register("phoneNumbers.1", {
                            required: "This phone number is required",
                            pattern: {
                                value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                                message: "Invalid number",
                            },
                        })}
                        type="text"
                        id="secondary-phone"
                    />
                    <p className="error">{errors.phoneNumbers?.message}</p>
                </div>

                <div>
                    <label>List of phone numbers</label>
                    <div>
                        {fields.map((field, index) => {
                            return (
                                <div className="form-control" key={field.id}>
                                    <input type="text" {...register(`phNumbers.${index}.number` as const)} />
                                    {index > 0 && (
                                        <button type="button" onClick={() => remove(index)}>
                                            Remove
                                        </button>
                                    )}
                                </div>
                            )
                        })}
                        <button type="button" onClick={() => append({ number: "" })}>
                            Add phone number
                        </button>
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
            <DevTool control={control} />
        </>
    );
};

export default YoutubeFormFromVideo;
