/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kitchen_display', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    predicted: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created_till_now: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'kitchen_display'
  });
};
