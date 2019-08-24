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
    videoStream = cv2.VideoCapture(0, cv2.CAP_DSHOW)

    # Define the codec and create VideoWriter object
    fourcc = cv2.VideoWriter_fourcc(*'XVID')
    out = cv2.VideoWriter('output.mp4', fourcc, 20.0, (640, 480))

    start = time.time()
    while videoStream.isOpened():
        if (time.time() - start) >= 30.0:
            break
        ret, frame = videoStream.read()
        if ret:
            cv2.imshow('frame', frame)
            out.write(frame)
        # if cv2.waitKey(1) & 0xFF == ord('q'):
        #   break

    videoStream.release()
    out.release()
    cv2.destroyAllWindows()

    videoStream = cv2.VideoCapture('output.mp4')
    frameIndex = 1
    last_recorded_time = time.time()
    while videoStream.isOpened():
        curr_time = time.time()
        ret, frame = videoStream.read()

        if ret and (curr_time - last_recorded_time >= 10.0):
            cv2.imwrite(str(frameIndex) + '.jpeg', frame)
            # request.req('frame.jpeg')
            frameIndex += 1
            last_recorded_time = curr_time

    videoStream.release()
    cv2.destroyAllWindows()


captureFrame()
