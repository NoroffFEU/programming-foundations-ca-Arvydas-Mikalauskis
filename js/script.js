const phone = {
  brand: "Apple",
  modelName: "Iphone 13",
  capacity: 128,
  turnedON: true,
  displayType: ["6.1 Inches", "OLED", "2532x1170px"],

  message: function () {
    return console.log(
      `This phone is made by ${this.brand}, model: ${this.modelName}, has ${
        this.capacity
      } GB memory slot and ${this.displayType} display and is ${
        this.turnedON ? "turned on" : "off"
      }`
    );
  },
};

console.log(phone.message());
