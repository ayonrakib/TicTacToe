import mysql.connector as mysql
import json, hashlib, binascii, peewee
from model.User import User
from library.DatabaseConnection import DatabaseConnection
import peewee, os


class UserController():
    # def __init__(self):
    #     self.databaseConnection = DatabaseConnection.getConnection()
    def getUserSalt(self, email):
        return User.get(User.email == email).getSalt()


    def hashPassword(self, password, salt):
        if not isinstance(password, str):
            raise Exception("Password should be a string")
        password = salt + password
        encodedPassword = hashlib.sha512(password.encode('utf-16',errors='strict'))
        hashedPassword = encodedPassword.hexdigest()
        return hashedPassword


    def authenticateUser(self, email, password):
        if not isinstance(email, str):
            raise Exception("email has to be string")
        if not isinstance(password, str):
            raise Exception("password has to be str.")
        userSalt = self.getUserSalt(email)
        password = self.hashPassword(password, userSalt)
        try:
            if User.get(User.email == email) and User.get(User.password == password):
                return True
        except:
            return False

# user jei data pathay sob string, so email str kina check dorkar nai.
    def findUserByEmail(self, email):
        # if not isinstance(email, str):
        #     raise Exception("Email is not a string")
# bivinno exception khaite paare: db down, busy, user paay nai, fail korse db te.
# user related kaaj gula show korbo, baki sob log korbo.
        try: 
            if User.get(User.email == email):
                return "User found"
        except peewee.DoesNotExist:
            return "User Not found"


    def createUserFromRegistrationForm(self, email, password):
        salt = str(os.urandom(20))
        currentSession = str(os.urandom(20))
        user = User.create(email = email, password = self.hashPassword(password, salt), salt = salt, currentSession = currentSession)
        return user


# userController = UserController()
# print(userController.authenticateUser("rakib@gmail.com","password"))
# databaseConnection.create_tables([User])

# create 2 users
# user1 = User(email = "ayon@gmail.com", password = userController.hashPassword("password"))
# print(user1.save())
# user2 = User(email = "golam@gmail.com", password = userController.hashPassword("password"))
# print(user2.save())

# emails are unique, so this user will throw errors
#   user3 = User(email = "golam@gmail.com", password = user.hashPassword("password"))
#   print(user3.save())

# update user email field
#   user1 = User.get(User.id == 1)
#   user1.email = "ayon@gmail.com"
#   print(user1.save())

# update user password field with hash
#   user1 = User.get(User.id == 1)
#   user1.password = user.hashPassword("password")
#   print(user1.save())

# update current session
#   user1 = User.get(User.id == 1)
#   user1.currentSession = ""
