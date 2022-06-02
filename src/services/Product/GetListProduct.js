import { axiosInstance } from "../../api/api";

export const GetListProduct = (category) => {
  return axiosInstance.get(
    `/product/list?page_id=1&page_size=5&category_id=${category}`
  );
};
