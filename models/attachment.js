const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Issue = require('./issues');

const Attachment = sequelize.define('Attachment', {
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
    file_path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uploaded_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false,
    tableName: 'attachments'
});

Issue.hasMany(Attachment, { foreignKey: 'issue_id', onDelete: 'CASCADE' });
Attachment.belongsTo(Issue, { foreignKey: 'issue_id' });

module.exports = Attachment;
