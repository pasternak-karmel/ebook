"use client";

import { fedaserver } from "@/action/feda";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";

export const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères.",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  pays: z.string({
    message: "Le numéro est réquis.",
  }),
});

export default function Paymentform({ type }: { type: string }) {
  const [loadingImmediate, setLoadingImmediate] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      pays: "+229",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    // if(values.pays < "1222" && values.pays > "2000459804" ) return <div>Invalid number</div>

    console.log(values);
    setLoadingImmediate(true);
    const url = await fedaserver(values,{ type });
    if (url) {
      window.location.href = url;
    }
    setLoadingImmediate(false);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Entrez votre numéro</FormLabel>
              <FormControl>
                <PhoneInput
                  placeholder="+22900000000"
                  {...field}
                  defaultCountry="BJ"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className={`w-full md:w-40 text-sm rounded-full border-2 border-blue-600 text-blue-600 py-2 hover:bg-blue-600 hover:text-white transition duration-200 ${
            loadingImmediate ? "cursor-not-allowed opacity-70" : ""
          }`}
          disabled={loadingImmediate}
        >
          {loadingImmediate ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              En cours...
            </span>
          ) : (
            "Payer Maintenant"
          )}
        </Button>
      </form>
    </Form>
  );
}
