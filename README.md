## PERCEPTION_CAMERA

### Panda OBD-II Interface

$ sudo pip install pandacan  

#### Setup udev rules for Linux

$ sudo -i  
$ echo 'SUBSYSTEMS=="usb", ATTR{idVendor}=="bbaa", ATTR{idProduct}=="ddcc", MODE:="0666"' > /etc/udev/rules.d/11-panda.rules  
$ exit  

#### Receive CAN messages

from panda import Panda  
panda = Panda()  
panda.can_recv()  

#### Send one on bus 0

panda.can_send(0x1aa, "message", 0)

[Reference Wiki Tutorials](https://community.comma.ai/wiki/index.php/Panda_scripts)

