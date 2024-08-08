"use server";

import Products from "@/models/products";

export const addProduct = async ({ title, description }) => {
  const newPost = new Products({ title, description });
  return newPost.save();
};
