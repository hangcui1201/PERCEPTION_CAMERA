import sys, cv2
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *
from PyQt5.QtCore import *

class Video(QMainWindow):

    def __init__(self, cam):

        super().__init__()

        self.cam = cam
        self.width = self.cam.get(cv2.CAP_PROP_FRAME_WIDTH)
        self.height = self.cam.get(cv2.CAP_PROP_FRAME_HEIGHT)

        self.setGeometry(20, 20, self.width+10, self.height+10)
        self.setWindowTitle('Webcam')

        self.cam_frame = QLabel()
        self.setCentralWidget(self.cam_frame)
        self.cam_frame.setAlignment(Qt.AlignCenter)

        self._timer = QTimer(self)
        self._timer.timeout.connect(self.play)
        self._timer.start(25)

    def play(self):
        ret, frame = self.cam.read()
        # print(QImage.Format_RGB888)
        if ret:
            self.cam_frame.setPixmap(QPixmap.fromImage( \
                QImage(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB), self.width, self.height, QImage.Format_RGB888)))


if __name__ == '__main__':

    app = QApplication(sys.argv)
    win = Video(cv2.VideoCapture(1))
    win.show()
    sys.exit(app.exec_())
