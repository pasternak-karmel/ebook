import { FedaPay, Transaction } from "fedapay";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { transactionId } = await req.json();

  FedaPay.setApiKey(process.env.FEDA_SECRET as string);
  FedaPay.setEnvironment("live");

  try {
    const transaction = await Transaction.retrieve(transactionId);
    const transactionStatus = transaction.status;

    return NextResponse.json({ type: transactionStatus }, { status: 200 });
    
  } catch (error) {
    console.error("Error processing order:", error);
    return NextResponse.json(
      { error: "Erreur lors du traitement" },
      { status: 500 }
    );
  }
}
