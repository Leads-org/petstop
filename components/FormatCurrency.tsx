interface toIDR {
  price: number;
}

const formatCurrency = ({ price }: toIDR) => {
  return (
    <>
      {new Intl.NumberFormat("hr-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price)}
    </>
  );
};

export default formatCurrency;
