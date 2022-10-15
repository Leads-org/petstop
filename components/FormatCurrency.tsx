interface toIDR {
  price: number;
}

const formatCurrency = ({ price }: toIDR) => {
  return (
    <>
      {new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price)}
    </>
  );
};

export default formatCurrency;
