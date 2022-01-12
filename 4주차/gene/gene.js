const gene = function* (limit) {
  let i = 0;

  while (true) {
    if (limit > i) {
      yield i++;
    } else {
      return;
    }
  }
};

const getGene = gene(5);

getGene.next();
