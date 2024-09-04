import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    // setInterval을 사용하여 1초마다 상태를 업데이트
    this.timer = setInterval(() => {
      const { notifications } = this.state;

      // 현재 상태의 notifications 배열에 새로운 알림 추가
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;

        // 기존 배열을 수정하지 않고, 새로운 알림이 추가된 새 배열 생성
        const newNotifications = notifications.concat(
          reservedNotifications[index]
        );

        // 상태를 업데이트하여 리렌더링 트리거
        this.setState({
          notifications: newNotifications,
        });
      } else {
        // 알림 추가가 모두 끝나면 notifications 배열 비우기 (componentWillUnmount)
        this.setState({
          notifications: [],
        });
        // 모든 알림이 표시되면 타이머 정지
        clearInterval(this.timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트될 때 타이머 정리하여 메모리 누수 방지
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
