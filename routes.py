# Route Declaration
from flask import Flask, render_template, request, make_response
# from UserController import UserController
import mysql.connector as mysql
import hashlib, binascii, peewee
from templates.DatabaseConnection import DatabaseConnection
from templates.User import User
from templates.UserController import UserController

app = Flask("flaskJinja", template_folder="templates", static_folder="", static_url_path="/")
userController = UserController()

# naming convention sobkhane projojjo. eikhane ami likhsi loginForm, but eita form na, pura page. so naam thik korte hobe
# input validation sob backend e thakbe, frontend eo.
# jeigula page geenrate kore, sheigula page. baad baki sob-form, shoho ja ase sob components e thake.
# re usbale page gula ektai layout thakbe. conditional statement diye korte hobe. 

# tasks:
# 1. cookie set
# 2. logout
# 3. validation front end, back end
# 4. jegulas page type, shegula pages namok folder e. baad baki sob components folder e.
@app.route('/')
def home():
    # landing page
    return render_template('home.html',
                            title = "Jinja Demo Site",
                            description = "Smarter page templates with Flask and Jinja"
    )


@app.route('/login')
def logIn():
    return render_template('loginForm.html',
                            action = "authenticate", 
                            pageHeader = "Sign In", 
                            buttonValue = "Sign In")


@app.route('/userRegistration')
def userRegistration():
    return render_template('userRegistration.html', 
                            action = "validateRegistration", 
                            pageHeader = "Register", 
                            buttonValue = "Register")


@app.route('/validateRegistration', methods = ['POST','GET'])
def registrationSuccessful():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        foundUser = userController.findUserByEmail(email)
        # print(foundUser)
        return foundUser


@app.route('/authenticate', methods = ['POST','GET'])
def authenticate():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        if userController.authenticateUser(email, password):
            return "Done!"
        return "Fail!"


if __name__ == "__main__":
    app.debug = True
    app.run()
    app.run(debug=True)