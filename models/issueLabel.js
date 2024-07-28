const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Issue = require('./issues');
const Label = require('./label');

const IssueLabel = sequelize.define('IssueLabel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    issue_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Issue,
            key: 'id'
        },
        allowNull: false
    },
    label_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Label,
            key: 'id'
        },
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'issue_labels'
});

// Define associations
// Issue.hasMany(IssueLabel, { foreignKey: 'issue_id', onDelete: 'CASCADE' });
// IssueLabel.belongsTo(Issue, { foreignKey: 'issue_id' });

// Label.hasMany(IssueLabel, { foreignKey: 'label_id', onDelete: 'CASCADE' });
// IssueLabel.belongsTo(Label, { foreignKey: 'label_id' });

//IssueLables.js

// Define associations
Issue.belongsToMany(Label, { through: IssueLabel, foreignKey: 'issue_id' });
Label.belongsToMany(Issue, { through: IssueLabel, foreignKey: 'label_id' });


module.exports = IssueLabel;
