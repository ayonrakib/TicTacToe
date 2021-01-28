import peewee
from library.DatabaseConnection import DatabaseConnection
from model.gameTable import GameTable
from model.User import User


# class MoveTable
# id auto increment
# gameId hobe foreign key field, gametable er gameId ke reference
# firstPlayerId foreign key field, User er id reference
# secondPlayerId foreign key field, User er id reference
# firstPlayerMove character, X/O
# secondPlayerMove character, X/O