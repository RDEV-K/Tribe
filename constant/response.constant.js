class responseModel {
  constructor() {
    this.source = undefined;
    this.setStatus("");
    this.setData("");
    this.setError("");
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  setError(error) {
    this.error = error;
  }

  getError() {
    return this.error;
  }
}

module.exports = responseModel;
