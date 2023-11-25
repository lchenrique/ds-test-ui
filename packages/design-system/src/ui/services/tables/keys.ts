import { QueryKey } from "react-query";
export const createUseTableKey = (keys: QueryKey): QueryKey => [...keys];
