// შექმენით ფუნქცია რომელიც იღებს მატრიცას, და აბრუნებს ერთი დ მასივს რომელშიც შედის გადმოცემული მატრიც ელემენტის სიგრძეები (თანმიმდევრობით)

function getMatrixLengths(matrix) {
    if (!Array.isArray(matrix)) {
      throw new Error("Input must be a two-dimensional array (matrix).");
    }
    
    return matrix.map(row => Array.isArray(row) ? row.length : 0);
  }
  
 
  const matrix = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9],
    []
  ];
  
  const result = getMatrixLengths(matrix);
  console.log(result);  
  