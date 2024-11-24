// Simulasi penyimpanan data dengan array
let items = [];

const getAllItems = (req, res) => {
  res.status(200).json(items);
};

const getItemById = (req, res) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === parseInt(id));
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.status(200).json(item);
};

const createItem = (req, res) => {
  const { name, description } = req.body;
  const newItem = {
    id: items.length ? items[items.length - 1].id + 1 : 1,
    name,
    description,
  };
  items.push(newItem);
  res.status(201).json(newItem);
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const itemIndex = items.findIndex((item) => item.id === parseInt(id));

  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  items[itemIndex] = { ...items[itemIndex], name, description };
  res.status(200).json(items[itemIndex]);
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex((item) => item.id === parseInt(id));

  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  items.splice(itemIndex, 1);
  res.status(200).json({ message: "Item deleted successfully" });
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
