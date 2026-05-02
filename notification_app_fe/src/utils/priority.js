const weightMap = {
  Placement: 3,
  Result: 2,
  Event: 1
};

export const getTopNotifications = (notifications) => {
  return notifications
    .sort((a, b) => {
      if (weightMap[b.Type] !== weightMap[a.Type]) {
        return weightMap[b.Type] - weightMap[a.Type];
      }
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, 10);
};