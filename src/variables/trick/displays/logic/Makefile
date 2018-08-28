PARAM_FILE := ../NextSTEP.xml

TRICK_MODEL_HOME ?= ${HOME}/trick/models
DCAPP_HOME ?= ${TRICK_MODEL_HOME}/dcapp
DISPLAY_MODULES ?= ../modules

# locate dcapp binaries
ifneq ($(wildcard ${DCAPP_HOME}/bin/dcapp-config),)
    DCAPPCONFIG := ${DCAPP_HOME}/bin/dcapp-config
else
    DCAPPCONFIG := dcapp-config
endif
ifneq ($(wildcard ${DCAPP_HOME}/dcapp.app/Contents/dcapp_genheader),)
    GENHEADER := ${DCAPP_HOME}/dcapp.app/Contents/dcapp_genheader
else
    GENHEADER := dcapp_genheader
endif

OBJDIR := $(shell $(DCAPPCONFIG) --objdir)
BINDIR := $(shell $(DCAPPCONFIG) --bindir)

CXXFLAGS += -fPIC -Wall -std=c++11
ifeq ($(shell $(DCAPPCONFIG) --ostype), linux)
CXXFLAGS += -D_GNU_SOURCE
endif

### list all sources and headers to be included in the shared object below... ###

SOURCES := \
	logic.cc \
	logic_telescope.cc \
	logic_docking.cc \
	logic_airlock.cc \
	logic_hal_airlock.cc \
	logic_lights.cc \
	${DISPLAY_MODULES}/nexsys_common/logic/gnc.cc \
	${DISPLAY_MODULES}/nexsys_common/logic/logic_keyboard.cc \
	${DISPLAY_MODULES}/nexsys_common/logic/logic_robo.cc \
	${DISPLAY_MODULES}/nexsys_common/logic/logic_time.cc \
	${DISPLAY_MODULES}/mmsev/logic/logic_aercam.cc \
	${DISPLAY_MODULES}/hab/logic/etcs.cc \
	${DISPLAY_MODULES}/hal/logic/pump_pack.cc \
	${DISPLAY_MODULES}/hab/logic/logic_hab_cal.cc \
	${DISPLAY_MODULES}/hab/logic/logic_eam_ars.cc \
	${DISPLAY_MODULES}/hab/logic/logic_itcs.cc \
	${DISPLAY_MODULES}/hab/logic/logic_etcs.cc \
	${DISPLAY_MODULES}/hab/logic/logic_basic_water.cc \
	${DISPLAY_MODULES}/hab/logic/logic_hab_general_info.cc \
	${DISPLAY_MODULES}/hal/logic/logic_hal_ars.cc \
	${DISPLAY_MODULES}/hal/logic/logic_hal_ars_rca.cc \
	${DISPLAY_MODULES}/hal/logic/logic_hal_tcs.cc \
	${DISPLAY_MODULES}/hal/logic/logic_hal_general_info.cc \
	${DISPLAY_MODULES}/hal/logic/logic_hal_potable.cc \
	${DISPLAY_MODULES}/hal/logic/logic_hal_waste.cc \
	${DISPLAY_MODULES}/subsystems/logic/subsys_common.cc \
	${DISPLAY_MODULES}/subsystems/logic/battery.cc \
	${DISPLAY_MODULES}/subsystems/logic/cabin.cc \
	${DISPLAY_MODULES}/subsystems/logic/magic_power.cc \
	${DISPLAY_MODULES}/subsystems/logic/pcs.cc \
	${DISPLAY_MODULES}/subsystems/logic/solar_array.cc \
	${DISPLAY_MODULES}/subsystems/logic/subsystem_alarm.cc \
	${DISPLAY_MODULES}/subsystems/logic/switch.cc \
	${DISPLAY_MODULES}/amps/logic/logic_amps.cc \
	${DISPLAY_MODULES}/amps/logic/logic_amps_ps.cc \
	${DISPLAY_MODULES}/amps/logic/logic_amps_mbsu.cc \
	${DISPLAY_MODULES}/amps/logic/logic_amps_pdu.cc

HEADERS := \
	${DISPLAY_MODULES}/nexsys_common/logic/gnc.hh \
	${DISPLAY_MODULES}/hab/logic/etcs.hh \
	${DISPLAY_MODULES}/hal/logic/pump_pack.hh \
	${DISPLAY_MODULES}/subsystems/logic/subsys_common.hh \
	${DISPLAY_MODULES}/subsystems/logic/battery.hh \
	${DISPLAY_MODULES}/subsystems/logic/cabin.hh \
	${DISPLAY_MODULES}/subsystems/logic/magic_power.hh \
	${DISPLAY_MODULES}/subsystems/logic/pcs.hh \
	${DISPLAY_MODULES}/subsystems/logic/solar_array.hh \
	${DISPLAY_MODULES}/subsystems/logic/subsystem_alarm.hh \
	${DISPLAY_MODULES}/subsystems/logic/switch.hh \
	${DISPLAY_MODULES}/amps/logic/amps.hh \
	${DISPLAY_MODULES}/amps/logic/amps_mbsu.hh \
	${DISPLAY_MODULES}/amps/logic/amps_pdu.hh \
	${DISPLAY_MODULES}/amps/logic/amps_ps.hh

#################################################################################

OBJECTS := $(foreach obj, $(SOURCES:.cc=.o), $(dir $(obj))$(OBJDIR)/$(notdir $(obj)))

CXXFLAGS += -I.
CXXFLAGS += $(sort $(foreach header, $(HEADERS), -I$(dir $(header))))

all: dcapp.hh ${BINDIR}/logic.so

dcapp.hh: ${PARAM_FILE}
	${GENHEADER} ${PARAM_FILE} $@

${BINDIR}/logic.so: ${OBJECTS}
	mkdir -p ${BINDIR}
	${CXX} -Wall -shared $^ -o $@

define BUILDOBJECT
$(1): $(realpath $(dir $(1))../$(basename $(notdir $(1))).cc) dcapp.hh ${HEADERS}
	mkdir -p $(dir $(1))
	${CXX} -c ${CXXFLAGS} $(dir $(1))../$(basename $(notdir $(1))).cc -o $(1)
endef
$(foreach object, $(OBJECTS), $(eval $(call BUILDOBJECT, $(object))))

clean:
	rm -f dcapp.hh ${OBJECTS} ${BINDIR}/logic.so
