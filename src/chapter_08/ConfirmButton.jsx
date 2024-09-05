import React from "react";

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false, // 확인 여부 저장을 위한 변수
    };

    this.handleConfirm = this.handleConfirm.bind(this);
  }
  // onClick 이벤트 처리를 위한 함수
  // bind를 사용하는 방식으로 이벤트 핸들러를 처리
  handleConfirm() {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }

  render() {
    return (
      <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
        {this.state.isConfirmed ? "확인됨" : "확인하기"}
      </button>
    );
  }
}

export default ConfirmButton;
