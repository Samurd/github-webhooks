import 'dotenv/config';
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().default(3000).asPortNumber(),
  SECRET_TOKEN: get("SECRET_TOKEN").required().asString(),
};
