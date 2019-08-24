import requests
import json

# image_url = 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/05/931/524/elon-musk-Reuters.jpg?ve=1&tl=1'

def req(image_url):
    subscription_key = "49d96483fc4e479a8026e96a2d9f7e02"
    assert subscription_key

    face_api_url = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect'

    headers = {'Ocp-Apim-Subscription-Key': subscription_key}

    params = {
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'false',
        'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise',
    }

    response = requests.post(face_api_url, params=params,
                             headers=headers, json={"url": image_url})
    return json.dumps(response.json())

