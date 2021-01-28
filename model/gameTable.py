import peewee
from library.DatabaseConnection import DatabaseConnection
from model.User import User

# user id primary key, so user id ke primary key hishebe to_field dite hobe
class GameTable(peewee.Model):
    gameId = peewee.AutoField()
    firstPlayer = peewee.ForeignKeyField(User, to_field="id")
    secondPlayer = peewee.ForeignKeyField(User, to_field="id")
    date = peewee.DateTimeField()
    time = peewee.TimestampField()

    class Meta:
        database = DatabaseConnection.getConnection()
        # table_name = 'gametable'