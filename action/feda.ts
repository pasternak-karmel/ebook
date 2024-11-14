"use server";

import { formSchema } from "@/app/paiement/payment-form";
import { FedaPay, Transaction } from "fedapay";
import { toast } from "sonner";
import { z } from "zod";

const domain = process.env.DOMAIN;

interface PaymentProps {
  type: string;
}

export const fedaserver = async (
  values: z.infer<typeof formSchema>,
  { type }: PaymentProps
) => {

  FedaPay.setApiKey(process.env.FEDA_SECRET as string);
  FedaPay.setEnvironment("live");
  let amount = 0;

  if (type !== "8") {
    amount = 1500;
  } else {
    amount = 3500;
  }

  try {
    const transaction = await Transaction.create({
      description: "Confirmer votre achats",
      amount,
      callback_url: `${domain}/checkTransaction?email=${values.email}`,
      currency: {
        iso: "XOF",
      },
      customer: {
        firstname: values.firstName,
        lastname: values.lastName,
        email: values.email,
        phone_number: {
          number: "68799356",
          country: "BJ",
        },
      },
    });

    const token = await transaction.generateToken();
    return token.url;
  } catch (error) {
    console.error(
      "Erreur lors de la création de la transaction sur fedapay:",
      error
    );
    return toast.error("Une erreur est subvenue");
  }
};
