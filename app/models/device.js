// Device : Phone tablet, etc.
function Device(address, id) {
    this.id = id;
  this.ipAddress = address;
    this.connected = true;
}

Device.prototype.foo = function foo() {
  console.log(this);
};

module.exports = Device;
