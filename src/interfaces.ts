export type Dictionary<T = unknown> = Record<string, T>;

export type IonSubmit = <T = object>(values: T) => void;

export interface IHasOnSubmit {
  onSubmit: IonSubmit;
}
