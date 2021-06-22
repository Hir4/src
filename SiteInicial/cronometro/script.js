// ds ir ate o 99
var bep = document.getElementById("myAudio");
var hours;
var minutes;
var seconds;
var ds;
class Timer {
  constructor() { 
    this.time;
    this.currentTime;
    this.timerInterval = 100;
    this.callbackTimeout;
    this.callbackTimeInterval;
    this.internalTimer;
    this.internalTimeout;
  }
  setTimer(_timer) {
    this.time = _timer;
  }
  setTimerInterval(_timerInterval = 22) {
    this.timerInterval = _timerInterval;
  }
  setCallbackTimeout(_callbackTimeout) {
    this.callbackTimeout = _callbackTimeout;
  }
  setCallbackTimeInterval(_callbackTimeInterval) {
    this.callbackTimeInterval = _callbackTimeInterval;
  }
  getCurrentTime() {
    this.currentTime -= this.timerInterval;

    hours = Math.floor(this.currentTime / 3600000);
    minutes = Math.floor((this.currentTime - (hours * 3600000)) / 60000);
    seconds = Math.floor((this.currentTime - (hours * 3600000) - (minutes * 60000)) / 1000);
    ds = Math.floor((this.currentTime - (hours * 3600000) - (minutes * 60000) - (seconds * 1000)) / 100);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    if (ds < 10) { ds = "0" + ds; }

  }

  startTimer() {
    this.currentTime = (this.time + this.timerInterval);
    this.internalTimer = setInterval(this.callbackTimeInterval, this.timerInterval);
    this.internalTimeout = setTimeout(this.callbackTimeout, (this.time + this.timerInterval));
  }
  stopTimer() {
    clearInterval(this.internalTimer);
    clearInterval(this.internalTimeout);
  }
  resumeTimer() {
    this.internalTimeout = setTimeout(this.callbackTimeout, (this.currentTime + this.timerInterval));
    this.internalTimer = setInterval(this.callbackTimeInterval, this.timerInterval);
  }
  clearTimer() {
    this.currentTime = 0;
    clearInterval(this.internalTimer);
    clearInterval(this.internalTimeout);
  }
}

///////////////////
// CLASSE TIMER 1//
///////////////////
let timer = new Timer();

var countH = 0;
var countM = 0;
var countS = 0;
var countDS = 0;
hoursValue = () => {
  plusNumb = () => {
    countH++;
    if (countH < 100) {
      if (countH < 10) {
        document.getElementById('hour1').innerHTML = "0" + countH;
      } else {
        document.getElementById('hour1').innerHTML = countH;
      }
    }
    minusNumb = () => {
      if (countH > 0) {
        countH--;
        if (countH < 100) {
          if (countH < 10) {
            document.getElementById('hour1').innerHTML = "0" + countH;
          } else {
            document.getElementById('hour1').innerHTML = countH;
          }
        }
      }
    }
  }
}
minuteValue = () => {
  plusNumb = () => {
    countM++;
    if (countM < 100) {
      if (countM < 10) {
        document.getElementById('minute1').innerHTML = "0" + countM;
      } else {
        document.getElementById('minute1').innerHTML = countM;
      }
    }
  }
  minusNumb = () => {
    if (countM > 0) {
      countM--;
      if (countM < 100) {
        if (countM < 10) {
          document.getElementById('minute1').innerHTML = "0" + countM;
        } else {
          document.getElementById('minute1').innerHTML = countM;
        }
      }
    }
  }
}
secondValue = () => {
  plusNumb = () => {
    countS++;
    if (countS < 100) {
      if (countS < 10) {
        document.getElementById('second1').innerHTML = "0" + countS;
      } else {
        document.getElementById('second1').innerHTML = countS;
      }
    }
  }
  minusNumb = () => {
    if (countS > 0) {
      countS--;
      if (countS < 100) {
        if (countS < 10) {
          document.getElementById('second1').innerHTML = "0" + countS;
        } else {
          document.getElementById('second1').innerHTML = countS;
        }
      }
    }
  }
}
decsecValue = () => {
  plusNumb = () => {
    countDS++;
    if (countDS < 100) {
      if (countDS < 10) {
        document.getElementById('decsec1').innerHTML = "0" + countDS;
      } else {
        document.getElementById('decsec1').innerHTML = countDS;
      }
    }
  }
  minusNumb = () => {
    if (countDS > 0) {
      countDS--;
      if (countDS < 100) {
        if (countDS < 10) {
          document.getElementById('decsec1').innerHTML = "0" + countDS;
        } else {
          document.getElementById('decsec1').innerHTML = countDS;
        }
      }
    }
  }
}

