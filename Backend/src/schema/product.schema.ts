import { object, string, ref } from "yup";

const payload = {
  body: object({
    name: string().required("name is required"),
  }),
};

const params = {
  params: object({
    productId: string().required("productId is required"),
  }),
};

export const createProductSchema = object({
  ...payload,
});

export const updateProductSchema = object({
  ...params,
  ...payload,
});

export const deleteProductSchema = object({
  ...params,
});
