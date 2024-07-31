const formOrderPayload = (formData, cart) => {
  let payload = {
    address: formData?.address ?? '',
    customer: formData?.customer ?? '',
    phone: formData?.phone ?? '',
    priority: formData?.priority ?? false,
    position: '',
    cart: formattedCart(cart),
  };

  return payload;
};

const formattedCart = (cart) => {
  if (!cart.length) {
    return [];
  }

  const res = cart.map((item) => {
    return {
      name: item.name,
      pizzaId: item.id,
      quantity: item.count,
      totalPrice: item.count * item.unitPrice,
      unitPrice: item.unitPrice,
    };
  });

  return res;
};

export default formOrderPayload;
