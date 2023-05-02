export default function handler(req, res) {
  const accessCode = req.body.accessCode;
  // console.log("your access code is " + accessCode);
  // Do something with the name and email
  res.status(201).json({ message: `Received data is: ${accessCode}` });
}
