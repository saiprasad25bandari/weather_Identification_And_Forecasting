
from flask import Flask, request, Response, jsonify
import cv2
import numpy as np
import tensorflow
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
SIZE = 224
count = 0
model = tensorflow.keras.models.load_model('weather_dl_model.h5')
@app.route('/', methods=['POST'])
def index():
    
    # model = pickle.load(open('weather_model (1).pkl', 'rb'))
    # model.predict()

    print(request.files)

    image_file = request.files['image']

    # Read and preprocess the image
    image = cv2.imdecode(np.fromstring(image_file.read(), np.uint8), cv2.IMREAD_COLOR)
    image = cv2.resize(image, (SIZE, SIZE), interpolation=cv2.INTER_AREA)
    image = np.expand_dims(image, axis=0)

    # Make predictions
    predictions = model.predict(image)
    predicted_class = np.argmax(predictions)

    # Get the predicted class name based on the label
    class_names = ['cloudy', 'rain', 'sunny', 'lightning','snow']  # Replace with your actual class names
    predicted_class_name = class_names[predicted_class]

    return jsonify({'predicted_class': predicted_class_name})
if __name__== "__main__":
    app.run(debug=True)











