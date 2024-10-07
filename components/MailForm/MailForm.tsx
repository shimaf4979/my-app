"use client";

import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useMailForm } from "@/hooks/useMailForm";
import "react-toastify/dist/ReactToastify.css";

const MailForm = () => {
  const { form, onSubmit } = useMailForm();

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      toast.success("メールを送信しました");
    }
  }, [form.formState.isSubmitSuccessful]);

  return (
    <Form {...form}>
      <ToastContainer />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='container flex flex-col gap-4'
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='username' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='email' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder='subject' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder='content' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='file'
          render={({ field: { onChange } }) => (
            <FormItem>
              <FormLabel>File</FormLabel>
              <FormControl>
                <Input
                  accept='image/*'
                  type='file'
                  onChange={(e) => {
                    if (e.target.files) {
                      onChange(e.target.files);
                    }
                  }}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <ClipLoader color='#ff00ff' />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default MailForm;
