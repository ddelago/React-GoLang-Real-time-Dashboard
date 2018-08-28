#include <cmath>
#define _DCAPP_EXTERNALS_
#include "dcapp.hh"

extern void hal_ars_logic(void);

void hal_airlock_logic(void)
{
    *HAL_TO_SPACE_MAN_VENT_FLOW_DISP = fabs(*HAL_TO_SPACE_MAN_VENT_FLOW_RATE);
    *HAL_TO_EAM_HATCH_FLOW_DISP = fabs(*HAL_TO_EAM_HATCH_FLOW_RATE);
    *HAL_IV_VALVE_FLOW_DISP = fabs(*HAL_IV_VALVE_FLOW_RATE);
    *HAL_IV_HATCH_FLOW_DISP = fabs(*HAL_IV_HATCH_FLOW_RATE);
    *HAL_TO_SPACE_HATCH_FLOW_DISP = fabs(*HAL_TO_SPACE_HATCH_FLOW_RATE);
    *HAL_HATCH_FLOW_DISP = fabs(*HAL_HATCH_FLOW_RATE);

    *HAL_CANOPY_VOL = *HAL_CANOPY_INFLATION * *HAL_CANOPY_MAX_VOL * 35.3147;

    hal_ars_logic();
}
