# sphero.py script
# must install spherov2 and Bleak packages
from spherov2 import scanner
from spherov2.sphero_edu import SpheroEduAPI
from spherov2.types import Color
import time

toy = scanner.find_toy(toy_name="SM-2863")
# this with loop ends connection between host and toy
# we could need it to stay connected until manually stopped
# in the main app
with SpheroEduAPI(toy) as sphero:
    sphero.set_main_led(Color(r=0, g=0, b=255))
    sphero.set_speed(60)
    time.sleep(2)
    sphero.set_speed(0)