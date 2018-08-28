//
// //
// // // For notifications
// //
//
var defaultWidth =
  window.screen.width > 768 ? window.screen.width * 1 / 3 : window.screen.width;

var style = {
  Wrapper: {},
  Containers: {
    DefaultStyle: {
      position: "fixed",
      width: defaultWidth,
      padding: "10px 10px 10px 20px",
      zIndex: 9998,
      WebkitBoxSizing: "",
      MozBoxSizing: "",
      boxSizing: "",
      height: "auto",
      display: "inline-block",
      border: "0",
      fontSize: "14px",
      WebkitFontSmoothing: "antialiased",
      fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
      fontWeight: "400",
      color: "#FFFFFF"
    },

    tl: {
      top: "0px",
      bottom: "auto",
      left: "0px",
      right: "auto"
    },

    tr: {
      top: "0px",
      bottom: "auto",
      left: "auto",
      right: "0px"
    },

    tc: {
      top: "0px",
      bottom: "auto",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    },

    bl: {
      top: "auto",
      bottom: "0px",
      left: "0px",
      right: "auto"
    },

    br: {
      top: "auto",
      bottom: "0px",
      left: "auto",
      right: "0px"
    },

    bc: {
      top: "auto",
      bottom: "0px",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    }
  },

  NotificationItem: {
    DefaultStyle: {
      position: "relative",
      width: "100%",
      cursor: "pointer",
      borderRadius: "4px",
      fontSize: "14px",
      margin: "10px 0 0",
      padding: "10px",
      display: "block",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      boxSizing: "border-box",
      opacity: 0,
      transition: "all 0.5s ease-in-out",
      WebkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
      willChange: "transform, opacity",

      isHidden: {
        opacity: 0
      },

      isVisible: {
        opacity: 1
      }
    },

    success: {
      borderTop: 0,
      backgroundColor: "#a1e82c",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    error: {
      borderTop: 0,
      backgroundColor: "#fc727a",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    warning: {
      borderTop: 0,
      backgroundColor: "#ffbc67",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    info: {
      borderTop: 0,
      backgroundColor: "#63d8f1",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    }
  },

  Title: {
    DefaultStyle: {
      fontSize: "30px",
      margin: "0",
      padding: 0,
      fontWeight: "bold",
      color: "#FFFFFF",
      display: "block",
      left: "15px",
      position: "absolute",
      top: "50%",
      marginTop: "-15px"
    }
  },

  MessageWrapper: {
    DefaultStyle: {
      marginLeft: "55px",
      marginRight: "30px",
      padding: "0 12px 0 0",
      color: "#FFFFFF",
      maxWidthwidth: "89%"
    }
  },

  Dismiss: {
    DefaultStyle: {
      fontFamily: "inherit",
      fontSize: "21px",
      color: "#000",
      float: "right",
      position: "absolute",
      right: "10px",
      top: "50%",
      marginTop: "-13px",
      backgroundColor: "#FFFFFF",
      display: "block",
      borderRadius: "50%",
      opacity: ".4",
      lineHeight: "11px",
      width: "25px",
      height: "25px",
      outline: "0 !important",
      textAlign: "center",
      padding: "6px 3px 3px 3px",
      fontWeight: "300",
      marginLeft: "65px"
    },

    success: {
      // color: '#f0f5ea',
      // backgroundColor: '#a1e82c'
    },

    error: {
      // color: '#f4e9e9',
      // backgroundColor: '#fc727a'
    },

    warning: {
      // color: '#f9f6f0',
      // backgroundColor: '#ffbc67'
    },

    info: {
      // color: '#e8f0f4',
      // backgroundColor: '#63d8f1'
    }
  },

  Action: {
    DefaultStyle: {
      background: "#ffffff",
      borderRadius: "2px",
      padding: "6px 20px",
      fontWeight: "bold",
      margin: "10px 0 0 0",
      border: 0
    },

    success: {
      backgroundColor: "#a1e82c",
      color: "#ffffff"
    },

    error: {
      backgroundColor: "#fc727a",
      color: "#ffffff"
    },

    warning: {
      backgroundColor: "#ffbc67",
      color: "#ffffff"
    },

    info: {
      backgroundColor: "#63d8f1",
      color: "#ffffff"
    }
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  }
};

//
// //
// // // For tables
// //
//
const thArray = ["ID", "Name", "Salary", "Country", "City"];
const tdArray = [
  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
  ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
  ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
  ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
  ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
  ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
];

//
// //
// // // For icons
// //
//
const iconsArray = [
  "pe-7s-album",
  "pe-7s-arc",
  "pe-7s-back-2",
  "pe-7s-bandaid",
  "pe-7s-car",
  "pe-7s-diamond",
  "pe-7s-door-lock",
  "pe-7s-eyedropper",
  "pe-7s-female",
  "pe-7s-gym",
  "pe-7s-hammer",
  "pe-7s-headphones",
  "pe-7s-helm",
  "pe-7s-hourglass",
  "pe-7s-leaf",
  "pe-7s-magic-wand",
  "pe-7s-male",
  "pe-7s-map-2",
  "pe-7s-next-2",
  "pe-7s-paint-bucket",
  "pe-7s-pendrive",
  "pe-7s-photo",
  "pe-7s-piggy",
  "pe-7s-plugin",
  "pe-7s-refresh-2",
  "pe-7s-rocket",
  "pe-7s-settings",
  "pe-7s-shield",
  "pe-7s-smile",
  "pe-7s-usb",
  "pe-7s-vector",
  "pe-7s-wine",
  "pe-7s-cloud-upload",
  "pe-7s-cash",
  "pe-7s-close",
  "pe-7s-bluetooth",
  "pe-7s-cloud-download",
  "pe-7s-way",
  "pe-7s-close-circle",
  "pe-7s-id",
  "pe-7s-angle-up",
  "pe-7s-wristwatch",
  "pe-7s-angle-up-circle",
  "pe-7s-world",
  "pe-7s-angle-right",
  "pe-7s-volume",
  "pe-7s-angle-right-circle",
  "pe-7s-users",
  "pe-7s-angle-left",
  "pe-7s-user-female",
  "pe-7s-angle-left-circle",
  "pe-7s-up-arrow",
  "pe-7s-angle-down",
  "pe-7s-switch",
  "pe-7s-angle-down-circle",
  "pe-7s-scissors",
  "pe-7s-wallet",
  "pe-7s-safe",
  "pe-7s-volume2",
  "pe-7s-volume1",
  "pe-7s-voicemail",
  "pe-7s-video",
  "pe-7s-user",
  "pe-7s-upload",
  "pe-7s-unlock",
  "pe-7s-umbrella",
  "pe-7s-trash",
  "pe-7s-tools",
  "pe-7s-timer",
  "pe-7s-ticket",
  "pe-7s-target",
  "pe-7s-sun",
  "pe-7s-study",
  "pe-7s-stopwatch",
  "pe-7s-star",
  "pe-7s-speaker",
  "pe-7s-signal",
  "pe-7s-shuffle",
  "pe-7s-shopbag",
  "pe-7s-share",
  "pe-7s-server",
  "pe-7s-search",
  "pe-7s-film",
  "pe-7s-science",
  "pe-7s-disk",
  "pe-7s-ribbon",
  "pe-7s-repeat",
  "pe-7s-refresh",
  "pe-7s-add-user",
  "pe-7s-refresh-cloud",
  "pe-7s-paperclip",
  "pe-7s-radio",
  "pe-7s-note2",
  "pe-7s-print",
  "pe-7s-network",
  "pe-7s-prev",
  "pe-7s-mute",
  "pe-7s-power",
  "pe-7s-medal",
  "pe-7s-portfolio",
  "pe-7s-like2",
  "pe-7s-plus",
  "pe-7s-left-arrow",
  "pe-7s-play",
  "pe-7s-key",
  "pe-7s-plane",
  "pe-7s-joy",
  "pe-7s-photo-gallery",
  "pe-7s-pin",
  "pe-7s-phone",
  "pe-7s-plug",
  "pe-7s-pen",
  "pe-7s-right-arrow",
  "pe-7s-paper-plane",
  "pe-7s-delete-user",
  "pe-7s-paint",
  "pe-7s-bottom-arrow",
  "pe-7s-notebook",
  "pe-7s-note",
  "pe-7s-next",
  "pe-7s-news-paper",
  "pe-7s-musiclist",
  "pe-7s-music",
  "pe-7s-mouse",
  "pe-7s-more",
  "pe-7s-moon",
  "pe-7s-monitor",
  "pe-7s-micro",
  "pe-7s-menu",
  "pe-7s-map",
  "pe-7s-map-marker",
  "pe-7s-mail",
  "pe-7s-mail-open",
  "pe-7s-mail-open-file",
  "pe-7s-magnet",
  "pe-7s-loop",
  "pe-7s-look",
  "pe-7s-lock",
  "pe-7s-lintern",
  "pe-7s-link",
  "pe-7s-like",
  "pe-7s-light",
  "pe-7s-less",
  "pe-7s-keypad",
  "pe-7s-junk",
  "pe-7s-info",
  "pe-7s-home",
  "pe-7s-help2",
  "pe-7s-help1",
  "pe-7s-graph3",
  "pe-7s-graph2",
  "pe-7s-graph1",
  "pe-7s-graph",
  "pe-7s-global",
  "pe-7s-gleam",
  "pe-7s-glasses",
  "pe-7s-gift",
  "pe-7s-folder",
  "pe-7s-flag",
  "pe-7s-filter",
  "pe-7s-file",
  "pe-7s-expand1",
  "pe-7s-exapnd2",
  "pe-7s-edit",
  "pe-7s-drop",
  "pe-7s-drawer",
  "pe-7s-download",
  "pe-7s-display2",
  "pe-7s-display1",
  "pe-7s-diskette",
  "pe-7s-date",
  "pe-7s-cup",
  "pe-7s-culture",
  "pe-7s-crop",
  "pe-7s-credit",
  "pe-7s-copy-file",
  "pe-7s-config",
  "pe-7s-compass",
  "pe-7s-comment",
  "pe-7s-coffee",
  "pe-7s-cloud",
  "pe-7s-clock",
  "pe-7s-check",
  "pe-7s-chat",
  "pe-7s-cart",
  "pe-7s-camera",
  "pe-7s-call",
  "pe-7s-calculator",
  "pe-7s-browser",
  "pe-7s-box2",
  "pe-7s-box1",
  "pe-7s-bookmarks",
  "pe-7s-bicycle",
  "pe-7s-bell",
  "pe-7s-battery",
  "pe-7s-ball",
  "pe-7s-back",
  "pe-7s-attention",
  "pe-7s-anchor",
  "pe-7s-albums",
  "pe-7s-alarm",
  "pe-7s-airplay"
];

//
// //
// // // // For dashboard's charts
// //
//
// Data for Pie Chart
var dataPie = {
  labels: ["40%", "20%", "40%"],
  series: [40, 20, 40]
};
var legendPie = {
  names: ["A", "B", "C"],
  types: ["info", "danger", "warning"]
};

// Data for Line Chart
var dataSales = {
  labels: [
    "9:00AM",
    "12:00AM",
    "3:00PM",
    "6:00PM",
    "9:00PM",
    "12:00PM",
    "3:00AM",
    "6:00AM"
  ],
  series: [
    [287, 385, 490, 492, 554, 586, 698, 695],
    [67, 152, 143, 240, 287, 335, 435, 437],
    [23, 113, 67, 108, 190, 239, 307, 308]
  ]
};
var optionsSales = {
  low: 0,
  high: 800,
  showArea: false,
  height: "245px",
  axisX: {
    showGrid: false
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};
var responsiveSales = [
  [
    "screen and (max-width: 640px)",
    {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendSales = {
  names: ["A", "B", "C"],
  types: ["info", "danger", "warning"]
};

// Data for Bar Chart
var dataBar = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  ]
};
var optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};
var responsiveBar = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendBar = {
  names: ["A", "B"],
  types: ["info", "danger"]
};

// var socket = new WebSocket("ws://" + window.location.host + "/ws");
// var socket = new WebSocket("ws://" + "192.168.254.14:3002" + "/ws");
// THIS HAS TO BE SET TO LOCATION OF SERVER
var socket = new WebSocket("ws://" + "139.169.203.141:3000" + "/ws");

function getSubSysVars(trickVarMap){

    var mpcv_hab_air = {
      mpcvTemp: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.temperature"].value,
      mpcvPressure: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
      mpcvN2: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureN2"].value,
      mpcvO2: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureO2"].value,
      mpcvCO2: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureCO2"].value,
      mpcvHumidity: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.relativeHumidity"].value,
      mpcvH2: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.moleFractionH2"].value,
      mpcvCH4: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.moleFractionCH4"].value,
      mpcvFlow: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.mpev.flowRate"].value,

      mpcvHabFlow: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.hatch.flowRate"].value,
      mpcvHabTemp: trickVarMap["stack_subsystems.fswIf.tlm.eclss.cabin.habOvhdVest.atmosphere.temperature"].value,
      mpcvHabPressure: trickVarMap["stack_subsystems.fswIf.tlm.eclss.cabin.habOvhdVest.atmosphere.pressure"].value,

      habTemp: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.temperature"].value,
      habPressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
      habN2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureN2"].value,
      habO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureO2"].value,
      habCO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureCO2"].value,
      habHumidity: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.relativeHumidity"].value,
      habH2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionH2"].value,
      habCH4: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionCH4"].value,
      habFlow: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.ovhdAftImv.flowRate"].value
    }
    var hab_hal_air = {
      halTemp: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.temperature"].value,
      halPressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
      halN2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureN2"].value,
      halO2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureO2"].value,
      halCO2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureCO2"].value,
      halHumidity: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.relativeHumidity"].value,
      halH2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.moleFractionH2"].value,
      halCH4: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.moleFractionCH4"].value,

      halHabTemp: trickVarMap["stack_subsystems.fswIf.tlm.eclss.cabin.habDeckVest.atmosphere.temperature"].value,
      halHabPressure: trickVarMap["stack_subsystems.fswIf.tlm.eclss.cabin.habDeckVest.atmosphere.pressure"].value,
      halHabImvFlow: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.imv3.volFlowRate"].value,

      habTemp: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.temperature"].value,
      habPressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
      habN2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureN2"].value,
      habO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureO2"].value,
      habCO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureCO2"].value,
      habHumidity: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.relativeHumidity"].value,
      habH2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionH2"].value,
      habCH4: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionCH4"].value
    }
    var mpcv_pcs = {
      mpcvTemp: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.temperature"].value,
      mpcvPressure: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
      mpcvN2: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureN2"].value,
      mpcvO2: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureO2"].value,
      mpcvCO2: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureCO2"].value,
      mpcvHumidity: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.relativeHumidity"].value,
      mpcvH2: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.moleFractionH2"].value,
      mpcvCH4: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.cabin.atmosphere.moleFractionCH4"].value,
      mpcvPcsVentFlow: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.pcs.ventValve.flowRate"].value,
      N2TankPressure: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.pcs.n2Tank.pressure"].value,
      N2FlowPressure: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.pcs.n2FlowMeter.pressure"].value,
      N2FlowRate: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.pcs.n2FlowMeter.flowRate"].value,
      N2Temperature: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.pcs.n2Exit.temperature"].value,
      O2TankPressure: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.pcs.o2Tank.pressure"].value,
      O2FlowPressure: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.pcs.o2FlowMeter.pressure"].value,
      O2FlowRate: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.pcs.o2FlowMeter.flowRate"].value,
      O2Temperature: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.pcs.o2Exit.temperature"].value,
      PcsController: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.pcs.controller.state"].value,
      pressureSetPnt: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.pcs.controller.pressureSetPoint"].value,
      O2SetPnt: trickVarMap["mpcv_subsystems.fswIf.tlm.eclss.pcs.controller.percentO2SetPoint"].value
    }

    var hab_overview = {
      habCabinTemp: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.temperature"].value,
      habCabinPressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
      habCabinN2: 100 * trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureN2"].value / trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
      habCabinO2: 100 * trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureO2"].value / trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
      habCabinDewPnt: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.dewPoint"].value,
      habCabinCO2Pressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureCO2"].value * 51.714925105101,
      
      habConsO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.consumables.O2.avgRate"].value,
      habConsN2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.consumables.N2.avgRate"].value,
      habConsWater: trickVarMap["hab_subsystems.fswIf.tlm.eclss.consumables.potableWater.avgRate"].value,
      
      habEpsBat1Charge: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mStateOfCharge"].value,
      habEpsBat1Voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mVoltage"].value,
      habEpsBat1Current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mCurrent"].value,
      habEpsBat1Power: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mPower"].value,
      
      habEpsBat2Charge: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mStateOfCharge"].value,
      habEpsBat2Voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mVoltage"].value,
      habEpsBat2Current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mCurrent"].value,
      habEpsBat2Power: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mPower"].value,

      habWaterPotableTank: trickVarMap["hab_subsystems.fswIf.tlm.eclss.wrs.potableTank.mass"].value * 2.205,
      habWaterWasteTank: trickVarMap["hab_subsystems.fswIf.tlm.eclss.wrs.wasteTank.mass"].value * 2.205,

      habItcsFlowRate: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.pump1.flowRate"].value + trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.pump2.flowRate"].value,
      habItcsHxOutT: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.interloopHxOutlet.temperature"].value,
      habItcsHxSetpoint: trickVarMap["hab_subsystems.fswIf.nominalCmd.tcs.itcs.interloopHxOutletTSetpoint"].value,
      habEtcsFlowA: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.pump1.flowRate"].value + trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.pump2.flowRate"].value * 7936.64,
      habEtcsFlowB: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.pump1.flowRate"].value + trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.pump2.flowRate"].value * 7936.64,
      habEtcsRad1T: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.radiator1.temperature"].value,
      habEtcsRad2T: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.radiator1.temperature"].value,

      HabPcsSetpointPressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.controller.pressureSetPoint"].value,
      HabPcsSetpointO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.controller.percentO2SetPoint"].value,
      HabPcsTankN2Pressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.n2Tank.pressure"].value,
      HabPcsTankO2Pressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.o2Tank.pressure"].value,
      HabPcsN2Flow: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.n2FlowMeter.flowRate"].value,
      HabPcsN2Temp: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.n2Exit.temperature"].value,
      HabPcsO2Flow: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.o2FlowMeter.flowRate"].value,
      HabPcsO2Temp: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.o2Exit.temperature"].value
    }

    var hab_power_amps = { 
      ps1_SARvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array_regulator.mOutputVoltageSensed"].value, 
      ps1_SARcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array_regulator.mOutputCurrentSensed"].value,
      ps1_BATTvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mVoltage"].value,
      ps1_BATTcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mCurrent"].value,
      ps1_BATTcharge: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mStateOfCharge"].value,

      ps2_SARvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array_regulator.mOutputVoltageSensed"].value, 
      ps2_SARcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array_regulator.mOutputCurrentSensed"].value,
      ps2_BATTvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mVoltage"].value,
      ps2_BATTcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mCurrent"].value,
      ps2_BATTcharge: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mStateOfCharge"].value,

      mbsu1_SARelementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.sar_switch.mSwitch.mElementOnInd"].value,
      mbsu1_BATTelementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.battery_switch.mSwitch.mElementOnInd"].value,
      mbsu1_AUXelementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.aux_switch.mSwitch.mElementOnInd"].value,
      mbsu1_PDU1elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output01_switch.mSwitch.mElementOnInd"].value,
      mbsu1_PDU2elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output02_switch.mSwitch.mElementOnInd"].value,
      mbsu1_PDU3elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output03_switch.mSwitch.mElementOnInd"].value,
      mbsu1_PDU4elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output04_switch.mSwitch.mElementOnInd"].value,
      
      mbsu2_SARelementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.sar_switch.mSwitch.mElementOnInd"].value,
      mbsu2_BATTelementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.battery_switch.mSwitch.mElementOnInd"].value,
      mbsu2_AUXelementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.aux_switch.mSwitch.mElementOnInd"].value,
      mbsu2_PDU1elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output01_switch.mSwitch.mElementOnInd"].value,
      mbsu2_PDU2elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output02_switch.mSwitch.mElementOnInd"].value,
      mbsu2_PDU3elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output03_switch.mSwitch.mElementOnInd"].value,
      mbsu2_PDU4elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output04_switch.mSwitch.mElementOnInd"].value,
      
      pdu1_MBSU1elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.mbsu01_switch.mSwitch.mElementOnInd"].value,
      pdu1_MBSU2elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.mbsu02_switch.mSwitch.mElementOnInd"].value,
      pdu1_RPC1elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc01.mSwitch.mElementOnInd"].value,
      pdu1_RPC2elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc02.mSwitch.mElementOnInd"].value,
      pdu1_RPC3elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc03.mSwitch.mElementOnInd"].value,
      pdu1_RPC4elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc04.mSwitch.mElementOnInd"].value,
      pdu1_RPC5elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc05.mSwitch.mElementOnInd"].value,
      pdu1_RPC6elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc06.mSwitch.mElementOnInd"].value,
      pdu1_RPC7elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc07.mSwitch.mElementOnInd"].value,
      pdu1_RPC8elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc08.mSwitch.mElementOnInd"].value,
      
      pdu2_MBSU1elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.mbsu01_switch.mSwitch.mElementOnInd"].value,
      pdu2_MBSU2elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.mbsu02_switch.mSwitch.mElementOnInd"].value,
      pdu2_RPC1elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc01.mSwitch.mElementOnInd"].value,
      pdu2_RPC2elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc02.mSwitch.mElementOnInd"].value,
      pdu2_RPC3elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc03.mSwitch.mElementOnInd"].value,
      pdu2_RPC4elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc04.mSwitch.mElementOnInd"].value,
      pdu2_RPC5elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc05.mSwitch.mElementOnInd"].value,
      pdu2_RPC6elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc06.mSwitch.mElementOnInd"].value,
      pdu2_RPC7elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc07.mSwitch.mElementOnInd"].value,
      pdu2_RPC8elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc08.mSwitch.mElementOnInd"].value,
      
      pdu3_MBSU1elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.mbsu01_switch.mSwitch.mElementOnInd"].value,
      pdu3_MBSU2elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.mbsu02_switch.mSwitch.mElementOnInd"].value,
      pdu3_RPC1elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc01.mSwitch.mElementOnInd"].value,
      pdu3_RPC2elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc02.mSwitch.mElementOnInd"].value,
      pdu3_RPC3elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc03.mSwitch.mElementOnInd"].value,
      pdu3_RPC4elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc04.mSwitch.mElementOnInd"].value,
      pdu3_RPC5elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc05.mSwitch.mElementOnInd"].value,
      pdu3_RPC6elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc06.mSwitch.mElementOnInd"].value,
      pdu3_RPC7elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc07.mSwitch.mElementOnInd"].value,
      pdu3_RPC8elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc08.mSwitch.mElementOnInd"].value,
      
      pdu4_MBSU1elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.mbsu01_switch.mSwitch.mElementOnInd"].value,
      pdu4_MBSU2elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.mbsu02_switch.mSwitch.mElementOnInd"].value,
      pdu4_RPC1elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc01.mSwitch.mElementOnInd"].value,
      pdu4_RPC2elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc02.mSwitch.mElementOnInd"].value,
      pdu4_RPC3elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc03.mSwitch.mElementOnInd"].value,
      pdu4_RPC4elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc04.mSwitch.mElementOnInd"].value,
      pdu4_RPC5elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc05.mSwitch.mElementOnInd"].value,
      pdu4_RPC6elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc06.mSwitch.mElementOnInd"].value,
      pdu4_RPC7elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc07.mSwitch.mElementOnInd"].value,
      pdu4_RPC8elementOnInd: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc08.mSwitch.mElementOnInd"].value
    }

    var hab_power_ps = {
      ps1_SOLvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array.mVoltage"].value,
      ps1_SOLcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array.mCurrent"].value,
      ps1_SOLpower: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array.mVoltage"].value * trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array.mCurrent"].value,
      ps1_SOLintensity: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array.mPercentInsolation"].value,
      ps1_SARvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array_regulator.mOutputVoltageSensed"].value,
      ps1_SARcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array_regulator.mOutputCurrentSensed"].value,
      ps1_BATvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mVoltage"].value,
      ps1_BATcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mCurrent"].value,
      ps1_BATpower: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mPower"].value,
      ps1_BATcharge: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mStateOfCharge"].value * 100,

      ps2_SOLvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array.mVoltage"].value,
      ps2_SOLcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array.mCurrent"].value,
      ps2_SOLpower: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array.mVoltage"].value * trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array.mCurrent"].value,
      ps2_SOLintensity: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array.mPercentInsolation"].value,
      ps2_SARvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array_regulator.mOutputVoltageSensed"].value,
      ps2_SARcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array_regulator.mOutputCurrentSensed"].value,
      ps2_BATvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mVoltage"].value,
      ps2_BATcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mCurrent"].value,
      ps2_BATpower: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mPower"].value,
      ps2_BATcharge: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mStateOfCharge"].value * 100,
    }

    var hab_power_mbsu = {
      mbsu1_HousekeepingCurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.house_keeping.mCurrent"].value,
      mbsu1_SARvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.sar_switch.mVoltage"].value,
      mbsu1_SARcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.sar_switch.mCurrent"].value,
      mbsu1_BATTvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.battery_switch.mVoltage"].value,
      mbsu1_BATTcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.battery_switch.mCurrent"].value,
      mbsu1_AUXvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.aux_switch.mVoltage"].value,
      mbsu1_AUXcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.aux_switch.mCurrent"].value,
      mbsu1_PDU1voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output01_switch.mVoltage"].value,
      mbsu1_PDU1current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output01_switch.mCurrent"].value,
      mbsu1_PDU2voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output02_switch.mVoltage"].value,
      mbsu1_PDU2current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output02_switch.mCurrent"].value,
      mbsu1_PDU3voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output03_switch.mVoltage"].value,
      mbsu1_PDU3current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output03_switch.mCurrent"].value,
      mbsu1_PDU4voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output04_switch.mVoltage"].value,
      mbsu1_PDU4current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output04_switch.mCurrent"].value,

      mbsu2_HousekeepingCurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.house_keeping.mCurrent"].value,
      mbsu2_SARvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.sar_switch.mVoltage"].value,
      mbsu2_SARcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.sar_switch.mCurrent"].value,
      mbsu2_BATTvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.battery_switch.mVoltage"].value,
      mbsu2_BATTcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.battery_switch.mCurrent"].value,
      mbsu2_AUXvoltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.aux_switch.mVoltage"].value,
      mbsu2_AUXcurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.aux_switch.mCurrent"].value,
      mbsu2_PDU1voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output01_switch.mVoltage"].value,
      mbsu2_PDU1current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output01_switch.mCurrent"].value,
      mbsu2_PDU2voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output02_switch.mVoltage"].value,
      mbsu2_PDU2current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output02_switch.mCurrent"].value,
      mbsu2_PDU3voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output03_switch.mVoltage"].value,
      mbsu2_PDU3current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output03_switch.mCurrent"].value,
      mbsu2_PDU4voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output04_switch.mVoltage"].value,
      mbsu2_PDU4current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output04_switch.mCurrent"].value
    }

    var hab_power_pdu12 = {
      pdu1_HousekeepingCurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.house_keeping.mCurrent"].value,
      pdu1_MBSU1voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.mbsu01_switch.mVoltage"].value,
      pdu1_MBSU1current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.mbsu01_switch.mCurrent"].value,
      pdu1_MBSU2voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.mbsu02_switch.mVoltage"].value,
      pdu1_MBSU2current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.mbsu02_switch.mCurrent"].value,
      pdu1_RPC1voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc01.mVoltage"].value,
      pdu1_RPC1current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc01.mCurrent"].value,
      pdu1_RPC2voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc02.mVoltage"].value,
      pdu1_RPC2current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc02.mCurrent"].value,
      pdu1_RPC3voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc03.mVoltage"].value,
      pdu1_RPC3current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc03.mCurrent"].value,
      pdu1_RPC4voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc04.mVoltage"].value,
      pdu1_RPC4current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc04.mCurrent"].value,
      pdu1_RPC5voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc05.mVoltage"].value,
      pdu1_RPC5current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc05.mCurrent"].value,
      pdu1_RPC6voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc06.mVoltage"].value,
      pdu1_RPC6current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc06.mCurrent"].value,
      pdu1_RPC7voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc07.mVoltage"].value,
      pdu1_RPC7current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc07.mCurrent"].value,
      pdu1_RPC8voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc08.mVoltage"].value,
      pdu1_RPC8current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc08.mCurrent"].value,

      pdu2_HousekeepingCurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.house_keeping.mCurrent"].value,
      pdu2_MBSU1voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.mbsu01_switch.mVoltage"].value,
      pdu2_MBSU1current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.mbsu01_switch.mCurrent"].value,
      pdu2_MBSU2voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.mbsu02_switch.mVoltage"].value,
      pdu2_MBSU2current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.mbsu02_switch.mCurrent"].value,
      pdu2_RPC1voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc01.mVoltage"].value,
      pdu2_RPC1current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc01.mCurrent"].value,
      pdu2_RPC2voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc02.mVoltage"].value,
      pdu2_RPC2current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc02.mCurrent"].value,
      pdu2_RPC3voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc03.mVoltage"].value,
      pdu2_RPC3current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc03.mCurrent"].value,
      pdu2_RPC4voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc04.mVoltage"].value,
      pdu2_RPC4current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc04.mCurrent"].value,
      pdu2_RPC5voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc05.mVoltage"].value,
      pdu2_RPC5current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc05.mCurrent"].value,
      pdu2_RPC6voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc06.mVoltage"].value,
      pdu2_RPC6current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc06.mCurrent"].value,
      pdu2_RPC7voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc07.mVoltage"].value,
      pdu2_RPC7current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc07.mCurrent"].value,
      pdu2_RPC8voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc08.mVoltage"].value,
      pdu2_RPC8current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc08.mCurrent"].value
    }

    var hab_power_pdu34 = {
      pdu3_HousekeepingCurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.house_keeping.mCurrent"].value,
      pdu3_MBSU1voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.mbsu01_switch.mVoltage"].value,
      pdu3_MBSU1current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.mbsu01_switch.mCurrent"].value,
      pdu3_MBSU2voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.mbsu02_switch.mVoltage"].value,
      pdu3_MBSU2current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.mbsu02_switch.mCurrent"].value,
      pdu3_RPC1voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc01.mVoltage"].value,
      pdu3_RPC1current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc01.mCurrent"].value,
      pdu3_RPC2voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc02.mVoltage"].value,
      pdu3_RPC2current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc02.mCurrent"].value,
      pdu3_RPC3voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc03.mVoltage"].value,
      pdu3_RPC3current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc03.mCurrent"].value,
      pdu3_RPC4voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc04.mVoltage"].value,
      pdu3_RPC4current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc04.mCurrent"].value,
      pdu3_RPC5voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc05.mVoltage"].value,
      pdu3_RPC5current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc05.mCurrent"].value,
      pdu3_RPC6voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc06.mVoltage"].value,
      pdu3_RPC6current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc06.mCurrent"].value,
      pdu3_RPC7voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc07.mVoltage"].value,
      pdu3_RPC7current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc07.mCurrent"].value,
      pdu3_RPC8voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc08.mVoltage"].value,
      pdu3_RPC8current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc08.mCurrent"].value,

      pdu4_HousekeepingCurrent: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.house_keeping.mCurrent"].value,
      pdu4_MBSU1voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.mbsu01_switch.mVoltage"].value,
      pdu4_MBSU1current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.mbsu01_switch.mCurrent"].value,
      pdu4_MBSU2voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.mbsu02_switch.mVoltage"].value,
      pdu4_MBSU2current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.mbsu02_switch.mCurrent"].value,
      pdu4_RPC1voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc01.mVoltage"].value,
      pdu4_RPC1current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc01.mCurrent"].value,
      pdu4_RPC2voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc02.mVoltage"].value,
      pdu4_RPC2current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc02.mCurrent"].value,
      pdu4_RPC3voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc03.mVoltage"].value,
      pdu4_RPC3current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc03.mCurrent"].value,
      pdu4_RPC4voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc04.mVoltage"].value,
      pdu4_RPC4current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc04.mCurrent"].value,
      pdu4_RPC5voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc05.mVoltage"].value,
      pdu4_RPC5current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc05.mCurrent"].value,
      pdu4_RPC6voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc06.mVoltage"].value,
      pdu4_RPC6current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc06.mCurrent"].value,
      pdu4_RPC7voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc07.mVoltage"].value,
      pdu4_RPC7current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc07.mCurrent"].value,
      pdu4_RPC8voltage: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc08.mVoltage"].value,
      pdu4_RPC8current: trickVarMap["hab_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc08.mCurrent"].value
    }

    var hab_water = {
      waterPotableMass: trickVarMap["hab_subsystems.fswIf.tlm.eclss.wrs.potableTank.mass"].value * 2.205, 
      waterPotablePercent: trickVarMap["hab_subsystems.fswIf.tlm.eclss.wrs.potableTank.quantity"].value,
      waterWasteMass: trickVarMap["hab_subsystems.fswIf.tlm.eclss.wrs.wasteTank.mass"].value * 2.205,
      waterWasterPercent: trickVarMap["hab_subsystems.fswIf.tlm.eclss.wrs.wasteTank.quantity"].value,
      waterPotableCrewRate: trickVarMap["hab_subsystems.fswIf.tlm.eclss.wrs.potableVentValve.flowRate"].value,
      waterWasterVentRate: trickVarMap["hab_subsystems.fswIf.tlm.eclss.wrs.wasteVentValve.flowRate"].value,
      waterCcaaRate: trickVarMap["hab_subsystems.fswIf.tlm.eclss.wrs.condensateCheckValve.flowRate"].value,

      habTemp: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.temperature"].value,
      habPressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
      habN2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureN2"].value,
      habO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureO2"].value,
      habCO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureCO2"].value,
      habHumidity: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.relativeHumidity"].value,
      habH2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionH2"].value,
      habCH4: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionCH4"].value
    }      

    var hab_tcs_itcs = {
      accum1Quantity: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.accum1.quantity"].value,
      accum1Pressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.accum1.pressure"].value,
      accum2Quantity: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.accum2.quantity"].value,
      accum2Pressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.accum2.pressure"].value,
      heaterTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.heater.temperature"].value,
      heaterPower: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.heater.power"].value,
      interloopHxOutletTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.interloopHxOutlet.temperature"].value,
      interloopHxOutletCmdTemp: trickVarMap["hab_subsystems.fswIf.nominalCmd.tcs.itcs.interloopHxOutletTSetpoint"].value,
      interloopHxInletTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.interloopHxInlet.temperature"].value,
      pumpInletTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.pumpInlet.temperature"].value,
      pumpInletPressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.pumpInlet.pressure"].value,
      pump01Speed: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.pump1.speed"].value,
      pump01deltaPressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.pump1.deltaPressure"].value,
      pump01flowRate: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.pump1.flowRate"].value,
      pump02Speed: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.pump2.speed"].value,
      pump02deltaPressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.pump2.deltaPressure"].value,
      pump02flowRate: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.pump2.flowRate"].value,
      coldPlate1Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.coldplate1.temperature"].value,
      coldPlate2Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.coldplate2.temperature"].value,
      cabinHxInletTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.cabinHxSegments[0].temperature"].value,
      cabinHxTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.cabinHxSegments[1].temperature"].value,
      avionHxInletTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.cabinHxSegments[0].temperature"].value,
      avionHxTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.itcs.avionicsHxSegments[0].temperature"].value
    }

    var hab_tcs_etcsA = {
      pump01Speed: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.pump1.speed"].value,
      pump01deltaPressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.pump1.deltaPressure"].value,
      pump01flowRate: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.pump1.flowRate"].value,
      pump02Speed: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.pump2.speed"].value,
      pump02deltaPressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.pump2.deltaPressure"].value,
      pump02flowRate: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.pump2.flowRate"].value,

      accum1Quantity: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.accum1.quantity"].value,
      accum1Pressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.accum1.pressure"].value,

      pumpInletTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.pumpInlet.temperature"].value,
      pumpInletPressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.pumpInlet.pressure"].value,

      coldPlate1Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.coldplate1.temperature"].value,
      coldPlate2Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.coldplate2.temperature"].value,
      coldPlate3Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.coldplate3.temperature"].value,
      coldPlate4Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.coldplate4.temperature"].value,

      interloopHxInletTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.interloopHxInlet.temperature"].value,
      interloopHxOutletTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.interloopHxOutlet.temperature"].value,

      regenHxColdTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.regenHxSegmentsCold[4].temperature"].value,
      regenHxHotTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.regenHxSegmentsHot[5].temperature"].value,

      radiator1Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.radiator1.temperature"].value,
      radiator2Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.radiator2.temperature"].value,

      isoAflowRate: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.isoVlvA.flowRate"].value,
      isoBflowRate: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsA.isoVlvB.flowRate"].value

    }
    
    var hab_tcs_etcsB = {
      pump01Speed: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.pump1.speed"].value,
      pump01deltaPressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.pump1.deltaPressure"].value,
      pump01flowRate: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.pump1.flowRate"].value,
      pump02Speed: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.pump2.speed"].value,
      pump02deltaPressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.pump2.deltaPressure"].value,
      pump02flowRate: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.pump2.flowRate"].value,

      accum1Quantity: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.accum1.quantity"].value,
      accum1Pressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.accum1.pressure"].value,

      pumpInletTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.pumpInlet.temperature"].value,
      pumpInletPressure: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.pumpInlet.pressure"].value,

      coldPlate1Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.coldplate1.temperature"].value,
      coldPlate2Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.coldplate2.temperature"].value,
      coldPlate3Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.coldplate3.temperature"].value,
      coldPlate4Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.coldplate4.temperature"].value,

      interloopHxInletTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.interloopHxInlet.temperature"].value,
      interloopHxOutletTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.interloopHxOutlet.temperature"].value,

      regenHxColdTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.regenHxSegmentsCold[4].temperature"].value,
      regenHxHotTemp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.regenHxSegmentsHot[5].temperature"].value,

      radiator1Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.radiator1.temperature"].value,
      radiator2Temp: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.radiator2.temperature"].value,

      isoAflowRate: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.isoVlvA.flowRate"].value,
      isoBflowRate: trickVarMap["hab_subsystems.fswIf.tlm.tcs.etcsB.isoVlvB.flowRate"].value
    }

    var hab_air_cal = {
      habTemp: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.temperature"].value,
      habPressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
      habN2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureN2"].value,
      habO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureO2"].value,
      habCO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureCO2"].value,
      habHumidity: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.relativeHumidity"].value,
      habH2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionH2"].value,
      habCH4: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionCH4"].value,

      habStbdIMVfanSpeed: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.aftImvFan.speed"].value,
      habFwdImvFlow: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.ovhdAftImv.volFlowRate"].value,
      habStbdImvFlow: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.aftImv.volFlowRate"].value,
      cabinAirVentsFlow: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.cabinAirVents.volFlowRate"].value,
      habPortImvFlow: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.deckAftImv.volFlowRate"].value
    }

    var hab_air_ars = {
      tempSetPoint: trickVarMap["hab_subsystems.fswIf.nominalCmd.eclss.ars.temperatureSetpoint"].value,

      samTemperature: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.temperature"].value,
      samPressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.pressure"].value,
      samPPN2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partialPressureN2"].value,
      samPPO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partialPressureO2"].value,
      samRH: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.relativeHumidity"].value,
      samCO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionCO2"].value,
      samH2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionH2"].value,
      samCH4: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionCH4"].value,

      tccsBlowerN: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.tccs.blowerSpeed"].value,
      tccsBlowerT: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.tccs.blowerTemperature"].value,
      tccsFlowMeter: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.tccs.flowMeter"].value,
      tccsExitTemp1: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.tccs.exitTemperature1"].value,
      tccsExitTemp2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.tccs.exitTemperature2"].value,

      htcoT1: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.tccs.htcoTemperature1"].value,
      htcoT2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.tccs.htcoTemperature2"].value,

      cabinFanN: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.cabinFanSpeed"].value,
      cabinFanT: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.cabinFanTemperature"].value,
      cabinFan_dP: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.cabinFanDeltaPressure"].value,

      waterSepN: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.h2oSeparatorSpeed"].value,
      waterSepP: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.h2oSeparatorPressure"].value,

      tccvPos: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.tccvPosition"].value,

      arsFanN: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.cdra.arsFanSpeed"].value,
      arsFanT: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.cdra.arsFanTemperature"].value,
      arsFan_dP: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.cdra.arsFanDeltaPressure"].value,

      airSavePumpN: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.cdra.airSavePumpSpeed"].value,
      airSavePumpT: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.cdra.airSavePumpTemperature"].value
    }
    var hab_air_pcs = {
      habTemp: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.temperature"].value,
      habPressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
      habN2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureN2"].value,
      habO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureO2"].value,
      habCO2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureCO2"].value,
      habHumidity: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.relativeHumidity"].value,
      habH2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionH2"].value,
      habCH4: trickVarMap["hab_subsystems.fswIf.tlm.eclss.ars.sam.partsPerMillionCH4"].value,

      pcsVentFlow: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.ventValve.flowRate"].value,

      N2TankPressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.n2Tank.pressure"].value,
      N2FlowPressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.n2FlowMeter.pressure"].value,
      N2FlowRate: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.n2FlowMeter.flowRate"].value,
      N2Temperature: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.n2Exit.temperature"].value,
      O2TankPressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.o2Tank.pressure"].value,
      O2FlowPressure: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.o2FlowMeter.pressure"].value,
      O2FlowRate: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.o2FlowMeter.flowRate"].value,
      O2Temperature: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.o2Exit.temperature"].value,
      PcsController: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.controller.state"].value,
      pressureSetPnt: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.controller.pressureSetPoint"].value,
      O2SetPnt: trickVarMap["hab_subsystems.fswIf.tlm.eclss.pcs.controller.percentO2SetPoint"].value
    }

  var hal_overview = {
    halCabinTemp: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.temperature"].value,
    halCabinPressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
    halCabinN2: 100 * trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureN2"].value / trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
    halCabinO2: 100 * trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureO2"].value / trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
    halCabinDewPnt: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.dewPoint"].value,
    halCabinCO2Pressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureCO2"].value * 51.714925105101,
    halCabinFan1Speed: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ccaa.fan.speed"].value,
    halCabinFan2Speed: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.fan2.speed"].value,
    halCabinArsFan1Speed: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.fan1.speed"].value,
    halCabinArsFan2Speed: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.fan2.speed"].value,
    
    halConsO2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.consumables.O2.avgRate"].value,
    halConsN2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.consumables.N2.avgRate"].value,
    halConsWater: trickVarMap["hal_subsystems.fswIf.tlm.eclss.consumables.potableWater.avgRate"].value,
    
    halEpsBat1Charge: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mStateOfCharge"].value,
    halEpsBat1Voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mVoltage"].value,
    halEpsBat1Current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mCurrent"].value,
    halEpsBat1Power: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mPower"].value,
    
    halEpsBat2Charge: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mStateOfCharge"].value,
    halEpsBat2Voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mVoltage"].value,
    halEpsBat2Current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mCurrent"].value,
    halEpsBat2Power: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mPower"].value,

    halWaterPotableExternal: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.externalTank.mass"].value * 2.205,
    halWaterPotableReservoir: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.reservoirTank.mass"].value * 2.205,
    halWaterPotablePumpSpeed: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.reservoirTank.flowRate"].value,
    halWaterPotablePumpPressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.reservoirTank.pressure"].value,
    halWaterWasteExternal: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.externalTank.mass"].value * 2.205,
    halWaterWastePumpSpeed: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.externalTank.flowRate"].value,
    halWaterWastePumpPressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.externalTank.pressure"].value,

    halTcsCabinSetpoint: trickVarMap["hal_subsystems.fswIf.nominalCmd.eclss.cabin.ccaa.temperatureSetpoint"].value,
    halTcsCabinTccvPos: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ccaa.tccv.position"].value,
    halTcsFusibleHxOutT: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.heatSinkOutlet.temperature"].value,
    halTcsFlowRate: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.accum.flowRate"].value,
    halTcsAccumQnty: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.accum.quantity"].value,
    halTcsAccumPressue: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.accum.pressure"].value,

    halPcsSetpointPressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.controller.pressureSetPoint"].value,
    halPcsSetpointO2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.controller.percentO2SetPoint"].value,
    halPcsTankN2Pressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.n2Tank.pressure"].value,
    halPcsTankO2Pressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.o2Tank.pressure"].value,
    halPcsN2Flow: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.n2FlowMeter.flowRate"].value,
    halPcsN2Temp: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.n2Exit.temperature"].value,
    halPcsO2Flow: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.o2FlowMeter.flowRate"].value,
    halPcsO2Temp: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.o2Exit.temperature"].value
  }
  var hal_power_amps = { 
    ps1_SARvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array_regulator.mOutputVoltageSensed"].value, 
    ps1_SARcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array_regulator.mOutputCurrentSensed"].value,
    ps1_BATTvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mVoltage"].value,
    ps1_BATTcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mCurrent"].value,
    ps1_BATTcharge: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mStateOfCharge"].value,

    ps2_SARvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array_regulator.mOutputVoltageSensed"].value, 
    ps2_SARcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array_regulator.mOutputCurrentSensed"].value,
    ps2_BATTvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mVoltage"].value,
    ps2_BATTcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mCurrent"].value,
    ps2_BATTcharge: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mStateOfCharge"].value,

    mbsu1_SARelementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.sar_switch.mSwitch.mElementOnInd"].value,
    mbsu1_BATTelementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.battery_switch.mSwitch.mElementOnInd"].value,
    mbsu1_AUXelementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.aux_switch.mSwitch.mElementOnInd"].value,
    mbsu1_PDU1elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output01_switch.mSwitch.mElementOnInd"].value,
    mbsu1_PDU2elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output02_switch.mSwitch.mElementOnInd"].value,
    mbsu1_PDU3elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output03_switch.mSwitch.mElementOnInd"].value,
    mbsu1_PDU4elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output04_switch.mSwitch.mElementOnInd"].value,
    
    mbsu2_SARelementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.sar_switch.mSwitch.mElementOnInd"].value,
    mbsu2_BATTelementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.battery_switch.mSwitch.mElementOnInd"].value,
    mbsu2_AUXelementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.aux_switch.mSwitch.mElementOnInd"].value,
    mbsu2_PDU1elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output01_switch.mSwitch.mElementOnInd"].value,
    mbsu2_PDU2elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output02_switch.mSwitch.mElementOnInd"].value,
    mbsu2_PDU3elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output03_switch.mSwitch.mElementOnInd"].value,
    mbsu2_PDU4elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output04_switch.mSwitch.mElementOnInd"].value,
    
    pdu1_MBSU1elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.mbsu01_switch.mSwitch.mElementOnInd"].value,
    pdu1_MBSU2elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.mbsu02_switch.mSwitch.mElementOnInd"].value,
    pdu1_RPC1elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc01.mSwitch.mElementOnInd"].value,
    pdu1_RPC2elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc02.mSwitch.mElementOnInd"].value,
    pdu1_RPC3elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc03.mSwitch.mElementOnInd"].value,
    pdu1_RPC4elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc04.mSwitch.mElementOnInd"].value,
    pdu1_RPC5elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc05.mSwitch.mElementOnInd"].value,
    pdu1_RPC6elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc06.mSwitch.mElementOnInd"].value,
    pdu1_RPC7elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc07.mSwitch.mElementOnInd"].value,
    pdu1_RPC8elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc08.mSwitch.mElementOnInd"].value,
    
    pdu2_MBSU1elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.mbsu01_switch.mSwitch.mElementOnInd"].value,
    pdu2_MBSU2elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.mbsu02_switch.mSwitch.mElementOnInd"].value,
    pdu2_RPC1elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc01.mSwitch.mElementOnInd"].value,
    pdu2_RPC2elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc02.mSwitch.mElementOnInd"].value,
    pdu2_RPC3elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc03.mSwitch.mElementOnInd"].value,
    pdu2_RPC4elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc04.mSwitch.mElementOnInd"].value,
    pdu2_RPC5elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc05.mSwitch.mElementOnInd"].value,
    pdu2_RPC6elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc06.mSwitch.mElementOnInd"].value,
    pdu2_RPC7elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc07.mSwitch.mElementOnInd"].value,
    pdu2_RPC8elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc08.mSwitch.mElementOnInd"].value,
    
    pdu3_MBSU1elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.mbsu01_switch.mSwitch.mElementOnInd"].value,
    pdu3_MBSU2elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.mbsu02_switch.mSwitch.mElementOnInd"].value,
    pdu3_RPC1elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc01.mSwitch.mElementOnInd"].value,
    pdu3_RPC2elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc02.mSwitch.mElementOnInd"].value,
    pdu3_RPC3elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc03.mSwitch.mElementOnInd"].value,
    pdu3_RPC4elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc04.mSwitch.mElementOnInd"].value,
    pdu3_RPC5elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc05.mSwitch.mElementOnInd"].value,
    pdu3_RPC6elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc06.mSwitch.mElementOnInd"].value,
    pdu3_RPC7elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc07.mSwitch.mElementOnInd"].value,
    pdu3_RPC8elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc08.mSwitch.mElementOnInd"].value,
    
    pdu4_MBSU1elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.mbsu01_switch.mSwitch.mElementOnInd"].value,
    pdu4_MBSU2elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.mbsu02_switch.mSwitch.mElementOnInd"].value,
    pdu4_RPC1elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc01.mSwitch.mElementOnInd"].value,
    pdu4_RPC2elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc02.mSwitch.mElementOnInd"].value,
    pdu4_RPC3elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc03.mSwitch.mElementOnInd"].value,
    pdu4_RPC4elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc04.mSwitch.mElementOnInd"].value,
    pdu4_RPC5elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc05.mSwitch.mElementOnInd"].value,
    pdu4_RPC6elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc06.mSwitch.mElementOnInd"].value,
    pdu4_RPC7elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc07.mSwitch.mElementOnInd"].value,
    pdu4_RPC8elementOnInd: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc08.mSwitch.mElementOnInd"].value
  }

  var hal_power_ps = {
    ps1_SOLvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array.mVoltage"].value,
    ps1_SOLcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array.mCurrent"].value,
    ps1_SOLpower: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array.mVoltage"].value * trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array.mCurrent"].value,
    ps1_SOLintensity: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array.mPercentInsolation"].value,
    ps1_SARvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array_regulator.mOutputVoltageSensed"].value,
    ps1_SARcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.solar_array_regulator.mOutputCurrentSensed"].value,
    ps1_BATvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mVoltage"].value,
    ps1_BATcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mCurrent"].value,
    ps1_BATpower: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mPower"].value,
    ps1_BATcharge: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps01.battery.mStateOfCharge"].value * 100,

    ps2_SOLvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array.mVoltage"].value,
    ps2_SOLcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array.mCurrent"].value,
    ps2_SOLpower: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array.mVoltage"].value * trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array.mCurrent"].value,
    ps2_SOLintensity: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array.mPercentInsolation"].value,
    ps2_SARvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array_regulator.mOutputVoltageSensed"].value,
    ps2_SARcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.solar_array_regulator.mOutputCurrentSensed"].value,
    ps2_BATvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mVoltage"].value,
    ps2_BATcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mCurrent"].value,
    ps2_BATpower: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mPower"].value,
    ps2_BATcharge: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.ps02.battery.mStateOfCharge"].value * 100,
  }

  var hal_power_mbsu = {
    mbsu1_HousekeepingCurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.house_keeping.mCurrent"].value,
    mbsu1_SARvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.sar_switch.mVoltage"].value,
    mbsu1_SARcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.sar_switch.mCurrent"].value,
    mbsu1_BATTvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.battery_switch.mVoltage"].value,
    mbsu1_BATTcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.battery_switch.mCurrent"].value,
    mbsu1_AUXvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.aux_switch.mVoltage"].value,
    mbsu1_AUXcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.aux_switch.mCurrent"].value,
    mbsu1_PDU1voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output01_switch.mVoltage"].value,
    mbsu1_PDU1current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output01_switch.mCurrent"].value,
    mbsu1_PDU2voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output02_switch.mVoltage"].value,
    mbsu1_PDU2current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output02_switch.mCurrent"].value,
    mbsu1_PDU3voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output03_switch.mVoltage"].value,
    mbsu1_PDU3current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output03_switch.mCurrent"].value,
    mbsu1_PDU4voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output04_switch.mVoltage"].value,
    mbsu1_PDU4current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu01.output04_switch.mCurrent"].value,

    mbsu2_HousekeepingCurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.house_keeping.mCurrent"].value,
    mbsu2_SARvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.sar_switch.mVoltage"].value,
    mbsu2_SARcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.sar_switch.mCurrent"].value,
    mbsu2_BATTvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.battery_switch.mVoltage"].value,
    mbsu2_BATTcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.battery_switch.mCurrent"].value,
    mbsu2_AUXvoltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.aux_switch.mVoltage"].value,
    mbsu2_AUXcurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.aux_switch.mCurrent"].value,
    mbsu2_PDU1voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output01_switch.mVoltage"].value,
    mbsu2_PDU1current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output01_switch.mCurrent"].value,
    mbsu2_PDU2voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output02_switch.mVoltage"].value,
    mbsu2_PDU2current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output02_switch.mCurrent"].value,
    mbsu2_PDU3voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output03_switch.mVoltage"].value,
    mbsu2_PDU3current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output03_switch.mCurrent"].value,
    mbsu2_PDU4voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output04_switch.mVoltage"].value,
    mbsu2_PDU4current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.mbsu02.output04_switch.mCurrent"].value
  }

  var hal_power_pdu12 = {
    pdu1_HousekeepingCurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.house_keeping.mCurrent"].value,
    pdu1_MBSU1voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.mbsu01_switch.mVoltage"].value,
    pdu1_MBSU1current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.mbsu01_switch.mCurrent"].value,
    pdu1_MBSU2voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.mbsu02_switch.mVoltage"].value,
    pdu1_MBSU2current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.mbsu02_switch.mCurrent"].value,
    pdu1_RPC1voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc01.mVoltage"].value,
    pdu1_RPC1current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc01.mCurrent"].value,
    pdu1_RPC2voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc02.mVoltage"].value,
    pdu1_RPC2current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc02.mCurrent"].value,
    pdu1_RPC3voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc03.mVoltage"].value,
    pdu1_RPC3current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc03.mCurrent"].value,
    pdu1_RPC4voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc04.mVoltage"].value,
    pdu1_RPC4current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc04.mCurrent"].value,
    pdu1_RPC5voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc05.mVoltage"].value,
    pdu1_RPC5current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc05.mCurrent"].value,
    pdu1_RPC6voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc06.mVoltage"].value,
    pdu1_RPC6current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc06.mCurrent"].value,
    pdu1_RPC7voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc07.mVoltage"].value,
    pdu1_RPC7current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc07.mCurrent"].value,
    pdu1_RPC8voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc08.mVoltage"].value,
    pdu1_RPC8current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu01.rpc08.mCurrent"].value,

    pdu2_HousekeepingCurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.house_keeping.mCurrent"].value,
    pdu2_MBSU1voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.mbsu01_switch.mVoltage"].value,
    pdu2_MBSU1current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.mbsu01_switch.mCurrent"].value,
    pdu2_MBSU2voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.mbsu02_switch.mVoltage"].value,
    pdu2_MBSU2current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.mbsu02_switch.mCurrent"].value,
    pdu2_RPC1voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc01.mVoltage"].value,
    pdu2_RPC1current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc01.mCurrent"].value,
    pdu2_RPC2voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc02.mVoltage"].value,
    pdu2_RPC2current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc02.mCurrent"].value,
    pdu2_RPC3voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc03.mVoltage"].value,
    pdu2_RPC3current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc03.mCurrent"].value,
    pdu2_RPC4voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc04.mVoltage"].value,
    pdu2_RPC4current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc04.mCurrent"].value,
    pdu2_RPC5voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc05.mVoltage"].value,
    pdu2_RPC5current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc05.mCurrent"].value,
    pdu2_RPC6voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc06.mVoltage"].value,
    pdu2_RPC6current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc06.mCurrent"].value,
    pdu2_RPC7voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc07.mVoltage"].value,
    pdu2_RPC7current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc07.mCurrent"].value,
    pdu2_RPC8voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc08.mVoltage"].value,
    pdu2_RPC8current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu02.rpc08.mCurrent"].value
  }

  var hal_power_pdu34 = {
    pdu3_HousekeepingCurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.house_keeping.mCurrent"].value,
    pdu3_MBSU1voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.mbsu01_switch.mVoltage"].value,
    pdu3_MBSU1current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.mbsu01_switch.mCurrent"].value,
    pdu3_MBSU2voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.mbsu02_switch.mVoltage"].value,
    pdu3_MBSU2current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.mbsu02_switch.mCurrent"].value,
    pdu3_RPC1voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc01.mVoltage"].value,
    pdu3_RPC1current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc01.mCurrent"].value,
    pdu3_RPC2voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc02.mVoltage"].value,
    pdu3_RPC2current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc02.mCurrent"].value,
    pdu3_RPC3voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc03.mVoltage"].value,
    pdu3_RPC3current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc03.mCurrent"].value,
    pdu3_RPC4voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc04.mVoltage"].value,
    pdu3_RPC4current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc04.mCurrent"].value,
    pdu3_RPC5voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc05.mVoltage"].value,
    pdu3_RPC5current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc05.mCurrent"].value,
    pdu3_RPC6voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc06.mVoltage"].value,
    pdu3_RPC6current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc06.mCurrent"].value,
    pdu3_RPC7voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc07.mVoltage"].value,
    pdu3_RPC7current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc07.mCurrent"].value,
    pdu3_RPC8voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc08.mVoltage"].value,
    pdu3_RPC8current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu03.rpc08.mCurrent"].value,

    pdu4_HousekeepingCurrent: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.house_keeping.mCurrent"].value,
    pdu4_MBSU1voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.mbsu01_switch.mVoltage"].value,
    pdu4_MBSU1current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.mbsu01_switch.mCurrent"].value,
    pdu4_MBSU2voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.mbsu02_switch.mVoltage"].value,
    pdu4_MBSU2current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.mbsu02_switch.mCurrent"].value,
    pdu4_RPC1voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc01.mVoltage"].value,
    pdu4_RPC1current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc01.mCurrent"].value,
    pdu4_RPC2voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc02.mVoltage"].value,
    pdu4_RPC2current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc02.mCurrent"].value,
    pdu4_RPC3voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc03.mVoltage"].value,
    pdu4_RPC3current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc03.mCurrent"].value,
    pdu4_RPC4voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc04.mVoltage"].value,
    pdu4_RPC4current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc04.mCurrent"].value,
    pdu4_RPC5voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc05.mVoltage"].value,
    pdu4_RPC5current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc05.mCurrent"].value,
    pdu4_RPC6voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc06.mVoltage"].value,
    pdu4_RPC6current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc06.mCurrent"].value,
    pdu4_RPC7voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc07.mVoltage"].value,
    pdu4_RPC7current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc07.mCurrent"].value,
    pdu4_RPC8voltage: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc08.mVoltage"].value,
    pdu4_RPC8current: trickVarMap["hal_amps_fsw.amps_fsw_io.AmpsTlm.pdu04.rpc08.mCurrent"].value
  }
  var hal_water_potable = {
    hatch1Valve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.hatch1Valve.position"].value, 
    hatch2Valve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.hatch2Valve.position"].value, 
    hatch3Valve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.hatch3Valve.position"].value, 
    pupIsoValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pupIsoValve.position"].value, 
    externalIsoValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.externalIsoValve.position"].value, 
    externalTankValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.externalTankValve.position"].value,
    h2oReservoirValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.h2oReservoirValve.position"].value, 
    hatch1Valve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.hatch1Valve.flowRate"].value, 
    hatch2Valve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.hatch2Valve.flowRate"].value, 
    hatch3Valve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.hatch3Valve.flowRate"].value, 
    pupIsoValve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pupIsoValve.flowRate"].value, 
    externalIsoValve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.externalIsoValve.flowRate"].value,
    externalTankValve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.externalTankValve.flowRate"].value, 
    h2oReservoirValve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.h2oReservoirValve.flowRate"].value, 
    externalTank_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.externalTank.flowRate"].value,
    externalTank_quantity: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.externalTank.quantity"].value,
    externalTank_mass: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.externalTank.mass"].value, 
    externalTank_pressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.externalTank.pressure"].value,
    externalTank_temperature: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.externalTank.temperature"].value,
    reservoirTank_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.reservoirTank.flowRate"].value, 
    reservoirTank_quantity: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.reservoirTank.quantity"].value, 
    reservoirTank_mass: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.reservoirTank.mass"].value,
    reservoirTank_pressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.reservoirTank.pressure"].value,
    reservoirTank_temperature: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.reservoirTank.temperature"].value,
    pumpExitValve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpExitValve.flowRate"].value, 
    pumpExitValve_flowRateB: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpExitValve.flowRateB"].value, 
    pumpExitValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpExitValve.position"].value,
    galley_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.galley.flowRate"].value,

    directionVlvIn_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.directionVlvIn.flowRate"].value,
    directionVlvIn_flowRateB: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.directionVlvIn.flowRateB"].value,
    directionVlvIn_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.directionVlvIn.position"].value,
    directionVlvOut_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.directionVlvOut.flowRate"].value,
    directionVlvOut_flowRateB: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.directionVlvOut.flowRateB"].value,
    directionVlvOut_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.directionVlvOut.position"].value,
    reliefValve1_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.reliefValve1.flowRate"].value,
    reliefValve1_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.reliefValve1.position"].value,
    reliefValve2_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.reliefValve2.flowRate"].value,
    reliefValve2_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.reliefValve2.position"].value,
    pump_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.pump.flowRate"].value,
    pump_speed: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.pump.speed"].value,
    pump_deltaPressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.potWater.pumpPack.pump.deltaPressure"].value
  }
  var hal_water_waste = {
    hatch1Valve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.hatch1Valve.position"].value,
    hatch2Valve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.hatch2Valve.position"].value,
    hatch3Valve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.hatch3Valve.position"].value,
    pupIsoValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pupIsoValve.position"].value,
    externalIsoValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.externalIsoValve.position"].value,
    externalTankValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.externalTankValve.position"].value,
    hatch1Valve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.hatch1Valve.flowRate"].value,
    hatch2Valve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.hatch2Valve.flowRate"].value,
    hatch3Valve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.hatch3Valve.flowRate"].value,
    pupIsoValve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pupIsoValve.flowRate"].value,
    externalIsoValve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.externalIsoValve.flowRate"].value,
    externalTankValve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.externalTankValve.flowRate"].value,
    chxSeparatorOutlet_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.chxSeparatorOutlet.flowRate"].value,
    externalTank_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.externalTank.flowRate"].value,
    externalTank_quantity: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.externalTank.quantity"].value,
    externalTank_mass: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.externalTank.mass"].value,
    externalTank_pressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.externalTank.pressure"].value,
    externalTank_temperature: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.externalTank.temperature"].value,
    accumulator_quantity: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.accumulator.quantity"].value,
    accumulator_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.accumulator.flowRate"].value,

    directionVlvIn_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.directionVlvIn.flowRate"].value,
    directionVlvIn_flowRateB: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.directionVlvIn.flowRateB"].value,
    directionVlvIn_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.directionVlvIn.position"].value,
    directionVlvOut_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.directionVlvOut.flowRate"].value,
    directionVlvOut_flowRateB: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.directionVlvOut.flowRateB"].value,
    directionVlvOut_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.directionVlvOut.position"].value,
    reliefValve1_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.reliefValve1.flowRate"].value,
    reliefValve1_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.reliefValve1.position"].value,
    reliefValve2_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.reliefValve2.flowRate"].value,
    reliefValve2_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.reliefValve2.position"].value,
    pump_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.pump.flowRate"].value,
    pump_speed: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.pump.speed"].value,
    pump_deltaPressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.wasteWater.pumpPack.pump.deltaPressure"].value
  }
  var hal_tcs = {
    accum_pressure: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.accum.pressure"].value,
    accum_quantity: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.accum.quantity"].value,
    accum_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.accum.flowRate"].value,
    heatSinkInletVlv_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.heatSinkInletVlv.flowRate"].value,
    heatSinkInletVlv_position: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.heatSinkInletVlv.position"].value,
    chxOutletVlv_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.chxOutletVlv.flowRate"].value,
    chxOutletVlv_position: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.chxOutletVlv.position"].value,
    heatSinkBypassVlv_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.heatSinkBypassVlv.flowRate"].value,
    heatSinkBypassVlv_position: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.heatSinkBypassVlv.position"].value,
    pumpA_deltaPressure: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.pumpA.deltaPressure"].value,
    pumpA_speed: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.pumpA.speed"].value,
    pumpA_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.pumpA.flowRate"].value,
    pumpB_deltaPressure: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.pumpB.deltaPressure"].value,
    pumpB_speed: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.pumpB.speed"].value,
    pumpB_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.pumpB.flowRate"].value,
    coldplatesInlet_temperature: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.coldplatesInlet.temperature"].value,
    heatSinkInlet_temperature: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.heatSinkInlet.temperature"].value,
    heatSinkOutlet_temperature: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.heatSinkOutlet.temperature"].value,
    cabinHxInlet_temperature: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.cabinHxInlet.temperature"].value,
    cabinHxOutlet_temperature: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.cabinHxOutlet.temperature"].value,
    pumpInlet_temperature: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.pumpInlet.temperature"].value,
    heatSinkTemp_temperature: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.heatSinkTemp.temperature"].value,
    cabinHxInlet_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.cabinHxInlet.flowRate"].value,
    heatSinkHotPhaseFrac: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.heatSinkHotPhaseFrac"].value,
    heatSinkOutlet_power: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.heatSinkOutlet.power"].value,
    heatSinkTemp_power: trickVarMap["hal_subsystems.fswIf.tlm.tcs.atcs.heatSinkTemp.power"].value,
    hxOutletTemp_mCautionFlag: trickVarMap["hal_subsystems.caution_and_failure.tcs.hxOutletTemp.mCautionFlag"].value,
    flowRate_mCautionFlag: trickVarMap["hal_subsystems.caution_and_failure.tcs.flowRate.mCautionFlag"].value,
    accumPressure_mCautionFlag: trickVarMap["hal_subsystems.caution_and_failure.tcs.accumPressure.mCautionFlag"].value,
    pumpASpeed_mCautionFlag: trickVarMap["hal_subsystems.caution_and_failure.tcs.pumpASpeed.mCautionFlag"].value,
    pumpAPressure_mCautionFlag: trickVarMap["hal_subsystems.caution_and_failure.tcs.pumpAPressure.mCautionFlag"].value,
    pumpBSpeed_mCautionFlag: trickVarMap["hal_subsystems.caution_and_failure.tcs.pumpBSpeed.mCautionFlag"].value,
    pumpBPressure_mCautionFlag: trickVarMap["hal_subsystems.caution_and_failure.tcs.pumpBPressure.mCautionFlag"].value,
    cabinHxInletTSetpoint: trickVarMap["hal_subsystems.fswIf.nominalCmd.tcs.atcs.cabinHxInletTSetpoint"].value
  }
  var hal_air_cal = {
    halTemp: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.temperature"].value,
    halPressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
    halN2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureN2"].value,
    halO2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureO2"].value,
    halCO2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureCO2"].value,
    halHumidity: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.relativeHumidity"].value,
    halH2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.moleFractionH2"].value,
    halCH4: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.moleFractionCH4"].value,

    temperatureSetPoint: trickVarMap["hal_subsystems.fswIf.nominalCmd.eclss.cabin.ccaa.temperatureSetpoint"].value,
    fan1FlowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ccaa.fan.volFlowRate"].value,
    fan1Speed: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ccaa.fan.speed"].value,
    fan1deltaPressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ccaa.fan.deltaPressure"].value,
    fan2FlowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.fan2.volFlowRate"].value,
    fan2Speed: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.fan2.speed"].value,
    fan2deltaPressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.fan2.deltaPressure"].value,
    imv1_openFlag: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.imv1.openFlag"].value,
    imv1_volFlowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.imv1.volFlowRate"].value,
    imv2_openFlag: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.imv2.openFlag"].value,
    imv2_volFlowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.imv2.volFlowRate"].value,
    imv3_openFlag: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.imv3.openFlag"].value,
    imv3_volFlowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.imv3.volFlowRate"].value,
    chxInletTemperature: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ccaa.inlet.temperature"].value,
    chxInletFlowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ccaaInletDuct.volFlowRate"].value,
    chxBypassValvePosition: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ccaa.tccv.position"].value,
    chxBypassValveFlow: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ccaa.tccv.volFlowRate"].value,
    chxOutletTemperature: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ccaa.outlet.temperature"].value,
    chxOutletFlowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ccaa.outlet.volFlowRate"].value
  }
  var hal_air_ars = {
    fan1_enable: trickVarMap["hal_subsystems.fswIf.nominalCmd.eclss.cabin.ars.fan1.enable"].value,
    fan2_enable: trickVarMap["hal_subsystems.fswIf.nominalCmd.eclss.cabin.ars.fan2.enable"].value,
    fan1_volFlowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.fan1.volFlowRate"].value,
    fan1_speed: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.fan1.speed"].value,
    fan2_volFlowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.fan2.volFlowRate"].value,
    fan2_speed: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.fan2.speed"].value,

    rca1_bypass: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.rca1.bypass"].value,
    rca2_bypass: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.rca2.bypass"].value,
    rca3_bypass: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.rca3.bypass"].value,
    rca4_bypass: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.rca4.bypass"].value,
    rca1_swingValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.rca1.swingValve.position"].value,
    rca2_swingValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.rca2.swingValve.position"].value,
    rca3_swingValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.rca3.swingValve.position"].value,
    rca4_swingValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.rca4.swingValve.position"].value,
    
    controllerMode: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.controllerMode"].value,
    ventVlv1_openFlag: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.ventVlv1.openFlag"].value,
    ventVlv2_openFlag: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.ventVlv2.openFlag"].value,
    sam1_temperature: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam1.temperature"].value,
    sam1_pressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam1.pressure"].value,
    sam1_partialPressureN2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam1.partialPressureN2"].value,
    sam1_partialPressureO2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam1.partialPressureO2"].value,
    sam1_relativeHumidity: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam1.relativeHumidity"].value,
    sam1_partsPerMillionCO2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam1.partsPerMillionCO2"].value,
    sam1_partsPerMillionCH4: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam1.partsPerMillionCH4"].value,
    sam1_partsPerMillionH2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam1.partsPerMillionH2"].value,
    sam2_temperature: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam2.temperature"].value,
    sam2_pressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam2.pressure"].value,
    sam2_partialPressureN2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam2.partialPressureN2"].value,
    sam2_partialPressureO2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam2.partialPressureO2"].value,
    sam2_relativeHumidity: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam2.relativeHumidity"].value,
    sam2_partsPerMillionCO2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam2.partsPerMillionCO2"].value,
    sam2_partsPerMillionCH4: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam2.partsPerMillionCH4"].value,
    sam2_partsPerMillionH2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.ars.sam2.partsPerMillionH2"].value
  }
  var hal_air_pcs = {
    halTemp: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.temperature"].value,
    halPressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.pressure"].value,
    halN2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureN2"].value,
    halO2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureO2"].value,
    halCO2: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.partialPressureCO2"].value,
    halHumidity: trickVarMap["hal_subsystems.fswIf.tlm.eclss.cabin.atmosphere.relativeHumidity"].value,
    halH2: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.moleFractionH2"].value,
    halCH4: trickVarMap["hab_subsystems.fswIf.tlm.eclss.cabin.atmosphere.moleFractionCH4"].value,

    controller_state: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.controller.state"].value,
    n2FlowMeter_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.n2FlowMeter.flowRate"].value,
    n2RegValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.n2RegValve.position"].value,
    n2FlowMeter_pressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.n2FlowMeter.pressure"].value,
    n2Exit_temperature: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.n2Exit.temperature"].value,
    n2SolValveHigh_openFlag: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.n2SolValveHigh.openFlag"].value,
    n2SolValveLow_openFlag: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.n2SolValveLow.openFlag"].value,
    n2Tank_pressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.n2Tank.pressure"].value,
    n2Tank_quantity: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.n2Tank.quantity"].value,
    o2FlowMeter_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.o2FlowMeter.flowRate"].value,
    o2RegValve_position: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.o2RegValve.position"].value,
    o2FlowMeter_pressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.o2FlowMeter.pressure"].value,
    o2Exit_temperature: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.o2Exit.temperature"].value,
    o2SolValveHigh_openFlag: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.o2SolValveHigh.openFlag"].value,
    o2SolValveLow_openFlag: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.o2SolValveLow.openFlag"].value,
    o2Tank_pressure: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.o2Tank.pressure"].value,
    o2Tank_quantity: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.o2Tank.quantity"].value,
    controller_percentO2SetPoint: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.controller.percentO2SetPoint"].value,
    controller_pressureSetPoint: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.controller.pressureSetPoint"].value,
    ventValve_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.ventValve.flowRate"].value,
    ventValve_openFlag: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.ventValve.openFlag"].value,
    o2Tank_flowRate: trickVarMap["hal_subsystems.fswIf.tlm.eclss.pcs.o2Tank.flowRate"].value
  }

  var crew = {
    crewMpcvO2: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.mpcv.consumedO2"].value,
    crewMpcvH2O: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.mpcv.producedH2O"].value,
    crewMpcvCO2: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.mpcv.producedCO2"].value,
    crewMpcvHeat: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.mpcv.producedHeat"].value,
    crewHabO2: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.hab.consumedO2"].value,
    crewHabH2O: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.hab.producedH2O"].value,
    crewHabCO2: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.hab.producedCO2"].value,
    crewHabHeat: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.hab.producedHeat"].value,
    crewHalO2: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.hal.consumedO2"].value,
    crewHalH2O: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.hal.producedH2O"].value,
    crewHalCO2: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.hal.producedCO2"].value,
    crewHalHeat: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.hal.producedHeat"].value,
    crewMember1State: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.crewMember1.state"].value,
    crewMember2State: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.crewMember2.state"].value,
    crewMember3State: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.crewMember3.state"].value,
    crewMember4State: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.crewMember4.state"].value,
    crewMember1Location: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.crewMember1.location"].value,
    crewMember2Location: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.crewMember2.location"].value,
    crewMember3Location: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.crewMember3.location"].value,
    crewMember4Location: trickVarMap["stack_subsystems.fswIf.tlm.eclss.crew.crewMember4.location"].value
  }

  var subsVarList = {
    mpcv_hab_air: mpcv_hab_air , 
    hab_hal_air: hab_hal_air , 
    mpcv_pcs: mpcv_pcs , 

    hab_overview: hab_overview , 
    hab_power_amps: hab_power_amps , 
    hab_power_ps: hab_power_ps , 
    hab_power_mbsu: hab_power_mbsu ,
    hab_power_pdu12: hab_power_pdu12 , 
    hab_power_pdu34: hab_power_pdu34 , 
    hab_water: hab_water , 
    hab_tcs_itcs: hab_tcs_itcs , 
    hab_tcs_etcsA: hab_tcs_etcsA , 
    hab_tcs_etcsB: hab_tcs_etcsB , 
    hab_air_cal: hab_air_cal , 
    hab_air_ars: hab_air_ars , 
    hab_air_pcs: hab_air_pcs , 

    hal_overview: hal_overview ,
    hal_power_amps: hal_power_amps ,
    hal_power_ps: hal_power_ps ,
    hal_power_mbsu: hal_power_mbsu ,
    hal_power_pdu12: hal_power_pdu12 ,
    hal_power_pdu34: hal_power_pdu34 ,
    hal_water_potable: hal_water_potable ,
    hal_water_waste: hal_water_waste ,
    hal_tcs: hal_tcs ,
    hal_air_cal: hal_air_cal ,
    hal_air_ars: hal_air_ars ,
    hal_air_pcs: hal_air_pcs ,

    crew: crew 
  }

  return(subsVarList)
}

module.exports = {
  style, // For notifications (App container and Notifications view)
  thArray,
  tdArray, // For tables (TableList view)
  socket,
  iconsArray, // For icons (Icons view)
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar, // For charts (Dashboard view)
  getSubSysVars
};
