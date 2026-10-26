const figlet= require("figlet");

figlet('Hello Baby Girl gauri !!', (err, data) => {
  if (err) {
    console.error('Something went wrong:', err);
    return;
  }
  console.log(data);
});
