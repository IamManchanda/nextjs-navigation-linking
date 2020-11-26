export default (req, res) => {
  const {
    query: { id },
  } = req;

  res.status(200).json({
    id,
    name: "Harry",
    email: "harry@kibanu.com",
  });
};
