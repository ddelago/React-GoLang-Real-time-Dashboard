#include <cstdio>
#include <cstring>
#define _DCAPP_EXTERNALS_
#include "dcapp.hh"

extern void generic_keyboard_logic(char *, const size_t);

void telescope_logic(void)
{
    if (*KEYPAD_ACTIVE)
    {
        switch (*KEYPAD_ID)
        {
            case 1:
                switch (*FIELD_SELECT)
                {
                    case 1:
                        generic_keyboard_logic(TELESCOPE_AZIMUTH_INPUT_STR, 12);
                        break;
                    case 2:
                        generic_keyboard_logic(TELESCOPE_ELEVATION_INPUT_STR, 12);
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                generic_keyboard_logic(TELESCOPE_ZOOM_INPUT_STR, 12);
                break;
            default:
                break;
        }
    }
    else
    {
        sprintf(TELESCOPE_AZIMUTH_INPUT_STR, "%.0f", *TELESCOPE_AZIMUTH_IND);
        sprintf(TELESCOPE_ELEVATION_INPUT_STR, "%.0f", *TELESCOPE_ELEVATION_IND);
        sprintf(TELESCOPE_ZOOM_INPUT_STR, "%.0f", *TELESCOPE_ZOOM_IND);
    }

    if (*TELESCOPE_MODE_IND == 2) {
      *TELESCOPE_MANUAL_MODE_ACTIVE = 1;
    } else {
      *TELESCOPE_MANUAL_MODE_ACTIVE = 0;
    }
}
