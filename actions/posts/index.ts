"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreatePostParams {
  title: string;
  content: string;
  isPublished: boolean;
}

export async function createPost(params: CreatePostParams) {
  const data = await prisma.post.create({
    data: params,
  });
  redirect(`/posts/${data.id}`);
}

export async function getPostById(id: string) {
  return await prisma.post.findUnique({
    where: { id },
  });
}

export async function getAllPosts() {
  return await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function updatePost(id: string, params: Partial<CreatePostParams>) {
  const data = await prisma.post.update({
    where: { id },
    data: params,
  });
  redirect(`/posts/${data.id}`);
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: { id },
  });
  revalidatePath(`/posts`);
  redirect(`/posts`);
}
