const planetScale = require("@netlify/planetscale")

exports.handler = withPlanetscale(async (event, context) => {
  // const {
  //   planetscale: { connection },
  // } = context;

  // await connection.execute("INSERT INTO users (email, name) VALUES (?, ?)", [
  //   email,
  //   name,
  // ]);
  //poopy

  return {
    statusCode: 200, body: event
  };
});