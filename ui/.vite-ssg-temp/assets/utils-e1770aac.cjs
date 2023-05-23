"use strict";
const client = require("@servicestack/client");
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
const formatCurrency = (n) => n ? formatter.format(n) : "";
const formatDate = (s) => s ? client.toDateFmt(s) : "";
const dateInputFormat = (d) => client.dateFmt(d).replace(/\//g, "-");
function sanitizeForUi(dto) {
  if (!dto)
    return {};
  Object.keys(dto).forEach((key) => {
    let value = dto[key];
    if (typeof value == "string") {
      if (value.startsWith("/Date"))
        dto[key] = dateInputFormat(client.toDate(value));
    }
  });
  return dto;
}
exports.dateInputFormat = dateInputFormat;
exports.formatCurrency = formatCurrency;
exports.formatDate = formatDate;
exports.sanitizeForUi = sanitizeForUi;
