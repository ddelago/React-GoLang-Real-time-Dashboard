#include <string>
#include <cstdio>
#include <cstdlib>
#include <cstring>

#include "dcapp.hh"

#include "subsystem_alarm.hh"
#include "amps.hh"
#include "magic_power.hh"
#include "pcs.hh"
#include "cabin.hh"
#include "etcs.hh"
#include "gnc.hh"

extern void generic_keyboard_init(void);
extern void generic_keyboard_logic(char *, const size_t);
extern void robo_logic(void);
extern void aercam_logic(void);
extern void lights_logic(void);
extern void docking_logic(void);
extern void eam_ars_logic(void);
extern void hab_cal_logic(void);
extern void hal_ars_logic(void);
extern void hal_ars_rca_logic(void);
extern void hal_tcs_logic(void);
extern void hal_potable_init(void);
extern void hal_potable_logic(void);
extern void hal_waste_init(void);
extern void hal_waste_logic(void);
extern void hal_airlock_logic(void);
extern void airlock_logic(void);
extern void itcs_logic(void);
extern void etcs_rad_logic(void);
extern void hal_general_info_logic(void);
extern void hab_general_info_logic(void);
extern void basic_water_logic(void);
extern void telescope_logic(void);
extern void time_init(void);
extern void time_logic(void);

static Gnc * mpcv_gnc = nullptr, * pm_gnc = nullptr;
static Etcs * etcs_a = nullptr, * etcs_b = nullptr;
static SubsystemAlarm * hab_alarm = nullptr, * hal_alarm = nullptr;
static Amps * hab_amps = nullptr, * hal_amps = nullptr;
static MagicPower * hab_magic_power = nullptr, * hal_magic_power = nullptr;
static Pcs * eam_pcs = nullptr, * hal_pcs = nullptr, * orion_pcs = nullptr;
static Cabin * eam_cabin = nullptr, * hal_cabin = nullptr, * orion_cabin = nullptr;

extern "C" void DisplayInit(void)
{
    generic_keyboard_init();
    time_init();
    hal_potable_init();
    hal_waste_init();

    mpcv_gnc = new Gnc("MPCV");
    pm_gnc = new Gnc("PM");

    etcs_a = new Etcs("ETCSA");
    etcs_b = new Etcs("ETCSB");

    hab_alarm = new SubsystemAlarm("HAB");
    hal_alarm = new SubsystemAlarm("HAL");

    hab_amps = new Amps("HAB_AMPS");
    hal_amps = new Amps("HAL_AMPS");

    hab_magic_power = new MagicPower("HAB_AMPS", 1.0e5);
    hal_magic_power = new MagicPower("HAL_AMPS", 1.0e5);

    eam_pcs = new Pcs("EAM");
    hal_pcs = new Pcs("HAL");
    orion_pcs = new Pcs("ORION");

    eam_cabin = new Cabin("EAM");
    hal_cabin = new Cabin("HAL");
    orion_cabin = new Cabin("ORION");
}

extern "C" void DisplayLogic(void)
{
    static int stored_display;

    if (*SIM_CONTROL_EXEC)
    {
        switch (*SIM_CONTROL_CMD)
        {
            case 1:
                printf("quitting the sim...\n");
                system("externals/sks");
                *SIM_CONTROL_CMD = 0;
                break;
            case 2:
                printf("rebooting the computer...\n");
                system("reboot");
                *SIM_CONTROL_CMD = 0;
                break;
            case 3:
                printf("shutting down the computer...\n");
                system("halt");
                *SIM_CONTROL_CMD = 0;
                break;
            default:
                break;
        }
    }

    if (*CANBUS_INHIBITED)
    {
        if (*ACTIVE_DISPLAY != 99)
        {
            stored_display = *ACTIVE_DISPLAY;
            *ACTIVE_DISPLAY = 99;
        }
    }
    else
    {
        if (*ACTIVE_DISPLAY == 99)
        {
            *ACTIVE_DISPLAY = stored_display;
        }
    }

    switch (*ACTIVE_DISPLAY)
    {
        case 2:
            *HC_MODE = 6;
            break;
        case 6:
            *HC_MODE = 2;
            break;
        case 35:
            *HC_MODE = 7;
            break;
        case 5:
        case 20:
            *HC_MODE = 3;
            break;
        case 8:
            *HC_MODE = 4;
            break;
        case 3:
            *HC_MODE = 5;
            break;
        case 99:
            *HC_MODE = 0;
            break;
        default:
            *HC_MODE = 1;
            break;
    }

    switch (*ACTIVE_DISPLAY)
    {
        case 1:
            mpcv_gnc->run();
            break;
        case 2:
            pm_gnc->run();
            break;
        case 3:
            robo_logic();
            break;
        case 6:
            aercam_logic();
            break;
        case 7:
            lights_logic();
            break;
        case 10:
            eam_ars_logic();
            break;
        case 11:
            // eps_logic();
            break;
        case 12:
            // tcs_logic();
            break;
        case 13:
            hal_airlock_logic();
            airlock_logic();
            break;
        case 14:
            // pcs_logic();
            break;
        case 16:
            // hop_logic();
            break;
        case 17:
            docking_logic();
            break;
        case 18:
            // power_sources_logic();
            break;
        case 19:
        case 23:
            // pdu_logic();
            break;
        case 21:
            basic_water_logic();
            break;
        case 22:
            // sabatier_logic();
            break;
        case 24:
            // waste_water_logic();
            break;
        case 26:
            itcs_logic();
            break;
        case 27:
            etcs_a->run();
            break;
        case 28:
            etcs_b->run();
            break;
        case 29:
            // general_info_logic();
            break;
        case 30:
            hal_ars_logic();
            break;
        case 31:
            hal_tcs_logic();
            break;
        case 211:
            hal_potable_logic();
            break;
        case 32:
            hal_general_info_logic();
            break;
        case 132:
            hab_general_info_logic();
            break;
        case 33:
            hal_waste_logic();
            break;
        case 35:
            telescope_logic();
            break;
        case 107:
            hab_cal_logic();
            break;
        case 207:
            hal_ars_rca_logic();
            break;
        default:
            break;
    }

    if (*ENABLE_AUDIO_ALARM == 1) { // run the entire logic
        if (!strcmp(SYSTEM_ALARM_HOST_VEHICLE, "HAB")) hab_alarm->run();
        else if (!strcmp(SYSTEM_ALARM_HOST_VEHICLE, "HAL")) hal_alarm->run();
    }
    // reset audio warning command
    hab_alarm->reset();
    hal_alarm->reset();

    hab_amps->run();
    hab_magic_power->run();

    hal_amps->run();
    hal_magic_power->run();

    eam_pcs->run();
    hal_pcs->run();
    orion_pcs->run();

    eam_cabin->run();
    hal_cabin->run();
    orion_cabin->run();

    etcs_rad_logic();
    time_logic();
}
