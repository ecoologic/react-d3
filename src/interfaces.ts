export type Dictionary<T = unknown> = Record<string, T>;

export type IonSubmit = (values: object) => void;

export interface IHasOnSubmit {
  onSubmit: IonSubmit;
}
