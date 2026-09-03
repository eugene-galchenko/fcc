// In this lab, you will simulate configurable traffic light cycles and log anomalies.
// 
// You'll work with config objects that describe the phases of a traffic light. Each config object has the following properties:
// 
// fault: a boolean flag that triggers early termination when true.
// phases: an array of phase objects.
// Each phase object inside phases has the following properties:
// 
// color: a string representing the light color ("green", "yellow", or "red").
// duration: a positive integer representing how long the phase lasts in seconds.
// You can refer to the provided config1, config2, config3, and config4 objects as examples of possible configuration objects.

const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

// Здесь начинается мой код

function runSequence(config, cycles){
  if (!config.phases || config.phases.length === 0){
    console.log("No phases found");
    return;
  }

  if(config.fault){
    console.log("Faulted phase!");
    return;
  }

  for (let i = 0; i < cycles; i++){
    for(const phase of config.phases){
      if(phase.duration <= 0){
        console.log("Invalid phase detected");
        continue;
      }
      console.log(`Switching to ${phase.color} for ${phase.duration} s`);
    }
  }
}

function generateTimeline(config, cycles){
  const timeline = [];
  let elapsedTime = 0;

  for(let i = 0; i<cycles; i++){
    for (const phase of config.phases){
      elapsedTime += phase.duration;
      timeline.push(elapsedTime);
    }
  }

  return timeline;
}

runSequence(config1, 1);
console.log(generateTimeline (config2,1));

