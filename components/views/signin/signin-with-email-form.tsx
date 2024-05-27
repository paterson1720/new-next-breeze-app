"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signinWithEmail } from "@/actions/auth";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { SigninWithEmailFormSchema, SigninWithEmailFormType } from "@/lib/validation-schemas";
import Spinner from "@/components/ui/spinner";

interface Props {
  visible?: boolean;
  buttonText?: string;
  redirectUrl?: string;
}

export function SigninWithEmailForm({ visible = true, buttonText, redirectUrl }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(SigninWithEmailFormSchema),
  });

  const onSubmit: SubmitHandler<any> = (
    data: SigninWithEmailFormType & { redirectUrl: string }
  ) => {
    setIsLoading(true);
    signinWithEmail({ ...data, redirectUrl }).then(() => {
      setIsLoading(false);
    });
  };

  if (!visible) return null;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="email"
          control={form.control}
          disabled={isLoading}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          <span className="mr-2">{buttonText || "Sign in with email"}</span>
          <Spinner size="sm" visible={isLoading} />
        </Button>
      </form>
    </Form>
  );
}
