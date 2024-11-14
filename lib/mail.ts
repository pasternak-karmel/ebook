"use server";

import { Resend } from "resend";

// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export const SendLink = async (email: string) => {
  const link = "https://monlivresurdrive.com";

  await resend.emails.send({
    from: "Acme <noreply@glaceandconfort.com>",
    to: email,
    subject: "Merci pour votre achat",
    html: `<>Vous pouvez cliquer sur le lien qui est en dessous pour télécharger votre livre<br/>Lien: ${link}</>`,
  });
};
