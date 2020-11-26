export default (req, res) => {
  const {
    query: { id },
  } = req;

  res.status(200).json({
    id,
    name: "Harry Manchanda",
    email: "harry@kibanu.com",
  });
};
