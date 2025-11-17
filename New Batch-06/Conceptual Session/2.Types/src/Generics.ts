{
  const car: Array<string> = ["", ""];
  const car1: Array<string> = ["", ""];
  type GenericArray1<T, U> = [T, U];

  const GenericArrayBuild: GenericArray1<string, boolean> = ["therdh", false];
  //   const car1: Array<string, boolean> = ["", false];
}
