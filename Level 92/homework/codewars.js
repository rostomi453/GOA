function fakeBin(x) {
    return x.split('').map(d => d < '5' ? '0' : '1').join('');
  }
  