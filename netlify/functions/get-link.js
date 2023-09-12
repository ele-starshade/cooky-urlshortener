import { withPlanetscale } from "@netlify/planetscale";

export const handler = withPlanetscale(async (event, context) => {
  // const {
  //   planetscale: { connection },
  // } = context;

  // await connection.execute("INSERT INTO users (email, name) VALUES (?, ?)", [
  //   email,
  //   name,
  // ]);

  return {
    statusCode: 200, body: event
  };
});