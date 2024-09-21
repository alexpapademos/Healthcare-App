# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, render_template, Response, request
import numpy as np
import pickle
import requests
from flask_cors import CORS, cross_origin

 
# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)

CORS(app)
 
# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/')
# ‘/’ URL is bound with hello_world() function.
def hello_world():
    return 'Hello World'

@cross_origin
@app.route('/predict_api', methods=['POST'])
def prediction_progress_condition_weather_api():
    try:
        
        # featuresNumerical = [1, 26, 14, 300, 50, 25, 14, 11, 15, 13, 8, 7, 0]
        # data = [np.array(featuresNumerical)]
        data = [np.array(request.json['data'])]
        try:
            prediction = pickle.load(
                open("analytics_models/" + request.json['model_name'] + "_model.pkl", 'rb')).predict(data)
            s2 = re.sub("_model", "", str(request.json['model_name']))
        except Exception as e:
            print(e)
            prediction = pickle.load(open("analytics_models/LogisticRegression_model.pkl", 'rb')).predict(data)
            s2 = 'Logistic Regression'
        prediction_value = prediction[0]
        if prediction_value == 1:
            result = 'Υπάρχει πιθανότητα για Diabetes'
        else:
            result = 'Δεν υπάρχει πιθανότητα για Diabetes'
        return Response(result + "  \n ενώ το μοντέλο που χρησιμοποιήθηκε για την πρόβλεψη είναι " + s2, status=200,
                        mimetype="text/plain")
    except Exception as e:
        print(e)
        return Response("Κάτι πήγε στραβά. Παρακαλούμε ελέγξτε τα δεδομένα σας", status=500,
                        mimetype="text/plain")
 
# main driver function
if __name__ == '__main__':
 
    # run() method of Flask class runs the application
    # on the local development server.
    app.run()