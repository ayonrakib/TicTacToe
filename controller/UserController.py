import mysql.connector as mysql
import json, hashlib, binascii, peewee
from templates.model.User import User
from templates.library.DatabaseConnection import DatabaseConnection
import templates

class UserController():
    # def __init__(self):
    #     self.databaseConnection = DatabaseConnection.getConnection()

    def hashPassword(self, password):
        if not isinstance(password, str):
            raise Exception("Password should be a string")
        encodedPassword = hashlib.sha512(password.encode('utf-16',errors='strict'))
        hashedPassword = encodedPassword.hexdigest()
        return hashedPassword


    def authenticateUser(self, email, password):
        if not isinstance(email, str):
            raise Exception("email has to be string")
        if not isinstance(password, str):
            raise Exception("password has to be str.")
        password = self.hashPassword(password)
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
                return True
        except templates.User.UserDoesNotExist:
            return False


    def createFromRegistrationForm(self, email, password):
        hashedPassword = self.hashPassword(password)
        user = User.create(email = email, password = hashedPassword)
        return user


# userController = UserController()
# print(userController.authenticateUser("rakib@gmail.com","password"))
# databaseConnection.create_tables([User])

# create 2 users
#   user1 = User(email = "ayon@gmail.com", password = user.hashPassword("password"))
#   print(user1.save())
#   user2 = User(email = "golam@gmail.com", password = user.hashPassword("password"))
#   print(user2.save())

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
