"use client";
import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPost, updatePost } from "@/actions/posts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const FormSchema = z.object({
  title: z.string(),
  content: z.string(),
  isPublished: z.boolean().default(false),
});

export type FormType = z.infer<typeof FormSchema>;

type Props = { action: "create" } | { action: "edit"; item: FormType & { id: string } };

export default function FormComponent(props: Props) {
  const isEdit = props.action === "edit";

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: isEdit ? props.item.title : "",
      content: isEdit ? props.item.content : "",
      isPublished: isEdit ? props.item.isPublished : false,
    },
  });

  async function onSubmit(values: FormType) {
    if (props.action === "edit") {
      await updatePost(props.item.id, values);
    } else {
      await createPost(values);
    }
  }

  return (
    <>
      <Link href="/posts" className="inline-block mb-4 text-blue-500 underline">
        &larr; Back to list
      </Link>
      <Form {...form}>
        <h2 className="text-2xl text-secondary-foreground mb-2">
          {props.action === "edit" ? "Edit" : "Create"} Post
        </h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type here..."
                    {...field}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type here..."
                    {...field}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isPublished"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="isPublished"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={form.formState.isSubmitting}
                    />
                    <Label htmlFor="isPublished">Is active</Label>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting || !form.formState.isDirty}>
            <span>Create</span>
          </Button>
        </form>
      </Form>
    </>
  );
}
