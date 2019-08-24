import json
import request
import video
# from flask import Flask

# Requests library: HTTP For Humans
import requests

# json_data ='[{"faceRectangle":{"top":141,"left":130,"width":162,"height":162},"faceAttributes":{"emotion":{
# "anger":0.0,"contempt":0.0,"disgust":0.0,"fear":0.0,"happiness":0.196,"neutral":0.0,"sadness":0.0,
# "surprise":0.803}}}]'

# app = Flask(__name__)
# @app.route('/')


def processor():
    video.captureFrame()

    try:
        json_dump_1 = request.req('1.jpeg')
        json_dump_2 = request.req('2.jpeg')
        json_dump_3 = request.req('3.jpeg')
    except:
        print("The images do not exist, or the API Call was not successful. Reloading the camera...")
        video.captureFrame()

    emotion1 = json.loads(json_dump_1)
    emotion2 = json.loads(json_dump_2)
    emotion3 = json.loads(json_dump_3)

    # print( y[0]['faceAttributes']['emotion']['anger'])

    def takeEmotionAverage(emotion, y1, y2, y3):
        score1 = y1[0]['faceAttributes']['emotion'][emotion]
        score2 = y2[0]['faceAttributes']['emotion'][emotion]
        score3 = y3[0]['faceAttributes']['emotion'][emotion]
        return (score1 + score2 + score3) / 3

    def distraction(y1, y2, y3):
        surprise = takeEmotionAverage('surprise', y1, y2, y3)

        if surprise >= 0.3:
            return surprise

        return 0

    def road_rage(y1, y2, y3):
        anger = takeEmotionAverage('anger', y1, y2, y3)
        contempt = takeEmotionAverage('contempt', y1, y2, y3)
        disgust = takeEmotionAverage('disgust', y1, y2, y3)
        fear = takeEmotionAverage('fear', y1, y2, y3)

        # if anger >= 0.0:
        return ((3 * anger) + (2 * fear) + (1 * disgust) + (1 * contempt)) / 6

        # return 0

    distraction_score = distraction(emotion1, emotion2, emotion3)
    road_rage_score = road_rage(emotion1, emotion2, emotion3)
    data = {'distraction': distraction_score, 'road_rage': road_rage_score}

    return data

    # r = requests.post(url='local host', data=data)
