export class ColumnGroup {
  private static counter = 0;
  private _id: number;

  constructor(public title: React.ReactNode) {
    this._id = ColumnGroup.counter++;
  }

  public get id(): number {
    return this._id;
  }
}
