const Order = require("../Model/Orders");

module.exports = {
  createOrder: async (req, res) => {
    const { buyerEmail, items, orderDate, total, completed, specialNote } =
      req.body;
    try {
      let createdOrder = new Order({
        buyerEmail,
        items,
        orderDate,
        total,
        specialNote,
      });

      let savedOrder = await createdOrder.save();
      res.json(savedOrder);
    } catch (error) {
      res.status(500).json({
        messageError,
      });
    }
  },
  getAllOrders: async () => {

  }
};