eraseAll = () => {
  timer.clearTimer();
  countH = 0;
  countM = 0;
  countS = 0;
  countDS = 0;
  document.getElementById('hour1').innerHTML = "00";
  document.getElementById('minute1').innerHTML = "00";
  document.getElementById('second1').innerHTML = "00";
  document.getElementById('decsec1').innerHTML = "00";
  document.getElementById('mais1').disabled = false;
  document.getElementById('menos1').disabled = false;
  document.getElementById('start1').disabled = false;
  bep.pause();
}
resume = () => {
  timer.resumeTimer();
}
stop = () => {
  timer.stopTimer();
  bep.pause();
}
running = () => {
  console.log(timer.getCurrentTime());
  bep.play();
  document.getElementById('hour1').innerHTML = hours;
  document.getElementById('minute1').innerHTML = minutes;
  document.getElementById('second1').innerHTML = seconds;
  document.getElementById('decsec1').innerHTML = ds;

  if (hours == 0 && minutes == 0 && seconds == 0 && ds == 0) {
    document.getElementById('mais1').disabled = false;
    document.getElementById('menos1').disabled = false;
    document.getElementById('start1').disabled = false;
    countH = 0;
    countM = 0;
    countS = 0;
    countDS = 0;
  }
}
start = () => {
  if (countH > 0 || countM > 0 || countS > 0 || countDS > 0) {
    document.getElementById('mais1').disabled = true;
    document.getElementById('menos1').disabled = true;
    document.getElementById('start1').disabled = true;
    var ms = ((countH * 3600000) + (countM * 60000) + (countS * 1000) + countDS);
    console.log(ms);
    timer.setTimer(ms);
    timer.setTimerInterval();
    timer.setCallbackTimeout(stop);
    timer.setCallbackTimeInterval(running);
    timer.startTimer();
  }
}

///////////////////
// CLASSE TIMER 2//
///////////////////

let timer2 = new Timer();

var countH2 = 0;
var countM2 = 0;
var countS2 = 0;
var countDS2 = 0;
hoursValue2 = () => {
  plusNumb2 = () => {
    countH2++;
    if (countH2 < 100) {
      if (countH2 < 10) {
        document.getElementById('hour2').innerHTML = "0" + countH2;
      } else {
        document.getElementById('hour2').innerHTML = countH2;
      }
    }
    minusNumb2 = () => {
      if (countH2 > 0) {
        countH2--;
        if (countH2 < 100) {
          if (countH2 < 10) {
            document.getElementById('hour2').innerHTML = "0" + countH2;
          } else {
            document.getElementById('hour2').innerHTML = countH2;
          }
        }
      }
    }
  }
}
minuteValue2 = () => {
  plusNumb2 = () => {
    countM2++;
    if (countM2 < 100) {
      if (countM2 < 10) {
        document.getElementById('minute2').innerHTML = "0" + countM2;
      } else {
        document.getElementById('minute2').innerHTML = countM2;
      }
    }
  }
  minusNumb2 = () => {
    if (countM2 > 0) {
      countM2--;
      if (countM2 < 100) {
        if (countM2 < 10) {
          document.getElementById('minute2').innerHTML = "0" + countM2;
        } else {
          document.getElementById('minute2').innerHTML = countM2;
        }
      }
    }
  }
}
secondValue2 = () => {
  plusNumb2 = () => {
    countS2++;
    if (countS2 < 100) {
      if (countS2 < 10) {
        document.getElementById('second2').innerHTML = "0" + countS2;
      } else {
        document.getElementById('second2').innerHTML = countS2;
      }
    }
  }
  minusNumb2 = () => {
    if (countS2 > 0) {
      countS2--;
      if (countS2 < 100) {
        if (countS2 < 10) {
          document.getElementById('second2').innerHTML = "0" + countS2;
        } else {
          document.getElementById('second2').innerHTML = countS2;
        }
      }
    }
  }
}
decsecValue2 = () => {
  plusNumb2 = () => {
    countDS2++;
    if (countDS2 < 100) {
      if (countDS2 < 10) {
        document.getElementById('decsec2').innerHTML = "0" + countDS2;
      } else {
        document.getElementById('decsec2').innerHTML = countDS2;
      }
    }
  }
  minusNumb2 = () => {
    if (countDS2 > 0) {
      countDS2--;
      if (countDS2 < 100) {
        if (countDS2 < 10) {
          document.getElementById('decsec2').innerHTML = "0" + countDS2;
        } else {
          document.getElementById('decsec2').innerHTML = countDS2;
        }
      }
    }
  }
}

