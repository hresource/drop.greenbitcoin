export default function handler(req, res) {
  // Sample users data
  const users = [
    { id: 1, name: "Alice", email: "hresource@my.com" },
    { id: 2, name: "hun", email: "just.me001@my.com" }    
  ];

  // Handle GET request
  if (req.method === "GET") {
    res.status(200).json(users);
  } else {
    // Handle unsupported methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
