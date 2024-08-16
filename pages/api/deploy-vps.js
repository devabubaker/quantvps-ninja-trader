// // import { createClient } from "next-sanity";
// // const client = createClient({
// //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
// //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
// //   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
// //   useCdn: false, // To make sure you write to the dataset
// //   apiVersion: '2021-08-31',
// // });

// export default async function deployvps(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   try {
//     const { userId, pname, pricing, orderid, productid, invoiceid } = req.body;

//     // Use Sanity client to create a new document
//     // const response = await client.create({
//     //   _type: "vps", // Replace 'yourSchemaType' with your Sanity schema type
//     //   userId,
//     //   pname,
//     //   pricing,
//     //   orderid,
//     //   productid,
//     //   invoiceid,
//     //   // Include other fields as per your schema definition
//     // });

//     // res.status(201).json({ message: "Data created in Sanity", response });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error });
//   }
// }