eraseAll2 = () => {
  timer2.clearTimer();
  countH2 = 0;
  countM2 = 0;
  countS2 = 0;
  countDS2 = 0;
  document.getElementById('hour2').innerHTML = "00";
  document.getElementById('minute2').innerHTML = "00";
  document.getElementById('second2').innerHTML = "00";
  document.getElementById('decsec2').innerHTML = "00";
  document.getElementById('mais2').disabled = false;
  document.getElementById('menos2').disabled = false;
  document.getElementById('start2').disabled = false;
  bep.pause();
}
resume2 = () => {
  timer2.resumeTimer();
}
stop2 = () => {
  timer2.stopTimer();
  bep.pause();
}
running2 = () => {
  console.log(timer2.getCurrentTime());
  bep.play();
  document.getElementById('hour2').innerHTML = hours;
  document.getElementById('minute2').innerHTML = minutes;
  document.getElementById('second2').innerHTML = seconds;
  document.getElementById('decsec2').innerHTML = ds;

  if (hours == 0 && minutes == 0 && seconds == 0 && ds == 0) {
    document.getElementById('mais2').disabled = false;
    document.getElementById('menos2').disabled = false;
    document.getElementById('start2').disabled = false;
    countH2 = 0;
    countM2 = 0;
    countS2 = 0;
    countDS2 = 0;
  }
}
start2 = () => {
  if (countH2 > 0 || countM2 > 0 || countS2 > 0 || countDS2 > 0) {
    document.getElementById('mais2').disabled = true;
    document.getElementById('menos2').disabled = true;
    document.getElementById('start2').disabled = true;
    var ms = ((countH2 * 3600000) + (countM2 * 60000) + (countS2 * 1000) + countDS2);
    console.log(ms);
    timer2.setTimer(ms);
    timer2.setTimerInterval();
    timer2.setCallbackTimeout(stop2);
    timer2.setCallbackTimeInterval(running2);
    timer2.startTimer();
  }
}

///////////////////
// CLASSE TIMER 3//
///////////////////

let timer3 = new Timer();

