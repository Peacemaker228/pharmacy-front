import { axiosInstance } from "../../api/api";

export const GetListProduct = (category = 1, page = 1) => {
  return axiosInstance.get(
    `/product/list?page_id=${page}&page_size=5&category_id=${category}`
  );
};
