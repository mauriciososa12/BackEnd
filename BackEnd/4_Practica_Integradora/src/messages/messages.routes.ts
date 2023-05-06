import express from "express";
import { authToken } from "../utils/jwt.js";
import { getChatPage } from "./messages.controller.ts";
import { authPolicies } from "../utils.js";

const Router = express.Router();

Router.get("/", authToken, authPolicies("USER", null), getChatPage);

export default Router;