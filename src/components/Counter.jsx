import "./styles/Counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counter() {
  return (
    <div id="counter" className="d-flex justify-content-around">
      {/* Add counting effect and paralax */}
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="far fa-lightbulb my-icon"></i>
        <div>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div className="number-counter">
                {isVisible ? <CountUp end={6} duration={2} /> : 1}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div className="d-flex justify-content-center">Completed Projects</div>
      </div>
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="fas fa-laptop-code my-icon"></i>
        <div>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div className="number-counter">
                {isVisible ? <CountUp end={3} duration={2} /> : 1}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div>Hackathons Participated</div>
      </div>
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="fas fa-award my-icon"></i>
        <div>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div className="number-counter">
                {isVisible ? <CountUp end={1} duration={2} /> : 1}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div>Awards</div>
      </div>
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="fas fa-users my-icon"></i>
        <div>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div>{isVisible ? <CountUp end={1149} duration={2} /> : 500}</div>
            )}
          </VisibilitySensor>
        </div>
        <div>LinkedIn Followers</div>
      </div>
    </div>
  );
}

export default Counter;
