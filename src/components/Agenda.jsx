import React from "react";
import { Timeline, TimelineItem } from "react-daisyui";

const Agenda = () => {
  return (
    <Timeline>
      <TimelineItem>
        <div className="timeline-start timeline-box">
          First Macintosh computer
        </div>
      </TimelineItem>
      <TimelineItem>
        <div className="timeline-end timeline-box">iMac</div>
      </TimelineItem>
      <TimelineItem>
        <div className="timeline-start timeline-box">iPod</div>
      </TimelineItem>
      <TimelineItem>
        <div className="timeline-end timeline-box">iPhone</div>
      </TimelineItem>
      <TimelineItem>
        <div className="timeline-start timeline-box">Apple Watch</div>
      </TimelineItem>
    </Timeline>
  );
};

export default Agenda;
