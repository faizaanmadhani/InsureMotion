import numpy as np
import cv2

videoStream = cv2.VideoCapture(0)

while videoStream.isOpened():
    ret, frame = videoStream.read()
    if ret:
        cv2.imshow('frame', frame)
    k = cv2.waitKey(0) & 0xFF
    if k == 27:  # wait for ESC key to exit
        break
    elif k == ord('s'):  # wait for 's' key to save and exit
        cv2.imwrite('frame.png', frame)
        break

videoStream.release()
cv2.destroyAllWindows()
