import { axiosInstance } from "../../api/api";

export const GetListProduct = (category = 1, page = 1, size = 5) => {
  return axiosInstance.get(
    `/product/list?page_id=${page}&page_size=${size}&category_id=${category}`
  );
};
