from flask import Flask, request, make_response
from UserController import UserController
import mysql.connector as mysql
import hashlib, binascii, peewee
from DatabaseConnection import DatabaseConnection

connection = DatabaseConnection.getConnection()

userController = UserController()
app = Flask("TicTacToe",
            static_url_path='/TicTacToe',
            static_folder='TicTacToe')


def headerHTML():
    return """
    <!DOCTYPE html>
    <html>
        <head>
            <script type="text/javascript" src="TicTacToe.js">
            </script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="TicTacToe.css">
        </head>
    """

def footerHTML():
    return """
        </html>
    """


def bodyHTML(bodyBlock):
    return f"""
    <body>
        {bodyBlock}
    </body>
    """


@app.route('/login')
def logIn():
    return headerHTML() + bodyHTML("Login") + footerHTML()


if __name__ == "__main__":
    app.debug = True
    app.run()
    app.run(debug=True)