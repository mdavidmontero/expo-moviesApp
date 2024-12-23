export class Formatter {
  public static currency(value: number): string {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
}
