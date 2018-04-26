import app from "./App";

const port = process.env.Port || 8000;

app.listen(port, (err)=>{
  if (err) {
    return console.log(err);
  }
  return console.log(`server listening on ${port}`)
})
