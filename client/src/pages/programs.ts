fetch("http://localhost:3310/api/programs")
  .then((res) => res.json())
  .then((data) => {
    return console.log(data);
  })
  .catch((error) => console.error("Erreur:", error));
