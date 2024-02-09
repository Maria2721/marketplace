import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  loadCategories,
  selectCategoriesInfo,
  selectAllCategories,
} from "./categories-slice";

export const useCategories = () => {
  const dispatch = useDispatch();
  const { status, error, qty } = useSelector(selectCategoriesInfo);
  const categories = useSelector(selectAllCategories);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCategories());
    }
  }, [qty, dispatch]);

  return [categories, { status, error, qty }];
};
