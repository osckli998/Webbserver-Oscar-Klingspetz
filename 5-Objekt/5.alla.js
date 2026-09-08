let dbOptions = {
  sslAktiv: true,
  timeoutLimit: 5000,
  dbName: "prouduktionDB",
};

let userProfile = {
  username: "alex Dev",
  acountAge: 3,
  isPremium: false,
};

const serverStatus = {
  port: 3000,
  status: "LAUNCHING",
};

serverStatus.status = "online";

serverStatus.activeUsers = 1;

const apiQuota = {
  requestsUsed: 95,
  maxLimit: 100,
};

if (apiQuota.requestsUsed >= apiQuota.maxLimit) {
  console.log("Anropsgränsen är nådd! API:et blockeras");
} else {
  console.log("Anrop Godkänt");
}

console.log(serverStatus);
