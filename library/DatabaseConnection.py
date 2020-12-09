import peewee
import mysql.connector as mysql


class DatabaseConnection():
    # static method getConnection
    # return: database connection object
    # jodi existing object thake, sheita return korbe. otherwise notun kore abanye return
    # return korar aage jokhon object banabo, taile connect function tao call kora lagbe
    existingDatabaseConnection = None
    @staticmethod
    def getConnection():
        if DatabaseConnection.existingDatabaseConnection is None:
            DatabaseConnection.existingDatabaseConnection = peewee.MySQLDatabase("tictactoe",host = "localhost", user = "root", password = "Hahaha01670", port = 3306)
            DatabaseConnection.existingDatabaseConnection.connect()
            return DatabaseConnection.existingDatabaseConnection
        return DatabaseConnection.existingDatabaseConnection