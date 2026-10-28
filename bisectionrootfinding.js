function bisectionMethod(fstring, a, b, tolerance = 1e-7, maxIterations = 100) {
	eval(fstring);
  // Memastikan a dan b mengapit akar (tanda f(a) dan f(b) berlawanan)
  if (func(a) * func(b) >= 0) {
    throw new Error("Fungsi harus memiliki tanda yang berlawanan pada titik a dan b.");
  }

  let mid;
  let iteration = 0;

  while ((b - a) / 2 > tolerance && iteration < maxIterations) {
    mid = (a + b) / 2;

    // Jika mid adalah akar eksak
    if (func(mid) === 0) {
      return mid; 
    }

    // Mempersempit interval
    if (func(a) * func(mid) < 0) {
      b = mid; // Akar berada di antara a dan mid
    } else {
      a = mid; // Akar berada di antara mid dan b
    }
    
    iteration++;
  }

  // Mengembalikan estimasi akar terbaik
  return (a + b) / 2; 
}
