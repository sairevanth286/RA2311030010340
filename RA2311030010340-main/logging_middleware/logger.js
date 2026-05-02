import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrZTc2MDZAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMTMzNSwiaWF0IjoxNzc3NzAwNDM1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZTYwODQxODUtMDcwNC00ZmM4LWI4ZDEtODZmYjMyMjU0NTRhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZWx1cmkga3Jpc2huYSBzYWkgcmV2YW50aCIsInN1YiI6IjZmYWZjMzNkLTlkNmUtNDRlMy04NTBmLWE3MGE4YWMzZTRlOCJ9LCJlbWFpbCI6ImtlNzYwNkBzcm1pc3QuZWR1LmluIiwibmFtZSI6ImVsdXJpIGtyaXNobmEgc2FpIHJldmFudGgiLCJyb2xsTm8iOiJyYTIzMTEwMzAwMTAzNDAiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiI2ZmFmYzMzZC05ZDZlLTQ0ZTMtODUwZi1hNzBhOGFjM2U0ZTgiLCJjbGllbnRTZWNyZXQiOiJYYUJLWGZrYUVyQktjekZVIn0.bMffT_D0f3Q37EXBypf3uc7YKEpnacvluIzh-a6lP7g";

export const Log = async (level, pkg, message) => {
  try {
    await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack: "frontend",
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );
  } catch (err) {
    console.error("Log failed");
  }
};