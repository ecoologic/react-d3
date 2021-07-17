export type Dictionary<T = unknown> = Record<string, T>;

export type IonSubmit<T> = (values: T) => void;

export interface IHasOnSubmit<T> {
  onSubmit: IonSubmit<T>;
}
