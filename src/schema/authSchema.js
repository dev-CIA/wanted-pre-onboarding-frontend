const authSchema = {
  email: {
    value: '',
    get valid() {
      return /@/.test(this.value);
    },
  },
  password: {
    value: '',
    get valid() {
      return this.value.length >= 8;
    },
  },
};

export default authSchema;
