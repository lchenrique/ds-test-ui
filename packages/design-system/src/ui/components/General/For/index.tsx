export interface IForProps<T extends readonly any[], U> {
  each: T | any[];
  fallback?: JSX.Element;
  children: (item: T[number], index: number) => U;
}

export function For<T extends readonly any[], U extends JSX.Element>(
  props: IForProps<T, U>,
) {
  return props.each?.map(props.children);
}
