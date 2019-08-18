export type ObjectSet<T = { [key: string]: any }> = {
  [key in keyof T]: T[keyof T]
};
