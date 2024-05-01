function contarReviews(coment){
   const reviews = coment || 0;
   return `Tienes ${reviews} comentarios`;
}

console.log(contarReviews(8));