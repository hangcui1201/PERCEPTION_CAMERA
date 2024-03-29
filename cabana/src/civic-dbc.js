import DBC from "./models/can/dbc";

const CivicDbc = new DBC(`
VERSION ""


NS_ :
    NS_DESC_
    CM_
    BA_DEF_
    BA_
    VAL_
    CAT_DEF_
    CAT_
    FILTER
    BA_DEF_DEF_
    EV_DATA_
    ENVVAR_DATA_
    SGTYPE_
    SGTYPE_VAL_
    BA_DEF_SGTYPE_
    BA_SGTYPE_
    SIG_TYPE_REF_
    VAL_TABLE_
    SIG_GROUP_
    SIG_VALTYPE_
    SIGTYPE_VALTYPE_
    BO_TX_BU_
    BA_DEF_REL_
    BA_REL_
    BA_DEF_DEF_REL_
    BU_SG_REL_
    BU_EV_REL_
    BU_BO_REL_
    SG_MUL_VAL_

BS_:

BU_: INTERCEPTOR EBCM NEO ADAS PCM EPS VSA SCM BDY XXX EPB


BO_ 57 XXX_1: 3 XXX

BO_ 148 XXX_2: 8 XXX
 SG_ LAT_ACCEL : 7|10@0+ (0.02,-512) [-20|20] "m/s2"  NEO
 SG_ LONG_ACCEL : 24|9@0- (-0.02,0) [-20|20] "m/s2"  NEO

BO_ 228 STEERING_CONTROL: 5 ADAS
 SG_ STEER_TORQUE : 7|16@0- (1,0) [-3840|3840] "" EPS
 SG_ STEER_TORQUE_REQUEST : 23|1@0+ (1,0) [0|1] "" EPS
 SG_ SET_ME_X00 : 22|7@0+ (1,0) [0|127] "" EPS
 SG_ SET_ME_X00_2 : 31|8@0+ (1,0) [0|0] "" EPS
 SG_ CHECKSUM : 39|4@0+ (1,0) [0|15] "" EPS
 SG_ COUNTER : 33|2@0+ (1,0) [0|3] "" EPS

BO_ 304 GAS_PEDAL2: 8 PCM
 SG_ ENGINE_TORQUE_ESTIMATE : 7|16@0- (1,0) [-1000|1000] "Nm"  NEO
 SG_ ENGINE_TORQUE_REQUEST : 23|16@0- (1,0) [-1000|1000] "Nm"  NEO
 SG_ CAR_GAS : 39|8@0+ (1,0) [0|255] "" NEO

BO_ 330 STEERING_SENSORS: 8 EPS
 SG_ STEER_ANGLE : 7|16@0- (-0.1,0) [-500|500] "deg"  NEO
 SG_ STEER_ANGLE_RATE : 23|16@0- (-1,0) [-3000|3000] "deg/s"  NEO
 SG_ STEER_ANGLE_OFFSET : 39|8@0- (-0.1,0) [-128|127] "deg"  NEO
 SG_ STEER_WHEEL_ANGLE : 47|16@0- (-0.1,0) [-500|500] "deg"  NEO
 SG_ COUNTER : 61|2@0+ (1,0) [0|3] "" NEO
 SG_ CHECKSUM : 59|4@0+ (1,0) [0|3] "" NEO

BO_ 344 POWERTRAIN_DATA: 8 PCM
 SG_ XMISSION_SPEED : 7|16@0+ (0.002759506,0) [0|70] "m/s"  NEO
 SG_ ENGINE_RPM : 23|16@0+ (1,0) [0|15000] "rpm"  NEO
 SG_ XMISSION_SPEED2 : 39|16@0+ (0.002759506,0) [0|70] "m/s"  NEO
 SG_ COUNTER : 61|2@0+ (1,0) [0|3] "" NEO
 SG_ CHECKSUM : 59|4@0+ (1,0) [0|3] "" NEO

BO_ 380 POWERTRAIN_DATA2: 8 PCM
 SG_ PEDAL_GAS : 7|8@0+ (1,0) [0|255] "" NEO
 SG_ ENGINE_RPM : 23|16@0+ (1,0) [0|15000] "rpm"  NEO
 SG_ GAS_PRESSED : 39|1@0+ (1,0) [0|1] "" NEO
 SG_ ACC_STATUS : 38|1@0+ (1,0) [0|1] "rpm"  NEO
 SG_ BOH_17C : 37|5@0+ (1,0) [0|1] "rpm"  NEO
 SG_ BRAKE_LIGHTS_ON : 32|1@0+ (1,0) [0|1] "rpm"  NEO
 SG_ BOH2_17C : 47|10@0+ (1,0) [0|1] "rpm"  NEO
 SG_ BRAKE_PRESSED : 53|1@0+ (1,0) [0|1] "" NEO
 SG_ BOH3_17C : 52|5@0+ (1,0) [0|1] "rpm"  NEO
 SG_ COUNTER : 61|2@0+ (1,0) [0|3] "" NEO
 SG_ CHECKSUM : 59|4@0+ (1,0) [0|3] "" NEO

BO_ 399 STEER_STATUS: 7 EPS
 SG_ STEER_TORQUE_SENSOR : 7|16@0- (1,0) [-31000|31000] "tbd"  NEO
 SG_ STEER_TORQUE_MOTOR : 23|16@0- (1,0) [-31000|31000] "tbd"  NEO
 SG_ STEER_STATUS : 39|4@0+ (1,0) [0|15] "" NEO
 SG_ STEER_CONTROL_ACTIVE : 35|1@0+ (1,0) [0|1] "" NEO
 SG_ COUNTER : 53|2@0+ (1,0) [0|3] "" NEO
 SG_ CHECKSUM : 51|4@0+ (1,0) [0|3] "" NEO

BO_ 401 GEARBOX: 8 PCM
 SG_ GEAR_SHIFTER : 5|6@0+ (1,0) [0|63] "" NEO
 SG_ GEAR : 35|4@0+ (1,0) [0|15] "" NEO
 SG_ COUNTER : 61|2@0+ (1,0) [0|3] "" NEO
 SG_ CHECKSUM : 59|4@0+ (1,0) [0|3] "" NEO

BO_ 420 VSA_STATUS: 8 VSA
 SG_ USER_BRAKE : 7|16@0+ (0.015625,-1.609375) [0|1000] "" NEO
 SG_ ESP_DISABLED : 28|1@0+ (1,0) [0|1] "" NEO
 SG_ COUNTER : 61|2@0+ (1,0) [0|3] "" NEO
 SG_ CHECKSUM : 59|4@0+ (1,0) [0|3] "" NEO

BO_ 427 XXX_3: 3 VSA

BO_ 428 XXX_4: 8 XXX

BO_ 432 STANDSTILL: 7 VSA
 SG_ WHEELS_MOVING : 12|1@0+ (1,0) [0|1] "" NEO
 SG_ BRAKE_ERROR_1 : 11|1@0+ (1,0) [0|1] "" NEO
 SG_ BRAKE_ERROR_2 : 9|1@0+ (1,0) [0|1] "" NEO
 SG_ COUNTER : 53|2@0+ (1,0) [0|3] "" NEO
 SG_ CHECKSUM : 51|4@0+ (1,0) [0|3] "" NEO

BO_ 450 XXX_5: 8 EPB
 SG_ EPB_ACTIVE : 3|1@0+ (1,0) [0|1] "" NEO
 SG_ EPB_STATE : 29|2@0+ (1,0) [0|3] "" NEO

BO_ 464 WHEEL_SPEEDS: 8 VSA
 SG_ WHEEL_SPEED_FL : 7|15@0+ (0.002759506,0) [0|70] "m/s"  NEO
 SG_ WHEEL_SPEED_FR : 8|15@0+ (0.002759506,0) [0|70] "m/s"  NEO
 SG_ WHEEL_SPEED_RL : 25|15@0+ (0.002759506,0) [0|70] "m/s"  NEO
 SG_ WHEEL_SPEED_RR : 42|15@0+ (0.002759506,0) [0|70] "m/s"  NEO
 SG_ CHECKSUM : 59|4@0+ (1,0) [0|3] "" NEO

BO_ 470 XXX_6: 2 VSA

BO_ 476 XXX_7: 7 XXX

BO_ 487 XXX_8: 4 VSA
 SG_ BRAKE_PRESSURE1 : 7|10@0+ (0.015625,-103) [0|1000] "" NEO
 SG_ BRAKE_PRESSURE2 : 9|10@0+ (0.015625,-103) [0|1000] "" NEO

BO_ 490 VEHICLE_DYNAMICS: 8 VSA
 SG_ LONG_ACCEL : 23|16@0- (0.0015384,0) [-20|20] "m/s2"  NEO

BO_ 493 XXX_9: 5 VSA

BO_ 506 BRAKE_COMMAND: 8 ADAS
 SG_ COMPUTER_BRAKE : 7|10@0+ (0.003906248,0) [0|1] "" EBCM
 SG_ ZEROS_BOH : 13|5@0+ (1,0) [0|1] "" EBCM
 SG_ COMPUTER_BRAKE_REQUEST : 8|1@0+ (1,0) [0|1] "" EBCM
 SG_ CRUISE_BOH2 : 23|3@0+ (1,0) [0|1] "" EBCM
 SG_ CRUISE_OVERRIDE : 20|1@0+ (1,0) [0|1] "" EBCM
 SG_ CRUISE_BOH3 : 19|1@0+ (1,0) [0|1] "" EBCM
 SG_ CRUISE_FAULT_CMD : 18|1@0+ (1,0) [0|1] "" EBCM
 SG_ CRUISE_CANCEL_CMD : 17|1@0+ (1,0) [0|1] "" EBCM
 SG_ COMPUTER_BRAKE_REQUEST_2 : 16|1@0+ (1,0) [0|1] "" EBCM
 SG_ SET_ME_0X80 : 31|8@0+ (1,0) [0|1] "" EBCM
 SG_ BRAKE_LIGHTS : 39|1@0+ (1,0) [0|1] "" EBCM
 SG_ CRUISE_STATES : 38|7@0+ (1,0) [0|1] "" EBCM
 SG_ CHIME : 47|3@0+ (1,0) [0|7] "" EBCM
 SG_ ZEROS_BOH6 : 44|1@0+ (1,0) [0|1] "" EBCM
 SG_ FCW : 43|1@0+ (1,0) [0|3] "" EBCM
 SG_ ZEROS_BOH3 : 42|2@0+ (1,0) [0|0] "" EBCM
 SG_ FCW2 : 40|1@0+ (1,0) [0|0] "" EBCM
 SG_ ZEROS_BOH4 : 55|8@0+ (1,0) [0|0] "" EBCM
 SG_ COUNTER : 61|2@0+ (1,0) [0|3] "" EBCM
 SG_ CHECKSUM : 59|4@0+ (1,0) [0|3] "" EBCM

BO_ 512 GAS_COMMAND: 3 NEO
 SG_ GAS_COMMAND : 7|16@0+ (0.253984064,-328) [0|1] "" INTERCEPTOR
 SG_ COUNTER : 21|2@0+ (1,0) [0|3] "" INTERCEPTOR
 SG_ CHECKSUM : 19|4@0+ (1,0) [0|3] "" INTERCEPTOR

BO_ 513 GAS_SENSOR: 5 INTERCEPTOR
 SG_ INTERCEPTOR_GAS : 7|16@0+ (0.253984064,-328) [0|1] "" NEO
 SG_ INTERCEPTOR_GAS2 : 23|16@0+ (0.126992032,-656) [0|1] "" NEO
 SG_ COUNTER : 37|2@0+ (1,0) [0|3] "" NEO
 SG_ CHECKSUM : 35|4@0+ (1,0) [0|3] "" NEO

BO_ 545 XXX_10: 6 XXX

BO_ 597 ROUGH_WHEEL_SPEED: 8 VSA
 SG_ WHEEL_SPEED_FL : 7|8@0+ (1,0) [0|255] "mph"  NEO
 SG_ WHEEL_SPEED_FR : 15|8@0+ (1,0) [0|255] "mph"  NEO
 SG_ WHEEL_SPEED_RL : 23|8@0+ (1,0) [0|255] "mph"  NEO
 SG_ WHEEL_SPEED_RR : 31|8@0+ (1,0) [0|255] "mph"  NEO
 SG_ SET_TO_X55 : 39|8@0+ (1,0) [0|255] "" NEO
 SG_ SET_TO_X55 : 47|8@0+ (1,0) [0|255] "" NEO

BO_ 662 CRUISE_BUTTONS: 4 SCM
 SG_ CRUISE_BUTTONS : 7|3@0+ (1,0) [0|7] "" NEO
 SG_ CRUISE_SETTING : 3|2@0+ (1,0) [0|3] "" NEO

BO_ 773 SEATBELT_STATUS: 7 BDY
 SG_ SEATBELT_DRIVER_LAMP : 7|1@0+ (1,0) [0|1] "" NEO
 SG_ SEATBELT_DRIVER_LATCHED : 13|1@0+ (1,0) [0|1] "" NEO
 SG_ COUNTER : 53|2@0+ (1,0) [0|3] "" NEO
 SG_ CHECKSUM : 51|4@0+ (1,0) [0|3] "" NEO

BO_ 777 XXX_11: 8 XXX

BO_ 780 ACC_HUD: 8 ADAS
 SG_ PCM_SPEED : 7|16@0+ (0.002759506,0) [0|100] "m/s"  BDY
 SG_ PCM_GAS : 23|7@0+ (1,0) [0|127] "" BDY
 SG_ ZEROS_BOH : 16|1@0+ (1,0) [0|255] "" BDY
 SG_ CRUISE_SPEED : 31|8@0+ (1,0) [0|255] "" BDY
 SG_ DTC_MODE : 39|1@0+ (1,0) [0|1] "" BDY
 SG_ BOH : 38|1@0+ (1,0) [0|1] "" BDY
 SG_ ACC_PROBLEM : 37|1@0+ (1,0) [0|1] "" BDY
 SG_ FCM_OFF : 36|1@0+ (1,0) [0|1] "" BDY
 SG_ BOH_2 : 35|1@0+ (1,0) [0|1] "" BDY
 SG_ FCM_PROBLEM : 34|1@0+ (1,0) [0|1] "" BDY
 SG_ RADAR_OBSTRUCTED : 33|1@0+ (1,0) [0|1] "" BDY
 SG_ ENABLE_MINI_CAR : 32|1@0+ (1,0) [0|1] "" BDY
 SG_ HUD_DISTANCE : 47|2@0+ (1,0) [0|3] "" BDY
 SG_ HUD_LEAD : 45|2@0+ (1,0) [0|3] "" BDY
 SG_ BOH_3 : 43|1@0+ (1,0) [0|3] "" BDY
 SG_ BOH_4 : 42|1@0+ (1,0) [0|3] "" BDY
 SG_ BOH_5 : 41|1@0+ (1,0) [0|3] "" BDY
 SG_ CRUISE_CONTROL_LABEL : 40|1@0+ (1,0) [0|3] "" BDY
 SG_ COUNTER : 61|2@0+ (1,0) [0|3] "" BDY
 SG_ CHECKSUM : 59|4@0+ (1,0) [0|3] "" BDY

BO_ 795 XXX_12: 8 XXX

BO_ 800 XXX_13: 8 XXX

BO_ 804 CRUISE: 8 PCM
 SG_ ENGINE_TEMPERATURE : 7|8@0+ (1,0) [0|255] "" NEO
 SG_ BOH : 15|8@0+ (1,0) [0|255] "" NEO
 SG_ TRIP_FUEL_CONSUMED : 23|16@0+ (1,0) [0|255] "" NEO
 SG_ CRUISE_SPEED_PCM : 39|8@0+ (1,0) [0|255] "" NEO
 SG_ BOH2 : 47|8@0- (1,0) [0|255] "" NEO
 SG_ BOH3 : 55|8@0+ (1,0) [0|255] "" NEO
 SG_ COUNTER : 61|2@0+ (1,0) [0|3] "" NEO
 SG_ CHECKSUM : 59|4@0+ (1,0) [0|3] "" NEO

BO_ 806 SCM_FEEDBACK: 8 SCM
 SG_ CMBS_BUTTON : 22|2@0+ (1,0) [0|3] "" NEO
 SG_ MAIN_ON : 28|1@0+ (1,0) [0|1] "" NEO
 SG_ RIGHT_BLINKER : 27|1@0+ (1,0) [0|1] "" NEO
 SG_ LEFT_BLINKER : 26|1@0+ (1,0) [0|1] "" NEO

BO_ 808 XXX_14: 8 XXX

BO_ 829 LKAS_HUD_2: 5 ADAS
 SG_ CAM_TEMP_HIGH : 7|1@0+ (1,0) [0|255] "" BDY
 SG_ BOH : 6|7@0+ (1,0) [0|127] "" BDY
 SG_ DASHED_LANES : 14|1@0+ (1,0) [0|1] "" BDY
 SG_ DTC : 13|1@0+ (1,0) [0|1] "" BDY
 SG_ LKAS_PROBLEM : 12|1@0+ (1,0) [0|1] "" BDY
 SG_ LKAS_OFF : 11|1@0+ (1,0) [0|1] "" BDY
 SG_ SOLID_LANES : 10|1@0+ (1,0) [0|1] "" BDY
 SG_ LDW_RIGHT : 9|1@0+ (1,0) [0|1] "" BDY
 SG_ STEERING_REQUIRED : 8|1@0+ (1,0) [0|1] "" BDY
 SG_ BOH : 23|2@0+ (1,0) [0|4] "" BDY
 SG_ LDW_PROBLEM : 21|1@0+ (1,0) [0|1] "" BDY
 SG_ BEEP : 17|2@0+ (1,0) [0|1] "" BDY
 SG_ LDW_ON : 28|1@0+ (1,0) [0|1] "" BDY
 SG_ LDW_OFF : 27|1@0+ (1,0) [0|1] "" BDY
 SG_ CLEAN_WINDSHIELD : 26|1@0+ (1,0) [0|1] "" BDY
 SG_ SET_ME_X48 : 31|8@0+ (1,0) [0|255] "" BDY
 SG_ COUNTER : 37|2@0+ (1,0) [0|3] "" BDY
 SG_ CHECKSUM : 35|4@0+ (1,0) [0|3] "" BDY

BO_ 862 XXX_15: 8 ADAS
 SG_ UI_ALERTS : 7|56@0+ (1,0) [0|127] "" BDY

BO_ 884 XXX_16: 8 XXX

BO_ 891 XXX_17: 8 XXX

BO_ 892 XXX_18: 8 XXX

BO_ 927 XXX_19: 8 ADAS
 SG_ ZEROS_BOH : 7|17@0+ (1,0) [0|127] "" BDY
 SG_ APPLY_BRAKES_FOR_CANC : 23|1@0+ (1,0) [0|15] "" BDY
 SG_ ZEROS_BOH2 : 22|1@0+ (1,0) [0|1] "" BDY
 SG_ RESUME_INSTRUCTION : 21|1@0+ (1,0) [0|15] "" BDY
 SG_ ACC_ALERTS : 20|5@0+ (1,0) [0|15] "" BDY
 SG_ ZEROS_BOH2 : 31|8@0+ (1,0) [0|127] "" BDY
 SG_ LEAD_SPEED : 39|9@0+ (1,0) [0|127] "" BDY
 SG_ LEAD_STATE : 46|3@0+ (1,0) [0|127] "" BDY
 SG_ LEAD_DISTANCE : 43|5@0+ (1,0) [0|31] "" BDY
 SG_ ZEROS_BOH3 : 54|7@0+ (1,0) [0|127] "" BDY

BO_ 929 XXX_20: 8 XXX

BO_ 985 XXX_21: 3 XXX

BO_ 1024 XXX_22: 5 XXX

BO_ 1027 XXX_23: 5 XXX

BO_ 1029 DOORS_STATUS: 8 BDY
 SG_ DOOR_OPEN_FL : 37|1@0+ (1,0) [0|1] "" NEO
 SG_ DOOR_OPEN_FR : 38|1@0+ (1,0) [0|1] "" NEO
 SG_ DOOR_OPEN_RL : 39|1@0+ (1,0) [0|1] "" NEO
 SG_ DOOR_OPEN_RR : 40|1@0+ (1,0) [0|1] "" NEO
 SG_ COUNTER : 61|2@0+ (1,0) [0|3] "" NEO
 SG_ CHECKSUM : 59|4@0+ (1,0) [0|3] "" NEO

BO_ 1036 XXX_24: 8 XXX

BO_ 1039 XXX_25: 8 XXX

BO_ 1108 XXX_26: 8 XXX

BO_ 1302 XXX_27: 8 XXX

BO_ 1322 XXX_28: 5 XXX

BO_ 1361 XXX_29: 5 XXX

BO_ 1365 XXX_30: 5 XXX

BO_ 1424 XXX_31: 5 XXX

BO_ 1600 XXX_32: 5 XXX

BO_ 1601 XXX_33: 8 XXX

BO_ 1633 XXX_34: 8 XXX

BO_TX_BU_ 228 : NEO,ADAS;
BO_TX_BU_ 506 : NEO,ADAS;
BO_TX_BU_ 780 : NEO,ADAS;
BO_TX_BU_ 829 : NEO,ADAS;
BO_TX_BU_ 862 : NEO,ADAS;
BO_TX_BU_ 927 : NEO,ADAS;


CM_ SG_ 401 GEAR "10 = reverse, 11 = transition";
CM_ SG_ 490 LONG_ACCEL "wheel speed derivative, noisy and zero snapping";
CM_ SG_ 780 CRUISE_SPEED "255 = no speed";
CM_ SG_ 804 CRUISE_SPEED_PCM "255 = no speed";
CM_ SG_ 829 BEEP "beeps are pleasant, chimes are for warnngs etc...";
VAL_ 399 STEER_STATUS 5 "fault" 4 "no_torque_alert_2" 2 "no_torque_alert_1" 0 "normal" ;
VAL_ 401 GEAR_SHIFTER 32 "L" 16 "S" 8 "D" 4 "N" 2 "R" 1 "P" ;
VAL_ 450 EPB_STATE 3 "engaged" 2 "disengaging" 1 "engaging" 0 "disengaged" ;
VAL_ 506 CHIME 4 "double_chime" 3 "single_chime" 2 "continuous_chime" 1 "repeating_chime" 0 "no_chime" ;
VAL_ 662 CRUISE_BUTTONS 7 "tbd" 6 "tbd" 5 "tbd" 4 "accel_res" 3 "decel_set" 2 "cancel" 1 "main" 0 "none" ;
VAL_ 662 CRUISE_SETTING 3 "distance_adj" 2 "tbd" 1 "lkas_button" 0 "none" ;
VAL_ 780 CRUISE_SPEED 255 "no_speed" 252 "stopped" ;
VAL_ 780 HUD_LEAD 3 "acc_off" 2 "solid_car" 1 "dashed_car" 0 "no_car" ;
VAL_ 806 CMBS_BUTTON 3 "pressed" 0 "released" ;
VAL_ 829 BEEP 3 "single_beep" 2 "triple_beep" 1 "repeated_beep" 0 "no_beep" ;
VAL_ 927 ACC_ALERTS 29 "esp_active_acc_canceled" 10 "b_pedal_applied" 9 "speed_too_low" 8 "speed_too_high" 7 "p_brake_applied" 6 "gear_no_d" 5 "seatbelt" 4 "too_steep_downhill" 3 "too_steep_uphill" 2 "too_close" 1 "no_vehicle_ahead" ;

`);
export default CivicDbc;
