"use client";

import React from "react";
import { deletePost } from "@/actions/posts";

export default function DeleteForm({ id }: { id: string }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /** You can replace this with a nicer confirmation model if you wish */
    if (confirm("Are you sure you want to delete this record?")) {
      deletePost(id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="inline">
      <button type="submit" className="text-red-500">
        Delete
      </button>
    </form>
  );
}
