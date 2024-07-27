const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Project = require('./project');
const User = require('./user');

const ProjectUser = sequelize.define('ProjectUser', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    project_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Project,
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'project_users'
});

// Relationships
Project.hasMany(ProjectUser, { foreignKey: 'project_id' });
User.hasMany(ProjectUser, { foreignKey: 'user_id' });

ProjectUser.belongsTo(Project, { foreignKey: 'project_id' });
ProjectUser.belongsTo(User, { foreignKey: 'user_id' });

module.exports = ProjectUser;
