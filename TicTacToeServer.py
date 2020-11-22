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


def headerHTML(headBlock):
    return f"""
    <!DOCTYPE html>
    <html>
        <head>
            {headBlock}
        </head>
    """

def footerHTML():
    return """
        </html>
    """


def bodyHTML(className, bodyBlock):
    return f"""
    <body class = {className}>
        {bodyBlock}
    </body>
    """


@app.route('/login')
def logIn():
    headBlock = """
    <title>
        Tic Tac Toe sign in
    </title>
    <link ref = "https://getbootstrap.com/docs/4.5/dist/css/bootstrap.min.css" rel = "stylesheet" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <meta name="msapplication-config" content="/docs/4.5/assets/img/favicons/browserconfig.xml">
    <style>
        .bd-placeholder-img{
            font-size: 1.125 rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        @media(min-width: 780px){
            .bd-placeholder-img-lg{
                font-size: 3.5rem;
            }
        }
    </style>
    """
    bodyBlock = """
        
            <img class = "mb-4" src = "D:/Python Programming/TicTacToe/loginPic.png" alt width = "80" hieght = "80">
        
    """
    return headerHTML(headBlock) + bodyHTML("text-center", bodyBlock) + footerHTML()


if __name__ == "__main__":
    app.debug = True
    app.run()
    app.run(debug=True)