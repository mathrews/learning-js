import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// ao digitar nos campos do formulário usando o react hook forms, o componente não é rencerizado novamente

type formValues = {
    username: string;
    email: string;
    channel: string;
};

const YoutubeFormFromVideo = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<formValues>({
        defaultValues: async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
            const data = await response.json();
            return {
                username: "Batman",
                email: data.email,
                channel: "",
            };
        },
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

                <button type="submit">Submit</button>
            </form>
            <DevTool control={control} />
        </>
    );
};

export default YoutubeFormFromVideo;
