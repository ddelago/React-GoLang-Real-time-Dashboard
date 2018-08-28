#include <cmath>
#define _DCAPP_EXTERNALS_
#include "dcapp.hh"

void airlock_logic(void)
{
    *AIRLOCK_AFT_IMV_FLOW_DISP = fabs(*AIRLOCK_AFT_IMV_FLOW_RATE);
    *AIRLOCK_TO_SPACE_MAN_VENT_FLOW_DISP = fabs(*AIRLOCK_TO_SPACE_MAN_VENT_FLOW_RATE);
}
