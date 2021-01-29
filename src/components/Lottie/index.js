/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../screens/animations/loading.json';

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        animationData: animationData.default,
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={50}
          width={50}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}
