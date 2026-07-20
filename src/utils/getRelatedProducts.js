export default function getRelatedProducts(product, products) {
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;

      if (a.healthConcern === product.healthConcern) scoreA += 5;
      if (a.dosageForm === product.dosageForm) scoreA += 3;
      if (a.bestSeller) scoreA += 2;

      if (b.healthConcern === product.healthConcern) scoreB += 5;
      if (b.dosageForm === product.dosageForm) scoreB += 3;
      if (b.bestSeller) scoreB += 2;

      return scoreB - scoreA;
    })
    .slice(0, 4);
}