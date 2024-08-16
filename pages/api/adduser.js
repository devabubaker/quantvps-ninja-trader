// // import { createClient } from "next-sanity";
// // const client = createClient({
// //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
// //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
// //   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
// //   useCdn: false, // To make sure you write to the dataset
// //   apiVersion: '2022-08-31',
// // });

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed', message: 'Only POST requests are allowed' });
//   }

//   try {

//     const bodydata = await req.body;
//     const parsedata =  JSON.parse(bodydata)
//     // Add the data to Sanity
//     const result = await client.create({
//       _type: 'user', // Make sure this matches the schema type name in Sanity
//       ...parsedata
//     });

//     res.status(200).json({ message: 'Data added successfully',
//     result
//    });
//   } catch (error) {
//     console.error('Error adding data:', error);
//     res.status(500).json({ error: 'Internal Server Error', message: error.message });
//   }
// }
