import numpy as np
import cv2
import time
import request


# def stopwatch(seconds):
#     start = time.time()
#     time.clock()
#     elapsed = 0
#     while elapsed < seconds:
#         elapsed = time.time() - start
#         # time.sleep(1)
#     return True


def captureFrame():
    frameIndex = 1
    videoStream = cv2.VideoCapture(0, cv2.CAP_DSHOW)
    videoStream.set(cv2.CAP_PROP_FRAME_WIDTH, 1080)
    videoStream.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)

    video_start = time.time()
    last_frame_time = time.time()
    while videoStream.isOpened():
        curr_time = time.time()
        if (curr_time - video_start) >= 30.0:
            break

        ret, frame = videoStream.read()
        if ret:
            cv2.imshow('frame', frame)
            if curr_time - last_frame_time >= 8.0:
                cv2.imwrite(str(frameIndex) + '.jpeg', frame)
                # request.req('frame.jpeg')
                frameIndex += 1
                last_frame_time = curr_time

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    videoStream.release()
    cv2.destroyAllWindows()
