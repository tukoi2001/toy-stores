const DateFilter = (data) => {
    let newDate =
      ("0" + data.getDate()).slice(-2) +
      "-" +
      ("0" + (data.getMonth() + 1)).slice(-2) +
      "-" +
      data.getFullYear();
    return newDate;
  };
  
  const DateHourFilter = (data) => {
    let newDate =
      ("0" + data.getDate()).slice(-2) +
      "-" +
      ("0" + (data.getMonth() + 1)).slice(-2) +
      "-" +
      data.getFullYear() +
      " " +
      ("0" + data.getHours()).slice(-2) +
      ":" +
      ("0" + data.getMinutes()).slice(-2);
    return newDate;
  };
  
  export { DateFilter, DateHourFilter };