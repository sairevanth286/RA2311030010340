import axios from "axios";

export const fetchNotifications = async () => {
  const res = await axios.get("http://localhost:5000/notifications");
  return res.data.notifications;
};