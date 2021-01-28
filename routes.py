# Route Declaration
from flask import Flask, render_template, request, make_response, redirect, url_for
import mysql.connector as mysql
import hashlib, binascii, peewee
from library.DatabaseConnection import DatabaseConnection
from model.User import User
from controller.UserController import UserController
import os, peewee
import logging
logger = logging.getLogger('peewee')
logger.addHandler(logging.StreamHandler())
logger.setLevel(logging.DEBUG)


app = Flask("flaskJinja", template_folder="templates", static_folder="", static_url_path="/")
userController = UserController()

# naming convention sobkhane projojjo. eikhane ami likhsi loginForm, but eita form na, pura page. so naam thik korte hobe
# input validation sob backend e thakbe, frontend eo.
# jeigula page geenrate kore, sheigula page. baad baki sob-form, shoho ja ase sob components e thake.
# re usbale page gula ektai layout thakbe. conditional statement diye korte hobe. 
# jodi relative import hoy, taile proti ta file tar current directory er baire jabe na. so relative import kora jabe na.
# by default current directory = jei script execute kortesi sheitar directory
# so, relative import er jaygay baire setup.py file rakhte hobe.

# tasks:
# 1. cookie set
# 2. logout
# 3. validation front end, back end
# 4. jegulas page type, shegula pages namok folder e. baad baki sob components folder e.

# plan:
#   1. database set korbo. gameTable. 1st player ke, 2nd player ke. game id, date, time
#   2. moveTable-ke kon move dise
#   3. db hocche communication er way, ke kon move dicche 


# ekta user jokhon authenticate korbe, tokhon welcome screen thakbe. play gamne button e click korle dekhbe kon player er sathe khelbe
# player 2/3 select korbo. jeitai korbo na ken, ekta game table banabe db te. je login korbe she player 1, bakira id hishebe player
# jei id(player) select korbo, game start hobe. je game start 

@app.route('/')
def home():
    # landing page
    return redirect(url_for('logIn'))


@app.route('/login')
def logIn():
    currentSession = request.cookies.get('currentSession')
    if currentSession is None:
        return render_template('loginForm.html',
                                action = "authenticate", 
                                pageHeader = "Sign In",
                                errorMessage = "",
                                buttonValue = "Sign In")
    response = redirect(url_for('homePage'))
    return response


@app.route('/userRegistration')
def userRegistration():
    return render_template('userRegistration.html', 
                            action = "validateRegistration", 
                            pageHeader = "Register", 
                            userFound = "",
                            buttonValue = "Register")


@app.route('/validateRegistration', methods = ['POST','GET'])
def registrationSuccessful():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        foundUser = userController.findUserByEmail(email)
        if foundUser == "User found":
            return render_template('userRegistration.html',
                                    action = "validateRegistration", 
                                    pageHeader = "Register", 
                                    userFound = "User Found",
                                    buttonValue = "Register")
        elif foundUser == "User Not found":
            userController.createUserFromRegistrationForm(email, password)
            return render_template('newUserCreated.html',
                                    action="playgame",
                                    pageHeader="Click to Play game",
                                    buttonValue="Play Game")


def setCurrentSession(currentSession, email):
    if currentSession == "":
        currentSession = request.cookies.get('currentSession')
        currentUser = User.get(User.currentSession == currentSession)
        currentUser.currentSession = ""
        currentUser.save()
    else:
        currentUser = User.get(User.email == email)
        currentUser.currentSession = currentSession
        currentUser.save()


@app.route('/authenticate', methods = ['POST','GET'])
def authenticate():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        if userController.authenticateUser(email, password):
            currentSession = str(os.urandom(20))
            response = make_response(redirect(url_for('homePage')))
            response.set_cookie('email',email)
            response.set_cookie('currentSession',currentSession)
            setCurrentSession(currentSession, email)
            return response
        return render_template('loginForm.html',
                                action = "authenticate",
                                pageHeader = "Sign in",
                                errorMessage = "Failed to login!",
                                buttonValue = "Submit"
        )


@app.route('/logout')
def logOut():
    setCurrentSession("", "")
    response = make_response(redirect(url_for('logIn')))
    response.set_cookie('email', expires=0)
    response.set_cookie('currentSession', expires=0)
    return response


@app.route('/homepage')
def homePage():
    print("authentic user")
    response = make_response(render_template('homePage.html',
                                            action = 'playgame',
                                            pageHeader = 'Select any game'))
    return response


@app.route('/tictactoe')
def playGame():
    return render_template('tictactoe.html')


if __name__ == "__main__":
    app.debug = True
    app.run()
    app.run(debug=True)


# social games naam er ekta app, user registration, authenticate korbe, onno user er naam/id diye search korbe
# friend request pathabe, oi friend accept korle friend hishebe joma hobe
# eibar, template folder e sob file eksathe rakha jabe na, feature onujayi folder vaag korbo
# jemon, login/registration/account settings-user naam er folder e thakbe, user related sobkjisu ek folder e thakbe
# jei partgula common-header, footer-arekta footer naam hobe commons
# 1. user search korbe kivabe? friend list ekta page thabe-myaccount er niche ekta page thakbe myfriendlist, shuru te blank thakbe
# bootstrap theke layout nibo, kono user list dekhano jabe na. search korte hobe. name/id diye search kora jabe
# arekta part thakbe: invite by email. she system e nai, invite korbe email e
# so, jokhon search korbe, backend e function thakbe jeita db theke search korbe: searchByNameOrEmail, so duitai search korte parbe
# naam ta substring hoileo hobe. ajax/jquery diye ashte hobe, kono page reload hobe na.
# list of user pabo. sheita user ke show korbo ajax diye, page reload hobe na
# temporary div e search result show korbo. she jeita select korbe, sheita ke friend req pathabo
# pathaile-table lagbe, userId, friendId naam e field thakbe, status-requested/accepted/rejected naam e value thakbe