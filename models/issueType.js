const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const IssueType = sequelize.define('IssueType', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'issue_types'
});

module.exports = IssueType;
