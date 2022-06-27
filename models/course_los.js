"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    // === LANGKAH 1 UBAH course_los DIBAWAH MENJADI NAMA SESUAI MODEL === 
  class course_los extends Model {

    static associate(models) {}
  }
//   === LANGKAH 2 UBAH NAMA course_los.INIT SESUAI NAMA MODEL ===
  course_los.init(
    {

        // === LANGKAH 3 UBAH DIBAWAH INI SESUAI YANG UDAH DIBUAT SEBELUMNYA ===
          id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          // foreign key
          course_plan_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
          },
      
          type: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          code: {
            type: DataTypes.STRING,
            allowNull: false,
          },
      
          name: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          //foreign key
          parent_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
          },
      
          created_at: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          
          updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
          },
    //   === AKHIR DARI LANGKAH 3 ===


    },
    {
        // LANGKAH 4 UBAH NAMA TABLE NAME SESUAI NAMA MODELS
      tableName: "course_los", //EDIT HANYA INI SAJA -> LANGKAH 4
      sequelize,
      freezeTableName: true,
      timestamps: true,
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
//   LANGKAH 5 UBAH NAMA course_los SESUAI NAMA MODELS
  return course_los; //EDIT HANYA INI SAJA -> LANGKAH 5
};
