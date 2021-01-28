import peewee
from library.DatabaseConnection import DatabaseConnection

class User(peewee.Model):
    id = peewee.AutoField()
    email = peewee.CharField(unique=True)
    password = peewee.CharField()
    currentSession = peewee.CharField()
    salt = peewee.CharField()
    class Meta:
        database = DatabaseConnection.getConnection()


# peewee te init likhle parameter er default value dewa lagbe. jodi init function na likhi, taile class.create naam e 
# function call kore database e entry koraite parbo. jodi object banaite chai, init likha lagbe and parameter e default value lagbe
# standard way hoccher: .create kore kora. init diye kora DB er perspective e standard na

# databse connection ekta alda connection file e thakbe. oi file sobkhane include korbo.
# joto jaygay DB connection dorkar, oi same file include korbo. oi file e database.connect() thakbe.
# signup, registration kore rakhbo. flask dhukabo. File er naam User hobe, app er naam TicTacToe.


# assignemnt:
# static method: createFromRegistrationForm
# email nibe, pass nibe parameter hishebe. pass hashing ta er moddhei korbe. controller janbe na kivabe hash hocche.
# ei hash korbe and db te save korbe. save er pore return korbe user object.

    # def __init__(self, email, password):
    #     self.email = email
    #     self.password = password


    def __str__(self):
        return f"The email of the user is {self.email}"
    

    def getEmail(self):
        return self.email


    def setEmail(self, email):
        self.email = self.email

    
    def getCurrentSession(self):
        return self.getCurrentSession


    def setCurrentSession(self, currentSession):
        self.currentSession = currentSession


    def getSalt(self):
        return self.salt