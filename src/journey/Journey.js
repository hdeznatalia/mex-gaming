import React, { Component } from 'react';
import ImageSelector from './steps/ImageSelector';
import BoardGenerator from './steps/BoardGenerator'
import Downloader from './steps/Downloader'
import StepWizard from "react-step-wizard";

class Journey extends Component {
  handleOnStepChange = (s) => {
    console.log("s:" + s);
  }
  render() {
    let custom = {
      enterRight: 'your custom css transition classes',
      enterLeft : 'your custom css transition classes',
      exitRight : 'your custom css transition classes',
      exitLeft  : 'your custom css transition classes',
      intro     : 'your custom css transition classes'
    };
    return (
      <StepWizard initialStep={1} transitions={custom} onStepChange={this.handleOnStepChange}>
        <ImageSelector  stepName={"fileUploader"} />
        <BoardGenerator  stepName={"boardGenerator"} />
        <Downloader  stepName={"boardGenerator"} />
      </StepWizard>

    );
  }
}

export default Journey;
