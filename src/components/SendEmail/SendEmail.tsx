import { template } from "@babel/core";
import emailjs, { init } from "@emailjs/browser";
import { EMAILJS_USER_ID, EMAILJS_SERVICE_ID } from "@env";


const SendEmail = (type: string, emailParams: any) => {
    try {
        var template_id = "init";
        switch (type) {
            case "reset":
                template_id = "template_mz61cu7";
            case "success":
                template_id = "template_dessp0w";
            case "confirm":
                template_id = "template_zgiqmdm";
            case "invite":
                template_id = "template_j78fcdn"
        }
        return emailjs.send(
            EMAILJS_SERVICE_ID,
            template_id,
            emailParams,
            "bpUmfdhrALYzPBWpx" // public key
        );
    } catch (e) {
        console.log(e);
    }

};

export default SendEmail;