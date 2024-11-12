"use server";

import { FedaPay, Transaction } from "fedapay";
import { toast } from "sonner";

const domain = process.env.DOMAIN;

interface PaymentProps {
  type: string;
}

export const fedaserver = async ({ type }: PaymentProps) => {
  console.log(type);
  FedaPay.setApiKey(process.env.FEDA_SECRET as string);
  FedaPay.setEnvironment("live");

  try {
    const transaction = await Transaction.create({
      description: "Confirmer votre achats",
      amount: 5000,
      callback_url: `${domain}/checkTransaction`,
      currency: {
        iso: "XOF",
      },
      customer: {
        firstname: "firstname",
        lastname: "lastname",
        email: "email@gmail.com",
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
