import express from "express";
import envHandler from "./helpers/envHandler.js";
import connectToDB from "./initializers/DB.js";
import Logger from "./initializers/logger.js";
import expressMongoSanitize from "express-mongo-sanitize";
import login from "./routes/login.js";
import verifyuser from "./routes/verifyuser.js";
import userinfo from "./routes/userinfo.js";
import slotinfo from "./routes/slotinfo.js";
import bookslot from "./routes/bookslot.js";
import changeslot from "./routes/changeslot.js";
import cancelslot from "./routes/cancelslot.js";
import adminslotinfo from "./routes/adminslotinfo.js";
import admincancelslot from "./routes/admincancelslot.js";
import adminassignslot from "./routes/adminassignslot.js";
import createdata from "./routes/createdata.js";

const app = express();
const port = envHandler('PORT');

app.use(express.json());
app.use(expressMongoSanitize());

connectToDB();

app.use("/login", login);
app.use("/verify-user", verifyuser);
app.use("/user-info", userinfo);
app.use("/slot-info", slotinfo);
app.use("/book-slot", bookslot);
app.use("/change-slot", changeslot);
app.use("/cancel-slot", cancelslot);
app.use("/admin-slot-info", adminslotinfo);
app.use("/admin-cancel-slot", admincancelslot);
app.use("/admin-assign-slot", adminassignslot);
app.use("/create-data", createdata);

app.listen(port, () => {
    Logger.info(`Server running at http://localhost:${port}`);
});