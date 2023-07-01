export const convertToIDR = (amount) =>{
    var amountIDR = amount;
    return amountIDR.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  }