#define _DCAPP_EXTERNALS_
#include "dcapp.hh"

#define MaxMpcvDPLightLevel 2.0
#define MaxHabDPLightLevel 2.0

void lights_logic(void)
{
    if (*MPCV_DP_LIGHT_DELTA)
    {
        *MPCV_DP_LIGHT_CMD = *MPCV_DP_LIGHT_LEVEL + *MPCV_DP_LIGHT_DELTA;
        if (*MPCV_DP_LIGHT_CMD < 0) *MPCV_DP_LIGHT_CMD = 0;
        if (*MPCV_DP_LIGHT_CMD > MaxMpcvDPLightLevel) *MPCV_DP_LIGHT_CMD = MaxMpcvDPLightLevel;
        *MPCV_DP_LIGHT_DELTA = 0;
    }
    if (*HAB_DP_LIGHT_DELTA)
    {
        *HAB_DP_LIGHT_CMD = *HAB_DP_LIGHT_LEVEL + *HAB_DP_LIGHT_DELTA;
        if (*HAB_DP_LIGHT_CMD < 0) *HAB_DP_LIGHT_CMD = 0;
        if (*HAB_DP_LIGHT_CMD > MaxHabDPLightLevel) *HAB_DP_LIGHT_CMD = MaxHabDPLightLevel;
        *HAB_DP_LIGHT_DELTA = 0;
    }

    *MPCV_DP_LIGHT_PCTON = 100.0 * (double)(*MPCV_DP_LIGHT_LEVEL) / MaxMpcvDPLightLevel;
    *HAB_DP_LIGHT_PCTON = 100.0 * (double)(*HAB_DP_LIGHT_LEVEL) / MaxHabDPLightLevel;

    if (*MPCV_DP_LIGHT_SELECTED || *HAB_DP_LIGHT_SELECTED)
    {
        *SELECTED_LIGHTS_ON = 1;
        *SELECTED_LIGHTS_OFF = 1;

        if (*MPCV_DP_LIGHT_SELECTED)
        {
            if (*MPCV_DP_LIGHT_LEVEL != 0) *SELECTED_LIGHTS_OFF = 0;
            if (*MPCV_DP_LIGHT_LEVEL != MaxMpcvDPLightLevel) *SELECTED_LIGHTS_ON = 0;
        }
        if (*HAB_DP_LIGHT_SELECTED)
        {
            if (*HAB_DP_LIGHT_LEVEL != 0) *SELECTED_LIGHTS_OFF = 0;
            if (*HAB_DP_LIGHT_LEVEL != MaxHabDPLightLevel) *SELECTED_LIGHTS_ON = 0;
        }

        if (*SELECTED_LIGHTS_ON) *SELECTED_LIGHTS_BRIGHTABLE = 0;
        else *SELECTED_LIGHTS_BRIGHTABLE = 1;
        if (*SELECTED_LIGHTS_OFF) *SELECTED_LIGHTS_DIMMABLE = 0;
        else *SELECTED_LIGHTS_DIMMABLE = 1;
    }
    else
    {
        *SELECTED_LIGHTS_BRIGHTABLE = 0;
        *SELECTED_LIGHTS_DIMMABLE = 0;
        *SELECTED_LIGHTS_ON = 0;
        *SELECTED_LIGHTS_OFF = 0;
    }
}
