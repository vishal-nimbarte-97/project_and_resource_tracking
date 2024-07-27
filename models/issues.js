const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Project = require('./project');
const User = require('./user');
const IssueType = require('./issueType');
const Status = require('./status');

const Issue = sequelize.define('Issue', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    project_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Project,
            key: 'id'
        }
    },
    reporter_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    assignee_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    issue_type_id: {
        type: DataTypes.INTEGER,
        references: {
            model: IssueType,
            key: 'id'
        }
    },
    status_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Status,
            key: 'id'
        }
    },
    priority: {
        type: DataTypes.STRING,
        allowNull: false
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: true,
    tableName: 'issues'
});


// Define associations
Project.hasMany(Issue, { foreignKey: 'project_id', onDelete: 'CASCADE' });
Issue.belongsTo(Project, { foreignKey: 'project_id' });

User.hasMany(Issue, { foreignKey: 'reporter_id', as: 'reported_issues' });
User.hasMany(Issue, { foreignKey: 'assignee_id', as: 'assigned_issues' });
Issue.belongsTo(User, { as: 'reporter', foreignKey: 'reporter_id' });
Issue.belongsTo(User, { as: 'assignee', foreignKey: 'assignee_id' });

IssueType.hasMany(Issue, { foreignKey: 'issue_type_id', onDelete: 'CASCADE' });
Issue.belongsTo(IssueType, { foreignKey: 'issue_type_id' });

Status.hasMany(Issue, { foreignKey: 'status_id', onDelete: 'CASCADE' });
Issue.belongsTo(Status, { foreignKey: 'status_id' });

module.exports = Issue;
