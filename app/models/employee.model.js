module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      firstName: String,
      lastName: String,
      dateOfJoin: String,
      department: String,
      contactNo: String,
      emailID: String,
      highestQualification: String,
      action: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Employee = mongoose.model("employee", schema);
  return Employee;
};
