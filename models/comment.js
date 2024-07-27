const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = require('./user');
const Issue = require('./issues');

const Comment = sequelize.define('Comment', {
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
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    // created_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW
    // },
    // updated_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW
    // }
}, {
    timestamps: true,
    tableName: 'comments',
    // underscored: true
});

User.hasMany(Comment, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

Issue.hasMany(Comment, { foreignKey: 'issue_id', onDelete: 'CASCADE' });
Comment.belongsTo(Issue, { foreignKey: 'issue_id' });

module.exports = Comment;