var countH3 = 0;
var countM3 = 0;
var countS3 = 0;
var countDS3 = 0;
hoursValue3 = () => {
  plusNumb3 = () => {
    countH3++;
    if (countH3 < 100) {
      if (countH3 < 10) {
        document.getElementById('hour3').innerHTML = "0" + countH3;
      } else {
        document.getElementById('hour3').innerHTML = countH3;
      }
    }
    minusNumb3 = () => {
      if (countH3 > 0) {
        countH3--;
        if (countH3 < 100) {
          if (countH3 < 10) {
            document.getElementById('hour3').innerHTML = "0" + countH3;
          } else {
            document.getElementById('hour3').innerHTML = countH3;
          }
        }
      }
    }
  }
}
minuteValue3 = () => {
  plusNumb3 = () => {
    countM3++;
    if (countM3 < 100) {
      if (countM3 < 10) {
        document.getElementById('minute3').innerHTML = "0" + countM3;
      } else {
        document.getElementById('minute3').innerHTML = countM3;
      }
    }
  }
  minusNumb3 = () => {
    if (countM3 > 0) {
      countM3--;
      if (countM3 < 100) {
        if (countM3 < 10) {
          document.getElementById('minute3').innerHTML = "0" + countM3;
        } else {
          document.getElementById('minute3').innerHTML = countM3;
        }
      }
    }
  }
}
secondValue3 = () => {
  plusNumb3 = () => {
    countS3++;
    if (countS3 < 100) {
      if (countS3 < 10) {
        document.getElementById('second3').innerHTML = "0" + countS3;
      } else {
        document.getElementById('second3').innerHTML = countS3;
      }
    }
  }
  minusNumb3 = () => {
    if (countS3 > 0) {
      countS3--;
      if (countS3 < 100) {
        if (countS3 < 10) {
          document.getElementById('second3').innerHTML = "0" + countS3;
        } else {
          document.getElementById('second3').innerHTML = countS3;
        }
      }
    }
  }
}
decsecValue3 = () => {
  plusNumb3 = () => {
    countDS3++;
    if (countDS3 < 100) {
      if (countDS3 < 10) {
        document.getElementById('decsec3').innerHTML = "0" + countDS3;
      } else {
        document.getElementById('decsec3').innerHTML = countDS3;
      }
    }
  }
  minusNumb3 = () => {
    if (countDS3 > 0) {
      countDS3--;
      if (countDS3 < 100) {
        if (countDS3 < 10) {
          document.getElementById('decsec3').innerHTML = "0" + countDS3;
        } else {
          document.getElementById('decsec3').innerHTML = countDS3;
        }
      }
    }
  }
}

eraseAll3 = () => {
  timer3.clearTimer();
  countH3 = 0;
  countM3 = 0;
  countS3 = 0;
  countDS3 = 0;
  document.getElementById('hour3').innerHTML = "00";
  document.getElementById('minute3').innerHTML = "00";
  document.getElementById('second3').innerHTML = "00";
  document.getElementById('decsec3').innerHTML = "00";
  document.getElementById('mais3').disabled = false;
  document.getElementById('menos3').disabled = false;
  document.getElementById('start3').disabled = false;
  bep.pause();
}
resume3 = () => {
  timer3.resumeTimer();
}
stop3 = () => {
  timer3.stopTimer();
  bep.pause();
}
running3 = () => {
  console.log(timer3.getCurrentTime());
  bep.play();
  document.getElementById('hour3').innerHTML = hours;
  document.getElementById('minute3').innerHTML = minutes;
  document.getElementById('second3').innerHTML = seconds;
  document.getElementById('decsec3').innerHTML = ds;

  if (hours == 0 && minutes == 0 && seconds == 0 && ds == 0) {
    document.getElementById('mais3').disabled = false;
    document.getElementById('menos3').disabled = false;
    document.getElementById('start3').disabled = false;
    countH3 = 0;
    countM3 = 0;
    countS3 = 0;
    countDS3 = 0;
  }
}
start3 = () => {
  if (countH3 > 0 || countM3 > 0 || countS3 > 0 || countDS3 > 0) {
    document.getElementById('mais3').disabled = true;
    document.getElementById('menos3').disabled = true;
    document.getElementById('start3').disabled = true;
    var ms = ((countH3 * 3600000) + (countM3 * 60000) + (countS3 * 1000) + countDS3);
    console.log(ms);
    timer3.setTimer(ms);
    timer3.setTimerInterval();
    timer3.setCallbackTimeout(stop3);
    timer3.setCallbackTimeInterval(running3);
    timer3.startTimer();
  }
}

///////////////////
// CLASSE TIMER 4//
///////////////////

let timer4 = new Timer();

