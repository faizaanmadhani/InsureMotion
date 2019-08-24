import json
import request
import video

#Requests library: HTTP For Humans
import requests

# json_data ='[{"faceRectangle":{"top":141,"left":130,"width":162,"height":162},"faceAttributes":{"emotion":{"anger":0.0,"contempt":0.0,"disgust":0.0,"fear":0.0,"happiness":0.196,"neutral":0.0,"sadness":0.0,"surprise":0.803}}}]'

video.captureFrame()

try:
    json_dump_1 = request.req('1.jpeg')
    json_dump_2 = request.req('2.jpeg')
    json_dump_3 = request.req('3.jpeg')
except:
    print("The images do not exist, or the API Call was not successful. Reloading the camera...")
    video.captureFrame()

y1 = (json.loads(json_dump_1))
y2 = (json)
# print( y[0]['faceAttributes']['emotion']['anger'])


def distraction(y):
    surprise = y[0]['faceAttributes']['emotion']['surprise']

    if (surprise >= 0.3):
        return surprise

    return 0


def road_rage(y):
        anger = y[0]['faceAttributes']['emotion']['anger']
        contempt = y[0]['faceAttributes']['emotion']['contempt']
        disgust = y[0]['faceAttributes']['emotion']['disgust']
        fear = y[0]['faceAttributes']['emotion']['fear']

        if (anger >= 0.6):
            return (((3 * anger) + (2 * fear) + (1 * disgust) + (1 * contempt)) / 6) 

        return 0

for i in range 3:


data = {}

road_rage

data['distraction'] = 





