import emailjs, { init } from "@emailjs/browser";
import { EMAILJS_USER_ID, EMAILJS_SERVICE_ID } from "@env";


const SendEmail = (type: string, emailParams: any) => {
    switch (type) {
        case "reset":
            return emailjs.send(
                EMAILJS_SERVICE_ID,
                "template_mz61cu7",
                emailParams
            );
        case "success":
            return emailjs.send(
                EMAILJS_SERVICE_ID,
                "template_dessp0w",
                emailParams
            );
        case "confirm":
            return emailjs.send(
                EMAILJS_SERVICE_ID,
                "template_zgiqmdm",
                emailParams
            );
    }
    return emailjs.send(
        EMAILJS_SERVICE_ID,
        "template_zgiqmdm",
        emailParams
    );
};

export default SendEmail;