var countH4 = 0;
var countM4 = 0;
var countS4 = 0;
var countDS4 = 0;
hoursValue4 = () => {
  plusNumb4 = () => {
    countH4++;
    if (countH4 < 100) {
      if (countH4 < 10) {
        document.getElementById('hour4').innerHTML = "0" + countH4;
      } else {
        document.getElementById('hour4').innerHTML = countH4;
      }
    }
    minusNumb4 = () => {
      if (countH4 > 0) {
        countH4--;
        if (countH4 < 100) {
          if (countH4 < 10) {
            document.getElementById('hour4').innerHTML = "0" + countH4;
          } else {
            document.getElementById('hour4').innerHTML = countH4;
          }
        }
      }
    }
  }
}
minuteValue4 = () => {
  plusNumb4 = () => {
    countM4++;
    if (countM4 < 100) {
      if (countM4 < 10) {
        document.getElementById('minute4').innerHTML = "0" + countM4;
      } else {
        document.getElementById('minute4').innerHTML = countM4;
      }
    }
  }
  minusNumb4 = () => {
    if (countM4 > 0) {
      countM4--;
      if (countM4 < 100) {
        if (countM4 < 10) {
          document.getElementById('minute4').innerHTML = "0" + countM4;
        } else {
          document.getElementById('minute4').innerHTML = countM4;
        }
      }
    }
  }
}
secondValue4 = () => {
  plusNumb4 = () => {
    countS4++;
    if (countS4 < 100) {
      if (countS4 < 10) {
        document.getElementById('second4').innerHTML = "0" + countS4;
      } else {
        document.getElementById('second4').innerHTML = countS4;
      }
    }
  }
  minusNumb4 = () => {
    if (countS4 > 0) {
      countS4--;
      if (countS4 < 100) {
        if (countS4 < 10) {
          document.getElementById('second4').innerHTML = "0" + countS4;
        } else {
          document.getElementById('second4').innerHTML = countS4;
        }
      }
    }
  }
}
decsecValue4 = () => {
  plusNumb4 = () => {
    countDS4++;
    if (countDS4 < 100) {
      if (countDS4 < 10) {
        document.getElementById('decsec4').innerHTML = "0" + countDS4;
      } else {
        document.getElementById('decsec4').innerHTML = countDS4;
      }
    }
  }
  minusNumb4 = () => {
    if (countDS4 > 0) {
      countDS4--;
      if (countDS4 < 100) {
        if (countDS4 < 10) {
          document.getElementById('decsec4').innerHTML = "0" + countDS4;
        } else {
          document.getElementById('decsec4').innerHTML = countDS4;
        }
      }
    }
  }
}

eraseAll4 = () => {
  timer4.clearTimer();
  countH4 = 0;
  countM4 = 0;
  countS4 = 0;
  countDS4 = 0;
  document.getElementById('hour4').innerHTML = "00";
  document.getElementById('minute4').innerHTML = "00";
  document.getElementById('second4').innerHTML = "00";
  document.getElementById('decsec4').innerHTML = "00";
  document.getElementById('mais4').disabled = false;
  document.getElementById('menos4').disabled = false;
  document.getElementById('start4').disabled = false;
  bep.pause();
}
resume4 = () => {
  timer4.resumeTimer();
}
stop4 = () => {
  timer4.stopTimer();
  bep.pause();
}
running4 = () => {
  console.log(timer4.getCurrentTime());
  bep.play();
  document.getElementById('hour4').innerHTML = hours;
  document.getElementById('minute4').innerHTML = minutes;
  document.getElementById('second4').innerHTML = seconds;
  document.getElementById('decsec4').innerHTML = ds;

  if (hours == 0 && minutes == 0 && seconds == 0 && ds == 0) {
    document.getElementById('mais4').disabled = false;
    document.getElementById('menos4').disabled = false;
    document.getElementById('start4').disabled = false;
    countH4 = 0;
    countM4 = 0;
    countS4 = 0;
    countDS4 = 0;
  }
}
start4 = () => {
  if (countH4 > 0 || countM4 > 0 || countS4 > 0 || countDS4 > 0) {
    document.getElementById('mais4').disabled = true;
    document.getElementById('menos4').disabled = true;
    document.getElementById('start4').disabled = true;
    var ms = ((countH4 * 3600000) + (countM4 * 60000) + (countS4 * 1000) + countDS4);
    console.log(ms);
    timer4.setTimer(ms);
    timer4.setTimerInterval();
    timer4.setCallbackTimeout(stop4);
    timer4.setCallbackTimeInterval(running4);
    timer4.startTimer();
  }
}