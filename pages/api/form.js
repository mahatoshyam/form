import excuteQuery from "../../lib/db";
export default async function form(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, description } = req.body;
      console.log({ name, email, description }, req.method);
      const result = await excuteQuery({
        query: "INSERT INTO form ( name, email, description) VALUES( ?, ?, ?)",
        values: [name, email, description],
      });

      res.status(200).json(req.body);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  if (req.method === "GET") {
    try {
      const result = await excuteQuery({
        query: "SELECT * from form",
      });

      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
