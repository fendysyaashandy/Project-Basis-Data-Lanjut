module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nama_lengkap: String,
      jenis_kelamin: String,
      tanggal_lahir: String,
      tempat_lahir: String,
      alamat: String,
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model('mahasiswa', schema);
};
