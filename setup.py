from library.DatabaseConnection import DatabaseConnection
from model.User import User
from controller.UserController import UserController
from model.gameTable import GameTable
import os


databaseConnection = DatabaseConnection.getConnection()
userController = UserController()

# jokhon table banabo, create_tables function er input hobe list of Class objects
# databaseConnection.create_tables([User,GameTable])
# salt = str(os.urandom(20))
# currentSession = str(os.urandom(20))

# user1 = User.create(email = 'ayon@gmail.com',salt = salt, password = userController.hashPassword("password", salt), currentSession = "")
# user2 = User.create(email = 'eva@gmail.com',salt = salt, password = userController.hashPassword("password", salt), currentSession = "")
# user3 = User.create(email = 'golam@gmail.com',salt = salt, password = userController.hashPassword("password", salt), currentSession = "")
# user4 = User.create(email = 'saad@gmail.com',salt = salt, password = userController.hashPassword("password", salt), currentSession = "")